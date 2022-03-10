import { permissionsList } from "./schemas/fields";
// access control is a yes or no based on users session

import { ListAccessArgs } from "./types";

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session; // if session is undefined returns false
}

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

// permissions - check if someone meets a criteria - yes or no
export const permissions = {
  ...generatedPermissions,
};

// rule based function -
// rules return a boolean OR a filter which limits which products they can CRUD
export const rules = {
  canManageProducts({ session }): ListAccessArgs {
    if (!isSignedIn({ session })) {
      // returns access proper error
      return false;
    }
    // do they have the permission of canManageProducts?
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // if not, do they own this item?
    return { user: { id: session.itemId } };
  },
  canOrder({ session }): ListAccessArgs {
    if (!isSignedIn({ session })) {
      return false;
    }
    // do they have the permission of canManageProducts?
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // if not, do they own this item?
    return { user: { id: session.itemId } };
  },
  canManageOrderItems({ session }): ListAccessArgs {
    if (!isSignedIn({ session })) {
      return false;
    }
    // do they have the permission of canManageProducts?
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // if not, do they own this item?
    return { order: { user: { id: session.itemId } } };
  },
  canReadProducts({ session }): ListAccessArgs {
    if (!isSignedIn({ session })) {
      return false;
    }
    if (permissions.canManageProducts({ session })) {
      return true; // they can read everything
    }
    // they should only see avaialable products (based on status field)
    return { status: "AVAILABLE" };
  },
  canManageusers({ session }): ListAccessArgs {
    if (!isSignedIn({ session })) {
      return false;
    }
    // do they have the permission of canManageProducts?
    if (permissions.canManageUsers({ session })) {
      return true;
    }
    // may only update themselves
    return { id: session.itemId };
  },
};

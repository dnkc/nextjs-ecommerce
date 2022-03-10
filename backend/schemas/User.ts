import { list } from "@keystone-next/keystone/schema";
import { text, password, relationship } from "@keystone-next/fields";
import { permissions, rules } from "../access";

export const User = list({
  //access:
  access: {
    create: () => true,
    read: rules.canManageusers,
    update: rules.canManageusers,
    // only people with permission can delete themselves - can not delete self
    delete: permissions.canManageUsers,
  },
  ui: {
    hideCreate: (args) => !permissions.canManageUsers(args), // hide backend ui from regular users
    hideDelete: (args) => !permissions.canManageUsers(args),
  },
  // ui
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    cart: relationship({
      ref: "CartItem.user",
      many: true,
      ui: {
        createView: { fieldMode: "hidden" },
        itemView: { fieldMode: "read" },
      },
    }),
    orders: relationship({ ref: "Order.user", many: true }),
    role: relationship({
      ref: "Role.assignedTo",
      access: {
        create: permissions.canManageUsers,
        update: permissions.canManageUsers,
      },
    }), // TODO: add access control
    products: relationship({ ref: "Product.user", many: true }),
    // to do: add cart, roles, and orders
  },
});

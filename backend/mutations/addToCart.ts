import { CartItemCreateInput } from "./../.keystone/schema-types";
import { KeystoneContext, SessionStore } from "@keystone-next/types";
import { Session } from "../types";
import { CartItem } from "../schemas/CartItem";

export default async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  console.log("adding to cart!");
  // query the current user
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error("You must be logged in to do this!");
  }
  // query the current users cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields: "id, quantity",
  });

  const [existingCartItem] = allCartItems;

  if (existingCartItem) {
    console.log(existingCartItem);
    console.log(
      `There are already ${existingCartItem.quantity} in cart, increment by 1.`
    );
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
      resolveFields: false,
    });
  }
  // check if item being added is already in cart
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
    resolveFields: false,
  });
  // increment by 1 if yes, if no create new cart item
}

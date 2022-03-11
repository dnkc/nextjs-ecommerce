import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useCart } from "../lib/cartState";
import { CURRENT_USER_QUERY } from "./User";

//const { openCart } = useCart();

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

export default function AddToCart({ id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const buttonClick = () => {
    addToCart();
    //openCart();
  };

  return (
    <button type="button" disabled={loading} onClick={buttonClick}>
      Add{loading && "ing"} To Cart
    </button>
  );
}

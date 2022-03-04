import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import Form from "./styles/Form";
import DisplayError from "./ErrorMessage";
import useForm from "../lib/useForm";

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      name
      description
      price
    }
  }
`;

const UpdateProduct = ({ id }) => {
  // get existing product
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  // need mutation to update the product
  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION, {
    variables: {
      id: id,
      // updates passing in call below
    },
  });
  //create state for form inputs
  const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Product);

  // form to handle the updates
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Form
      onSubmit={async (e) => {
        // TO DO: HANDLE SUBMIT
        e.preventDefault();
        const res = await updateProduct({
          variables: {
            id: id,
            name: inputs.name,
            description: inputs.description,
            price: inputs.price,
          },
        }).catch(console.error);
        // // console.log(inputs);
        // // submit input fields to backend
        // const res = await createProduct(); //INFO IS ALREADY PRE-LOADED
        // clearForm();
        // // go to the products page
        // Router.push({
        //   pathname: `/product/${res.data.createProduct.id}`,
        //   //query: query params (?id=)
        // });
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <label htmlFor="image">
          Image
          <input
            type="file"
            required
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name ?? ""}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price ?? ""}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="description"
            value={inputs.description ?? ""}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Product</button>
      </fieldset>
    </Form>
  );
};

export default UpdateProduct;

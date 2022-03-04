import useForm from "../lib/useForm";
import Form from "./styles/Form";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import DisplayError from "./ErrorMessage";
import { ALL_PRODUCTS_QUERY } from "./Products";
import Router from "next/router";

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    #which variables are getting passed in? and what types are they?
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        #nested creation (specific to keystone.js)
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: "Nice shoes",
    price: 34121,
    description: "The best shoes!",
    image: "",
  });

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      //refetch all products after creation mutation
      refetchQueries: [
        {
          query: ALL_PRODUCTS_QUERY,
          //variables:
        },
      ],
    }
  );

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        // console.log(inputs);
        // submit input fields to backend
        const res = await createProduct(); //INFO IS ALREADY PRE-LOADED
        clearForm();
        // go to the products page
        Router.push({
          pathname: `/product/${res.data.createProduct.id}`,
          //query: query params (?id=)
        });
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
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
            value={inputs.name}
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
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}

export default CreateProduct;

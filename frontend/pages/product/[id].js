import SingleProductPage from "../../components/SingleProductPage";

export default function SingleProduct({ query }) {
  return <SingleProductPage id={query.id} />;
}

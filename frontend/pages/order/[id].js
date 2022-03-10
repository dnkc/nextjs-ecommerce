import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import ErrorMessage from "../../components/ErrorMessage";
import OrderStyles from "../../components/styles/OrderStyles";
import Head from "next/head";
import formatMoney from "../../lib/formatMoney";
import PleaseSignIn from "../../components/PleaseSignIn";

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    Order(where: { id: $id }) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        quantity
        price
        description
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function SingleOrderPage({ query }) {
  const { data, error, loading } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id: query.id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;

  const { Order: order } = data;

  return (
    <PleaseSignIn>
      <OrderStyles>
        <Head>
          <title>Sick Fits - {order.id}</title>
        </Head>
        <p>
          <span>Order ID:</span>
          <span>{order.id}</span>
        </p>
        <p>
          <span>Charge:</span>
          <span>{order.charge}</span>
        </p>
        <p>
          <span>Total:</span>
          <span>{formatMoney(order.total)}</span>
        </p>
        <p>
          <span>Item Count:</span>
          <span>{order.items.length}</span>
        </p>
        <div>
          {order.items.map((item) => (
            <div className="order-item" key={item.id}>
              <img
                src={item.photo.image.publicUrlTransformed}
                alt={item.title}
              />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>Qty: {item.quantity}</p>
                <p>Each: {formatMoney(item.price)}</p>
                <p>Sub Total: {formatMoney(item.price * item.quantity)}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </OrderStyles>
    </PleaseSignIn>
  );
}

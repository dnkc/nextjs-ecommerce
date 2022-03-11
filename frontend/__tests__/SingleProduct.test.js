import { MockedProvider } from "@apollo/react-testing";
import { render, screen } from "@testing-library/react";
import SingleProductPage, {
  SINGLE_ITEM_QUERY,
} from "../components/SingleProductPage";
import { fakeItem } from "../lib/testUtils";

const product = fakeItem();
const mocks = [
  {
    // When someone requests this query and variable combo
    request: {
      query: SINGLE_ITEM_QUERY,
      variables: {
        id: "123",
      },
    },
    // Return this data
    result: {
      data: {
        Product: product,
      },
    },
  },
];

describe("<SingleProduct />", () => {
  it("renders with proper data", async () => {
    // making fake data
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SingleProductPage id="123" />
      </MockedProvider>
    );
    // debug();
    // wait for the test id to show up
    await screen.findByTestId("singleProduct");
    expect(container).toMatchSnapshot();
  });

  it("Errors out when an item is not found", async () => {
    const errorMocks = [
      {
        // When someone requests this query and variable combo
        request: {
          query: SINGLE_ITEM_QUERY,
          variables: {
            id: "123",
          },
        },
        // Return this data
        result: {
          errors: [{ message: "Item not found!!!!!!" }],
        },
      },
    ];
    const { container, debug } = render(
      <MockedProvider mocks={errorMocks}>
        <SingleProductPage id="123" />
      </MockedProvider>
    );
    // debug();
    // wait for the test id to show up
    await screen.findByTestId("graphql-error");
    expect(container).toHaveTextContent("Shoot!");
    expect(container).toHaveTextContent("Item not found!!!!!!");
  });
});

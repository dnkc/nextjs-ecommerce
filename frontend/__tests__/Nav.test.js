import { render, screen } from "@testing-library/react";
import wait from "waait";
import { MockedProvider } from "@apollo/react-testing";
import SingleProductPage, {
  SINGLE_ITEM_QUERY,
} from "../components/SingleProductPage";
import { fakeCartItem, fakeUser } from "../lib/testUtils";
import Nav from "../components/Nav";
import { CartStateProvider } from "../lib/cartState";
import { CURRENT_USER_QUERY } from "../components/User";

// make some mocks for being logged out, logged in, and logged in with cart items

const noSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: null } },
  },
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: fakeUser() } },
  },
];

const signedInMocksWithItems = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        authenticatedItem: fakeUser({
          cart: [fakeCartItem()],
        }),
      },
    },
  },
];

describe("<Nav />", () => {
  it("Renders a minimal nav when signed out", () => {
    const { container } = render(
      <CartStateProvider>
        <MockedProvider mocks={noSignedInMocks}>
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );
    expect(container).toHaveTextContent("Sign In");
    expect(container).toMatchSnapshot();
    const link = screen.getByText("Sign In");
    const productsLink = screen.getByText("Products");
    expect(link).toHaveAttribute("href", "/signin");
    expect(productsLink).toHaveAttribute("href", "/products");
  });

  it("Renders a full nav when signed in", async () => {
    const { container } = render(
      <CartStateProvider>
        <MockedProvider mocks={signedInMocks}>
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );
    await screen.findByText("Account");
    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent("Sign Out");
    expect(container).toHaveTextContent("My Cart");
  });

  it("Renders the amount of items in the cart", async () => {
    const { container } = render(
      <CartStateProvider>
        <MockedProvider mocks={signedInMocksWithItems}>
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );
    await screen.findByText("Account");
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});

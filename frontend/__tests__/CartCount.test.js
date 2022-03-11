import { render, screen } from "@testing-library/react";
import wait from "waait";
import CartCount from "../components/CartCount";

describe("<CartCount />", () => {
  it("Renders", () => {
    render(<CartCount count={10} />);
  });
  it("Matches snapshot", () => {
    const { container } = render(<CartCount count={11} />);
    expect(container).toMatchSnapshot();
  });
  it("Updates via props", async () => {
    const { container, rerender } = render(<CartCount count={11} />);
    expect(container.textContent).toBe("11");
    // update the props
    rerender(<CartCount count="12" />);
    // wait for 400 ms (as in css)
    expect(container.textContent).toBe("1211");
    await wait(400);
    expect(container.textContent).toBe("12");
    expect(container).toMatchSnapshot();
  });
});
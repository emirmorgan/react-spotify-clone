import { render as testRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";
import Menu from "../components/Sidebar/Menu";

const render = (component) =>
  testRender(<BrowserRouter>{component}</BrowserRouter>);

test("Sidebar navigation control", () => {
  render(<Menu />);

  const homeNav = screen.getByRole("link", { name: "Home" });
  const searchNav = screen.getByRole("link", { name: "Search" });
  const libraryNav = screen.getByRole("link", { name: "Your Library" });

  expect(homeNav && searchNav && libraryNav).toBeInTheDocument();
});

test("Checking navigation links are correct", () => {
  render(<Menu />);

  const homeNav = screen.getByRole("link", { name: "Home" });
  const searchNav = screen.getByRole("link", { name: "Search" });
  const libraryNav = screen.getByRole("link", { name: "Your Library" });

  expect(homeNav).toHaveAttribute("href", "/");
  expect(searchNav).toHaveAttribute("href", "/search");
  expect(libraryNav).toHaveAttribute("href", "/library");
});

test("Routing control of navigation links", () => {
  render(<Menu />);

  const homeNav = screen.getByRole("link", { name: "Home" });
  const searchNav = screen.getByRole("link", { name: "Search" });
  const libraryNav = screen.getByRole("link", { name: "Your Library" });

  //Testing Search Navigation Button
  userEvent.click(searchNav);
  expect(searchNav).toHaveAttribute("aria-current", "page");
  expect(homeNav).not.toHaveAttribute("aria-current", "page");
  expect(libraryNav).not.toHaveAttribute("aria-current", "page");

  //Testing Library Navigation Button
  userEvent.click(libraryNav);
  expect(libraryNav).toHaveAttribute("aria-current", "page");
  expect(homeNav).not.toHaveAttribute("aria-current", "page");
  expect(searchNav).not.toHaveAttribute("aria-current", "page");

  //Testing Home Navigation Button
  userEvent.click(homeNav);
  expect(homeNav).toHaveAttribute("aria-current", "page");
  expect(searchNav).not.toHaveAttribute("aria-current", "page");
  expect(libraryNav).not.toHaveAttribute("aria-current", "page");
});

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const snap = render(<App />);
  expect(snap).toMatchSnapshot();
});

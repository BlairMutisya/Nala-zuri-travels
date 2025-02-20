import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./index";
import LandingPage from "./pages/LandingPage";

jest.mock("./pages/LandingPage", () => () => <div>Mocked LandingPage</div>);

describe("App component", () => {});

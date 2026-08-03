import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders the hero with name and tagline", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /andres bermudez/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/software engineer/i, { selector: "p, span, h2" }),
    ).toBeInTheDocument();
  });

  it("renders the four nav anchor links", () => {
    render(<App />);
    const nav = screen.getByRole("navigation");
    for (const target of ["#about", "#skills", "#projects", "#contact"]) {
      expect(nav.querySelector(`a[href="${target}"]`)).not.toBeNull();
    }
  });

  it("renders exactly three project cards linking to GitHub", () => {
    render(<App />);
    const projectLinks = screen
      .getAllByRole("link")
      .filter((a) => a.getAttribute("href")?.startsWith("https://github.com/andresbetov"));
    expect(projectLinks).toHaveLength(3);
  });

  it("renders social links with correct hrefs", () => {
    render(<App />);
    for (const href of [
      "https://github.com/andresbetov",
      "https://www.linkedin.com/in/andresbetov/",
      "https://x.com/andresbetov",
      "https://www.instagram.com/andresbetov/",
    ]) {
      expect(document.querySelector(`a[href="${href}"]`)).not.toBeNull();
    }
  });

  it("has no horizontal overflow at mobile width", () => {
    document.body.style.width = "320px";
    render(<App />);
    expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(320);
    document.body.style.width = "";
  });
});

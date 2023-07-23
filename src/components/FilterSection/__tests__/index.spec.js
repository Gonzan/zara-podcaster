import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import FilterSection from "../index";
import { PODCASTS_MOCK } from "../mocks/podcasts";

describe('FilterSection', () => {
  test("should render the search section", () => {
    const { getByTestId } = render(<FilterSection podcasts={PODCASTS_MOCK} />);
    const searchSection = getByTestId("search-section");
    expect(searchSection).toBeInTheDocument();
  });

  test("should render the input field", () => {
    const wrapper = render(<FilterSection podcasts={PODCASTS_MOCK} />);
    const inputField = wrapper.getByTestId("search-section");
    expect(inputField).toBeInTheDocument();
  });

  test("should render the podcast grid", () => {
    const { getByTestId } = render(<FilterSection podcasts={PODCASTS_MOCK} />);
    const podcastGrid = getByTestId("search-section");
    expect(podcastGrid).toBeInTheDocument();
  });

  test("should update the search results when the input field is changed", async() => {
    const { getByTestId, getAllByTestId } = render(<FilterSection podcasts={PODCASTS_MOCK} />);
    const inputField = getByTestId("search-section");
    fireEvent.change(inputField, { target: { value: "joe" } });
    await waitFor(() => {
      const podcastCards = getAllByTestId("podcast-card");
      expect(podcastCards.length).toBe(1);
    });
  });
});
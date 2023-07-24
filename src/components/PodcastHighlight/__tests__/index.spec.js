import { render, screen } from "@testing-library/react";
import PodcastHighlight from "../index";
import { podcastHighlightMock } from "../../../test/mock";

test("should render the podcast highlight without title", () => {
  const { imageUrl, author, summary } = podcastHighlightMock;
  render(<PodcastHighlight imageUrl={imageUrl} author={author} summary={summary} />);

  const podcastAuthor = screen.getByText(`By ${podcastHighlightMock.author}`);
  expect(podcastAuthor).toBeInTheDocument();

  const podcastTitle = screen.queryByText(podcastHighlightMock.title);
  expect(podcastTitle).not.toBeInTheDocument();
});

test("should render the podcast highlight without summary", () => {
  const { imageUrl, title, author } = podcastHighlightMock;
  render(<PodcastHighlight imageUrl={imageUrl} title={title} author={author} />);

  const podcastImage = screen.getByTestId("podcast-image");
  expect(podcastImage).toBeInTheDocument();
  expect(podcastImage).toHaveAttribute("alt", "podcast image");

  const podcastAuthor = screen.getByText(`By ${podcastHighlightMock.author}`);
  expect(podcastAuthor).toBeInTheDocument();

  const podcastSummary = screen.queryByText(podcastHighlightMock.summary);
  expect(podcastSummary).not.toBeInTheDocument();
});

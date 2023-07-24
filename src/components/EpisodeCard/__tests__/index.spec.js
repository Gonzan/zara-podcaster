import React from "react";
import { render, screen } from "@testing-library/react";
import EpisodeCard from "../index";

describe("EpisodeCard component", () => {
  test("renders EpisodeCard component with correct props", () => {
    const propsMock = {
      title: 'Episode 1',
      description: "This is the description of Episode 1",
      audioSrc: "path/to/audio.mp3"
    };
  
    render(<EpisodeCard {...propsMock} />);
  
    const titleElement = screen.getByText(propsMock.title);
    const descriptionElement = screen.getByText(propsMock.description);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  
    const audioElement = screen.getByLabelText("Audio Player"); // Add a label to the audio element
    expect(audioElement).toBeInTheDocument();
    expect(audioElement).toHaveAttribute("src", propsMock.audioSrc);
    expect(audioElement).toHaveAttribute("type", "audio/mpeg");
  });
});

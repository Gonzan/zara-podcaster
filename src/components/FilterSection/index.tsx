import { useState } from "react";
import { SanitizedPodcasts } from "./types";
import styles from "./FilterSection.module.css";
import PodcastCard from "../PodcastCard";
import Badge from "../Badge";
import { filteredPodcasts } from "@/utils/sanitizePodcastEpisodeList";

type FilterSectionProps = {
  podcasts: SanitizedPodcasts;
};

const FilterSection = ({podcasts}: FilterSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredPodcastsList = filteredPodcasts(podcasts, searchTerm);
  
  return (
    <div>
      <section className={styles.search}>
        <Badge count={filteredPodcastsList.length} />
        
        <input
          type="text"
          placeholder="Filter podcasts..."
          className={styles.filterInput}
          value={searchTerm}
          onChange={handleInputChange}
          data-testid="search-section"
        />
      </section>

      <ul className={styles.podcastGrid} >
        {filteredPodcastsList.map((podcast) => (
          <li key={podcast.id} data-testid="podcast-card">
            <PodcastCard {...podcast} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSection;

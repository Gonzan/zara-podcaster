import { useState } from "react";
import { sanitizePodcastEpisodeList } from "../../utils/sanitizePodcastEpisodeList";
import { PodcastList, SanitizedPodcasts, SanitizedPodcastsProps } from "./types";
import styles from "./FilterSection.module.css";
import PodcastCard from "../PodcastCard";
import Badge from "../Badge";

type FilterSectionProps = {
  podcasts: PodcastList;
};

const FilterSection = ({podcasts}: FilterSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const sanitizedData: SanitizedPodcasts = sanitizePodcastEpisodeList(podcasts);

  const filteredPodcasts = sanitizedData.filter(
    (podcast: SanitizedPodcastsProps) =>
      podcast.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      podcast.author?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <section className={styles.search}>
        <Badge count={filteredPodcasts.length} />
        
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
        {filteredPodcasts.map((podcast) => (
          <li key={podcast.id} data-testid="podcast-card">
            <PodcastCard {...podcast} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSection;

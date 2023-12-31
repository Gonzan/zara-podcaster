export interface PodcastName {
  label: Label;
}

export interface PodcastImage {
  label: Label;
  attributes: { height: string };
}

export interface PodcastPrice {
  label: string;
  attributes: { amount: string; currency: string };
}

export interface PodcastContentType {
  attributes: { term: string; label: Label };
}

export interface PodcastArtist {
  label: Label;
  attributes?: { href: string };
}

export interface PodcastReleaseDate {
  label: Label;
  attributes: { label: Label };
}

export interface PodcastSummary {
  label: Label;
}

export interface PodcastRights {
  label: Label;
}

export interface PodcastTitle {
  label: Label;
}

export interface PodcastLink {
  attributes: { rel: string; type: string; href: string };
}

export interface PodcastId {
  label: Label;
  attributes: { "im:id": string };
}

export interface PodcastCategory {
  attributes: { "im:id": string; term: string; scheme: string; label: string };
}

export interface Podcast {
  "im:name": PodcastName;
  "im:image": PodcastImage[];
  "im:price": PodcastPrice;
  "im:contentType": PodcastContentType;
  "im:artist": PodcastArtist;
  "im:releaseDate": PodcastReleaseDate;
  id: PodcastId;
  summary: PodcastSummary;
  rights?: PodcastRights;
  title: PodcastTitle;
  link: PodcastLink;
  category: PodcastCategory;
}

export type PodcastList = Podcast[];

type Label=string
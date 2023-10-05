export interface Character {
  id: number;
  anime_id: number;
  anime_image: string;
  character_image: string;
  character_thumb: string;
  gender: string;
  name: string;
  origin: string;
  desc: string;
}

// structure for response in "search anime"
export interface SearchResults {
  search_term: string;
  search_results: AnimeCharacter[];
}

// structure for response in "search anime" => Array
export interface AnimeCharacter {
  characters_url: string;
  anime_id: number;
  anime_image: string;
  anime_name: string;
}

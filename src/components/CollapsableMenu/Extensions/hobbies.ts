export type ExtensionStatus =
  | "installed"
  | "processing"
  | "waiting"
  | "disabled";

export interface HobbyExtension {
  id: string;
  name: string;
  description: string;
  version: string;
  publisher: string;
  status: ExtensionStatus;
  color: string; // accent color for the icon badge
  img?: string; // optional image URL for the icon (if not provided, use a colored badge with initials)
}

export const hobbies: HobbyExtension[] = [
  {
    id: "photography",
    name: "Photography",
    description:
      "Capturing moments through the lens — street, portrait, and landscape.",
    version: "3.2.1",
    publisher: "Creative Eye Studio",
    status: "installed",
    color: "#5C9CF5",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: "gaming",
    name: "Gaming",
    description:
      "Strategy, RPG and indie games — always chasing that next achievement.",
    version: "8.0.0",
    publisher: "Pixel Nexus Labs",
    status: "installed",
    color: "#A371F7",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: "music-production",
    name: "Music Production",
    description: "Producing beats and soundscapes in a home DAW setup.",
    version: "2.1.4",
    publisher: "SoundForge Audio",
    status: "processing",
    color: "#F78C6C",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: "hiking",
    name: "Hiking",
    description:
      "Exploring trails and summits — the outdoors is the best debugger.",
    version: "1.4.0",
    publisher: "TrailBlaze Co.",
    status: "installed",
    color: "#3FB950",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: "reading",
    name: "Reading",
    description:
      "Sci-fi, philosophy and tech books — always with a highlighter.",
    version: "5.6.2",
    publisher: "BookStack Press",
    status: "installed",
    color: "#F0C040",
  },
  {
    id: "drawing",
    name: "Digital Drawing",
    description: "Sketching characters and UI concepts on a drawing tablet.",
    version: "1.0.0",
    publisher: "ArtBoard Inc.",
    status: "waiting",
    color: "#FF7B72",
  },
  {
    id: "chess",
    name: "Chess",
    description: "Obsessed with openings, endgames and online blitz matches.",
    version: "12.3.0",
    publisher: "Knight Moves Dev",
    status: "installed",
    color: "#79C0FF",
  },
];

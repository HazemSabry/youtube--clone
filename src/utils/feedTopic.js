const feedTopics = [
  "Music",
  "Javascript",
  "Gaming",
  "Television series",
  "History",
  "Live",
  "Text",
  "Website",
  "Editing",
  "Computers",
  "Chill-out music",
  "Podcasts",
  "Sheikh",
  "Animated films",
  "Indie Music",
  "Esports",
  "Pop Music",
  "Action-adventure games",
  "Playlists",
  "Arabic Music",
  "Algorithms",
  "Soundtracks",
  "Jazz",
  "Anime",
  "Computer Science",
  "Bayoumi Fouad",
  "Deep House",
  "Ambient Music",
  "Classical Music",
  "Visual arts",
  "Ahmed Mekky",
  "Middle Eastern Music",
  "Server",
  "Presentations",
];

export const feedTopicsRandom = () => {
  let feeds = [];
  for (let i = 1; i < 19; i++) {
    const j = Math.floor(Math.random() * i);
    [feedTopics[i], feedTopics[j]] = [feedTopics[j], feedTopics[i]];
  }
  feeds = ["All", ...feedTopics.slice(0, 18), "Recently uploaded"];
  return feeds;
};

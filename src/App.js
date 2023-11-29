import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Layout } from "./layout";
import {
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Shorts,
  Subscription,
  You,
  History,
  SignIn,
  Trending,
  Music,
  Live,
  Gaming,
  Sports,
  BrowseChannels,
  YouTubePremium,
  YouTubeMusic,
  YouTubeKids,
  Settings,
  ReportHistory,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#0F0F0F" }}>
        <Routes>
          <Route path="/" exact element={<Layout />}>
            <Route index element={<Feed />} />
            <Route path="Shorts/:id" element={<Shorts />} />
            <Route path="feed/subscriptions" element={<Subscription />} />
            <Route path="feed/you" element={<You />} />
            <Route path="feed/history" element={<History />} />
            <Route path="feed/trending" element={<Trending />} />
            <Route path="music" element={<Music />} />
            <Route path="live" element={<Live />} />
            <Route path="gaming" element={<Gaming />} />
            <Route path="sports" element={<Sports />} />
            <Route path="feed/guide_builder" element={<BrowseChannels />} />
            <Route path="premium" element={<YouTubePremium />} />
            <Route path="reporthistory" element={<ReportHistory />} />
          </Route>
          <Route path="/youtubemusic" element={<YouTubeMusic />} />
          <Route path="/youtubekids" element={<YouTubeKids />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

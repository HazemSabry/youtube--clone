import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { FeedsNav, Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [feedTopic, setFeedTopic] = useState("All");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${feedTopic}`).then((data) =>
      setVideos(data.items)
    );
  }, [feedTopic]);

  return (
    <>
      <FeedsNav feedTopic={feedTopic} setFeedTopic={setFeedTopic} />
      <Box>
        <Videos videos={videos} />
      </Box>
    </>
  );
};

export default Feed;

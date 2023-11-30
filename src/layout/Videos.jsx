import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../components";

const Videos = ({ videos }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      sx={{ width: "100%", mt: "3rem" }}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard item={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;

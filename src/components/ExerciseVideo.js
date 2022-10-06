import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideo = ({ exerciseVideos, name }) => {

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{name}</span> ExerciseVideo
      </Typography>

      <Stack
        flexWrap="wrap"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: '110px', xs: '0' } }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} />

            <Box>
              <Typography variant="h5" color="#000" alt={item.video.title}> {item.video.title}</Typography>
              <Typography variant="h6" color="#000"> {item.video.channelName}</Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideo;
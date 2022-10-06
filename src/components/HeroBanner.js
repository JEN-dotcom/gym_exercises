import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px"> Fitness Club </Typography>

      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}> Check out the most effective exercises </Typography>

      <Button color="error" href="exercises" variant='contained' sx={{ backgroundColor: '#ff2625', padding: "10px" }}>
        Explore Exercises
      </Button>

      <Typography fontWeight={600} color="#ff2625" sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }} fontSize="200px">
        Exercise
      </Typography>



      <Box component="img"
        sx={{
          display: { sm: 'inline', xs: 'none' },
          position: { xs: 'relative', sm: 'relative', md: 'absolute', lg: 'absolute' },
          width: {xs: '170px',md: '400px', lg: '700px'},
          height: {xs: 'auto', lg: '900px'},
          mt: {lg: "-330px", md: "-170px"},
          right: {xs: "-100px", md: "-40px"},
          top: {xs: "-100px", md: "0px"}

        }}


        src={HeroBannerImage}


        alt="banner" className="hero-banner-img" />

    </Box>
  );
};

export default HeroBanner;
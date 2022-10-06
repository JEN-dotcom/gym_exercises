import Icon from '../assets/icons/gym.png';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      onClick={() => setBodyPart(item)}
      sx={{
        gap: '47px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        borderTop: bodyPart === item ? '4px solid #ff2625' : ''
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart;
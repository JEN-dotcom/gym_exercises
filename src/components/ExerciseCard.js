import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
    return (
        <Link to={`/exercise/${exercise.id}`} className="exercise-card">
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

            <Stack direction="row">
                <Button sx={{
                        ml: '21px',
                        color: '#fff',
                        fontSize: '14px',
                        borderRadius: '20px',
                        background: '#ffa9a9',
                        textTransform: 'capitalize'
                    }}
                >
                    {exercise.bodyPart}
                </Button>

                <Button
                    sx={{
                        ml: '21px',
                        color: '#fff',
                        fontSize: '14px',
                        borderRadius: '20px',
                        background: '#fcc757',
                        textTransform: 'capitalize'
                    }}
                >
                    {exercise.target}
                </Button>
            </Stack>

            <Typography ml="21px" mt="11px" pb="10px" color="#000" fontSize="22px" fontWeight="bold" textTransform="capitalize">
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard;
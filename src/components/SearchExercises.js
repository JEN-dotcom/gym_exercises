import { useEffect, useState } from 'react';

import HorizontalScrollBar from './HorizontalScrollBar';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercisesData();

  }, [])


  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(exercise => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Awesome Exercises You Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          type="text"
          height="76px"
          value={search}
          placeholder="Search Exercises"
          onChange={e => setSearch(e.target.value.toLowerCase())}
          sx={{
            borderRadius: '40px',
            backgroundColor: '#fff',
            width: { lg: '800px', xs: '350px' },
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
          }}
        />
        <Button
          className='search-btn'
          onClick={handleSearch}
          sx={{
            right: '0',
            color: '#fff',
            height: '56px',
            bgcolor: '#FF2625',
            position: "absolute",
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
          }}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
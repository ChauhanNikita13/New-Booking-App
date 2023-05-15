import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import MoviesItem from "./MoviesItem";
import { getAllmovie } from "../../Api-helpers/api-helper";

const Movies = () => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    getAllmovie()
      .then((data) => setmovies(data.movies))
      .catch((err) => console.log("no data found"));
  }, []);
  
  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography
        variant="h4"
        padding={2}
        textAlign="center"
        bgcolor={"#900C3F"}
        width="40%"
        color="white"
        margin={"auto"}
      >
        All Movies
      </Typography>
      <Box
        width={"100%"}
        margin={"auto"}
        marginTop="5"
        padding={4}
        display={"flex"}
        justifyContent="flex-start"
        flexWrap={"wrap"}
      >
        {
          movies.map((item, index) => (
            <MoviesItem
              id={item._id}
              title={item.title}
              posterUrl={item.posterUrl}
              releaseDate={item.releaseDate}
              key={index}
            />
          ))}
      </Box>
    </Box>
  );
};
export default Movies;

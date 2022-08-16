import { Box, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import axios from "../axios";

type Person = {
  name: string;
  imgUrl: string;
};

const Cards = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("/cards");
      setPeople(req.data);
    };

    fetchData();
  }, []);

  const onCardLeftScreen = (id: string) => () => {
    console.log(id);
  };

  const onSwipe = (direction: "left" | "right" | "up" | "down") => {
    console.log(direction);
  };

  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="center"
      sx={{
        height: "80vh",
        overflowX: "hidden",
        position: "relative",
        ".tinder-card": {
          position: "absolute",
        },
      }}
    >
      {people.map(({ name, imgUrl }) => (
        <TinderCard
          className="tinder-card"
          key={name}
          onCardLeftScreen={onCardLeftScreen(name)}
          onSwipe={onSwipe}
          preventSwipe={["up", "down"]}
        >
          <Paper
            sx={{
              backgroundImage: `url(${imgUrl})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "20px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              height: "50vh",
              maxWidth: "85vw",
              position: "relative",
              width: 600,
            }}
          >
            <Box sx={{ height: "100%", width: "100%" }}>
              <Typography
                sx={{
                  bottom: 16,
                  color: "common.white",
                  fontWeight: "bold",
                  left: 16,
                  position: "absolute",
                }}
              >
                {name}
              </Typography>
            </Box>
          </Paper>
        </TinderCard>
      ))}
    </Stack>
  );
};

export default Cards;

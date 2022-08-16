import * as React from "react";
import { IconButton, Stack } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";

interface SwipeButtonProps {
  icon: React.ReactNode;
}

const SwipeButton = ({ icon }: SwipeButtonProps) => (
  <IconButton
    sx={{
      bgColor: "background.paper",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      p: 2,
    }}
  >
    {icon}
  </IconButton>
);

const SwipeButtons = () => (
  <Stack
    alignItems="center"
    direction="row"
    justifyContent="space-evenly"
    spacing={5}
    sx={{
      svg: {
        height: "1.2em",
        width: "1.2em",
      },
    }}
  >
    <SwipeButton icon={<ReplayIcon color="warning" />} />

    <SwipeButton icon={<CloseIcon color="error" />} />

    <SwipeButton icon={<StarRateIcon color="primary" />} />

    <SwipeButton icon={<FavoriteIcon color="success" />} />

    <SwipeButton icon={<FlashOnIcon color="info" />} />
  </Stack>
);

export default SwipeButtons;

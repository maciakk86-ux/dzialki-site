import { Box, IconButton, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import CollectionsIcon from "@mui/icons-material/Collections";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { useState } from "react";

type VerticalMenuProps = {
  onPosition1Click: () => void;
  onPosition2Click: () => void;
  onPosition3Click: () => void;
  onPosition4Click: () => void;
  onPosition5Click: () => void;

};

const VerticalMenu: React.FC<VerticalMenuProps> = ({
  onPosition1Click,
  onPosition2Click,
  onPosition3Click,
  onPosition4Click,
  onPosition5Click,
}) => {
  const [openContact, setOpenContact] = useState(false);
  const handlePhoneClick = () => {
    setOpenContact((prev) => !prev);
  };
  return (
    <Box
      sx={{
        position: "fixed",       // menu przyklejone do lewej strony
        top: "50%",              // wyśrodkowane pionowo
        left: 10,                // odstęp od lewej krawędzi
        transform: "translateY(-50%)", // dokładne wyśrodkowanie
        display: "flex",
        flexDirection: "column", // pionowy układ
        backgroundColor: "rgba(0,0,0,0.5)", // półprzezroczyste tło
        borderRadius: "16px",    // zaokrąglone rogi
        padding: "10px",
        gap: 2,                  // odstęp między ikonami
        zIndex: 1000,
      }}
    >
      <IconButton onClick={onPosition1Click}
        sx={{
          color: "white",
          bgcolor: "rgba(255,255,255,0.1)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          "&:focus": { outline: "none" },
        }}
      >
        <LooksOneIcon />
      </IconButton>

      <IconButton onClick={onPosition2Click}
        sx={{
          color: "white",
          bgcolor: "rgba(255,255,255,0.1)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          "&:focus": { outline: "none" },
        }}
      >
        <LooksTwoIcon />
      </IconButton>

      <IconButton onClick={onPosition3Click}
        sx={{
          color: "white",
          bgcolor: "rgba(255,255,255,0.1)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          "&:focus": { outline: "none" },
        }}
      >
        <CollectionsIcon />
      </IconButton>

      <IconButton onClick={onPosition4Click}
        sx={{
          color: "white",
          bgcolor: "rgba(255,255,255,0.1)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          "&:focus": { outline: "none" },
        }}
      >
        <MapIcon />
      </IconButton>
    </Box>
    
  );
};

export default VerticalMenu;

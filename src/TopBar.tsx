import React from "react";
import logo from "./assets/logo.png";
import { Box, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';

type TopBarProps = {
  title?: string;
  staticWidth?: boolean;
  onLoginClick?: () => void;

};

const TopBar: React.FC<TopBarProps> = ({ title = "Moja Strona", onLoginClick, staticWidth=false }) => {
  return (
    <header style={{...styles.header, ...(staticWidth ? styles.widthStatic : {})}}>
      <div style={styles.left}>
        <img
          src={logo}
          alt="Overlay"
          style={{
            height: "clamp(32px, 7vh, 56px)",
            width: "auto",
          }}
        />  
      </div>
      <Box sx={{display:"flex", gap:2, alignItems:"center", backgroundColor:"rgba(84, 204, 84, 0.3)", p:"10px", borderRadius:"20px"}}>
        <CallIcon  /><Typography sx={{fontSize:"20px"}}>660-464-349</Typography>
      </Box>
      <Box sx={{display:"flex", gap:2, alignItems:"center", backgroundColor: "rgba(84, 204, 84, 0.3)", p:"10px", borderRadius:"20px"}}>
        <AlternateEmailSharpIcon />
        <Typography sx={{fontSize:"20px"}}>maciakk86@gmail.com</Typography>
      </Box>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    height: "90px",
    background: "rgba(0,0,0,0.5)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    boxSizing: "border-box",
    position:"relative",
    width:"100%",
    gap:"8px"
  },
  
  left: {
    fontSize: "18px",
    fontWeight: 600,
  },
  logo: {
    cursor: "pointer",
  },
  nav: {
    display: "flex",
    gap: "16px",
  },
  link: {
    color: "#e5e7eb",
    textDecoration: "none",
    fontSize: "14px",
  },
  right: {},
  button: {
    backgroundColor: "#38bdf8",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 500,
  },
  widthStatic: {width:"1281px"}
};

export default TopBar;

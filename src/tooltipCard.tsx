import {type FC, type ReactNode } from "react";
import { Box, Divider, Typography } from "@mui/material";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Person4Icon from '@mui/icons-material/Person4';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PaidIcon from '@mui/icons-material/Paid';
import type {Dzialka} from "./dzialk.model.ts"
export interface ParamRowProps {
    label: string,
    value: string | null | undefined,
    icon: ReactNode,
    mode?: string;
    textColor?: string;
    fontSize?: number;
}
const ParamRow: FC<ParamRowProps> = ({ label, value, icon, mode, textColor = "#696868ff", fontSize = 16 }) => {
    return (
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        p: 1,
                        justifyContent: "flex-start",
                        alignItems: "flex-end",
                        minHeight: "30px",
                        color: textColor,
                        fontSize: fontSize
                    }}
                >
                    <span style={{display:"flex",minWidth:"40px", alignItems:"flex-end"}}>
                        {icon}
                    </span>  
                <Typography sx={{  minWidth: 160 }}>{label}</Typography>
                <Typography sx={{ minWidth: 100, fontWeight:"bold" }}>
                        {value} {mode === "m" ? (<>m<sup>2</sup></>) : null}
                </Typography>
                </Box>
            );
}

interface TooltipCardProps {
    data: Dzialka;
}

const TooltipCard: FC<TooltipCardProps> = ({data}) => {
    return (
        <Box>
            <ParamRow label="Nr działki" value={data.numer} icon={<ContentPasteIcon />} />
            <Divider/>
            <ParamRow label="Powieżchnia" value={data.powiezchnia.toString()} icon={<DesignServicesIcon />} mode="m" />
            <ParamRow label="Wymiary działki" value={data.wymiary} icon={<OpenWithIcon />} />
            <ParamRow label="Zabudowa" value={data.zabudowa} icon={<HolidayVillageIcon />} /> 
            <ParamRow label="Warunki Zabudowy" value={data.wz} icon={<AssignmentTurnedInIcon />} />
            <ParamRow label="Liczba właścicieli" value={data.wlasciciele.toString()} icon={<Person4Icon />} />
            <ParamRow label="Nr Księgi Wieczystej" value={data.nrKw} icon={<MenuBookIcon />} />
            <Divider/>
            <ParamRow fontSize={20} label="Cena" value={data.cena} textColor="#04670d" icon={<PaidIcon style={{color:"#04670d"}} />} />
        </Box>
    )
}

export default TooltipCard;

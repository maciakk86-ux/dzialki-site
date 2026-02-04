import overlayImg1 from "./assets/areaDzialka1.png";
import overlayImg2 from "./assets/areaDzialka2.png";
import overlayImg3 from "./assets/areaDzialka3.png";
import overlayImg4 from "./assets/areaDzialka4.png";
import overlayImg1H from "./assets/areaDzialka1H.png";
import overlayImg2H from "./assets/areaDzialka2H.png";
import overlayImg3H from "./assets/areaDzialka3H.png";
import overlayImg4H from "./assets/areaDzialka4H.png";

import overlayImg1D from "./assets/areaDzialka1D.png";
import overlayImg2D from "./assets/areaDzialka2D.png";
import overlayImg3D from "./assets/areaDzialka3D.png";
import overlayImg4D from "./assets/areaDzialka4D.png";

import overlayImg2_1 from "./assets/dzialka2_1.png";
import overlayImg2_2 from "./assets/dzialka2_2.png";
import overlayImg2_3 from "./assets/dzialka2_3.png";
import overlayImg2_4 from "./assets/dzialka2_4.png";
import overlayImg2_5 from "./assets/dzialka2_5.png";
import overlayImg2_6 from "./assets/dzialka2_6.png";
import overlayImg2_7 from "./assets/dzialka2_7.png";
import overlayImg2_8 from "./assets/dzialka2_8.png";

import overlayImg2_1H from "./assets/dzialka2_1H.png";
import overlayImg2_2H from "./assets/dzialka2_2H.png";
import overlayImg2_3H from "./assets/dzialka2_3H.png";
import overlayImg2_4H from "./assets/dzialka2_4H.png";
import overlayImg2_5H from "./assets/dzialka2_5H.png";
import overlayImg2_6H from "./assets/dzialka2_6H.png";
import overlayImg2_7H from "./assets/dzialka2_7H.png";
import overlayImg2_8H from "./assets/dzialka2_8H.png";


export interface Dzialka {
    numer:string;
    powiezchnia: number,
    wymiary: string,
    zabudowa: string,
    wz:string,
    wlasciciele: number,
    nrKw?: string | undefined | null,
    cena?: string | undefined | null,
    sprzedana: boolean;
}

export interface imageWithPosition {
  imgUrl: string,
  imgUrlHover: string,
  imgUrlDisable: string,
  pTop: string,
  pLeft: string,
  pWidth: string,
  dzialkaParams: Dzialka,
}
export interface ImageWithOverlayProps {
  backgroundSrc: string;
  imgList?: imageWithPosition[];
  onLoad?: () => void;
}
  export const OverlayList: imageWithPosition[]=[
  {
    imgUrl: overlayImg1,
    imgUrlHover: overlayImg1H,
    imgUrlDisable: overlayImg1D,
    pTop: "58%",
    pLeft: "28%",
    pWidth: "21%",
    dzialkaParams:{
        numer: "1314/5", 
        powiezchnia: 965, 
        wymiary: "21 x 43", 
        zabudowa: "brak",
        wz: "tak",
        wlasciciele: 1,
        nrKw: "1231231310",
        cena: null,
        sprzedana: true,
    }, 
  },
  {
    imgUrl: overlayImg2,
    imgUrlHover: overlayImg2H,
    imgUrlDisable: overlayImg2D,
    pTop: "61.5%",
    pLeft: "39.5%",
    pWidth: "21%",
    dzialkaParams: {
        numer: "1314/6", 
        powiezchnia: 1024, 
        wymiary:"21 x 43", 
        zabudowa:"brak",
        wz: "tak",
        wlasciciele:1,
        nrKw: "1231231310",
        cena: null,
        sprzedana: true,
    },
  },
  {
    imgUrl: overlayImg3,
    imgUrlHover: overlayImg3H,
    imgUrlDisable: overlayImg3D,
    pTop: "65.3%",
    pLeft: "51.8%",
    pWidth: "20.5%",
    dzialkaParams: {
        numer: "1314/7", 
        powiezchnia: 992, 
        wymiary: "21 x 43", 
        zabudowa: "brak",
        wz: "tak",
        wlasciciele: 1,
        nrKw: "-",
        cena: "do uzgodnienia",
        sprzedana:false
    },
  },
  {
    imgUrl: overlayImg4,
    imgUrlHover: overlayImg4H,
    imgUrlDisable: overlayImg4D,
    pTop: "69%",
    pLeft: "64.5%",
    pWidth: "20%",
    dzialkaParams: {
        numer: "1314/8", 
        powiezchnia: 1000, 
        wymiary: "21 x 43", 
        zabudowa: "brak",
        wz: "tak",
        wlasciciele: 1,
        nrKw: "1231231310",
        sprzedana: true,
    }
  }     
];

export const OverlayList2: imageWithPosition[]=[
  {
    imgUrl: overlayImg2_1,
    imgUrlHover: overlayImg2_1H,
    imgUrlDisable: overlayImg1D,
    pTop: "69%",
    pLeft: "1%",
    pWidth: "41%",
    dzialkaParams: {
        numer: "1314/10", 
        powiezchnia: 1116, 
        wymiary: "35,5 x 30.7", 
        zabudowa: "brak",
        wz: "tak",
        wlasciciele: 1,
        nrKw: "-",
        sprzedana: false,
        cena: "do uzgodnienia",
    }
  },
  {
    imgUrl: overlayImg2_2,
    imgUrlHover: overlayImg2_2H,
    imgUrlDisable: overlayImg1D,
    pTop: "60%",
    pLeft: "13.5%",
    pWidth: "30.8%",
    dzialkaParams: {
        numer: "1314/11", 
        powiezchnia: 1126, 
        wymiary: "37 x 30.7", 
        zabudowa: "brak",
        wz: "tak",
        wlasciciele: 1,
        nrKw: "-",
        sprzedana: false,
        cena: "do uzgodnienia",
    }
  },
  {
    imgUrl: overlayImg2_3,
    imgUrlHover: overlayImg2_3H,
    imgUrlDisable: overlayImg1D,
    pTop: "52.8%",
    pLeft: "22%",
    pWidth: "24.1%",
    dzialkaParams: {
        numer: "1314/12", 
        powiezchnia: 1090, 
        wymiary: "36.5 x 29.5", 
        zabudowa: "brak",
        wz: "tak",
        wlasciciele: 1,
        nrKw: "-",
        sprzedana: false,
        cena: "do uzgodnienia",
    }
  },
  {
    imgUrl: overlayImg2_4,
    imgUrlHover: overlayImg2_4H,
    imgUrlDisable: overlayImg1D,
    pTop: "47.6%",
    pLeft: "29%",
    pWidth: "18%",
    dzialkaParams: {
        numer: "1314/13", 
        powiezchnia: 1109, 
        wymiary: "38.5 x 29.5", 
        zabudowa: "brak",
        wz: "tak",
        wlasciciele: 1,
        nrKw: "-",
        sprzedana: false,
        cena: "do uzgodnienia",
    }
  },
  {
    imgUrl: overlayImg2_5,
    imgUrlHover: overlayImg2_5H,
    imgUrlDisable: overlayImg1D,
    pTop: "73.3%",
    pLeft: "52.5%",
    pWidth: "35%",
    dzialkaParams: {
        numer: "1314/18", 
        powiezchnia: 1002, 
        wymiary: "42 x 29.5", 
        zabudowa: "brak",
        wz: "tak",
        wlasciciele: 1,
        nrKw: "-",
        sprzedana: false,
        cena: "do uzgodnienia",
    }
  },
  {
    imgUrl: overlayImg2_6,
    imgUrlHover: overlayImg2_6H,
    imgUrlDisable: overlayImg1D,
    pTop: "62.7%",
    pLeft: "52.5%",
    pWidth: "26%",
    dzialkaParams: {
        numer: "1314/17", 
        powiezchnia: 1002, 
        wymiary: "34.1 x 29.5", 
        zabudowa: "brak",
        wz: "tak",
        wlasciciele: 1,
        nrKw: "-",
        sprzedana: false,
        cena: "do uzgodnienia",
    }    
  }, 
  {
    imgUrl: overlayImg2_7,
    imgUrlHover: overlayImg2_7H,
    imgUrlDisable: overlayImg1D,
    pTop: "54.1%",
    pLeft: "52.5%",
    pWidth: "20%",
    dzialkaParams: {
        numer: "1314/16", 
        powiezchnia: 1003, 
        wymiary: "33.8 x 29", 
        zabudowa: "brak",
        wz: "tak",
        wlasciciele: 1,
        nrKw: "-",
        sprzedana: false,
        cena: "do uzgodnienia",
    }
  },
  {
    imgUrl: overlayImg2_8,
    imgUrlHover: overlayImg2_8H,
    imgUrlDisable: overlayImg1D,
    pTop: "47.9%",
    pLeft: "52.5%",
    pWidth: "15%",
    dzialkaParams: {
        numer: "1314/15", 
        powiezchnia: 1000, 
        wymiary: "28 x 29", 
        zabudowa: "brak",
        wz: "tak",
        wlasciciele: 1,
        nrKw: "-",
        sprzedana: false,
        cena: "do uzgodnienia",
    }
  },     
]
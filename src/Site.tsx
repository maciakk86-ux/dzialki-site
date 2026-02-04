import "./Site.css"
import dzialki from "./assets/dzialki_1.png";
import dzialki2 from "./assets/dzialki_2.png";
import zd1 from "./assets/zdjecie1.png";
import zd2 from "./assets/zdjecie2.png";
import zd3 from "./assets/zdjecie3.png";

import VerticalMenu from "./VerticalMenu";

import { OverlayList, OverlayList2 } from "./dzialk.model";

import ImageWithOverlay from "./ImageWithOverlay";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery";

const Site: React.FC = () => {
  const [view, setView] = useState<string>("pos1");
  const [, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [view]);
  
  return (
    <>
    
      <div className="main-container"> 
        <TopBar />   
        <VerticalMenu
          onPosition1Click={()=>setView("pos1")}
          onPosition2Click={()=>setView("pos2")}
          onPosition3Click={()=>setView("pos3")}
          onPosition4Click={()=>setView("pos4")}
        />
        
        {view === "pos1" && 
          <ImageWithOverlay
            key={dzialki}
            backgroundSrc={dzialki}
            imgList={OverlayList}
            onLoad={() => setLoading(false)}
          />
        }
        {view === "pos2" && 
          <ImageWithOverlay
            key={dzialki2}
            backgroundSrc={dzialki2}
            imgList={OverlayList2}
            onLoad={() => setLoading(false)}
          />
        } 
        {view === "pos3" && 
          <ImageGallery images={[
            zd1,
            zd2,
            zd3,
            dzialki,
            dzialki2
          ]} />
        }
      </div>
    </>
  );
};

export default Site;

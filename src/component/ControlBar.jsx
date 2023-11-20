import {useState} from "react";
import Controller from "../domain/Controller";
import Playlist from "../domain/Playlist";
import styles from "../styles/Footer.module.css";
import MusicPlayer from "react-h5-audio-player";
import './custom.css';

//Repeat button (Repeat Current)
import repCurrBase from "../assets/base/Repeat_Current.png"
import repCurrHover from "../assets/hover/Repeat_Current.png"
import repCurrClick from "../assets/onClick/Repeat_Current.png"
//Repeat button (Repeat On)
import repOnBase from "../assets/base/Repeat_On.png"
import repOnHover from "../assets/hover/Repeat_On.png"
import repOnClick from "../assets/onClick/Repeat_On.png"
//Repeat button (Repeat Off)
import repOffBase from "../assets/base/Repeat_Off.png"
import repOffHover from "../assets/hover/Repeat_Off.png"
import repOffClick from "../assets/onClick/Repeat_Off.png"


//Enum for repeat states
const repeatStates = Object.freeze({
    OFF: "off",
    CURRENT: "current",
    ON: "on"
})

const RepeatButton = () => {
  // State of Repeat button
  const [repeatState, setRepeatState] = useState(repeatStates.OFF);
  //Mouse movement state tracking
  const [imgRepeatClick, setImgRepeatClick] = useState(false);
  const [imgRepeatHover, setImgRepeatHover] = useState(false);
  //Image file to use; Off as default
  let repeatImage = repOffBase;
  //Determine image to use depending on Mouse state
  switch(repeatState){
    case repeatStates.OFF:
      repeatImage = imgRepeatClick ? repOffClick : imgRepeatHover ? repOffBase : repOffBase;
      break;
    case repeatStates.CURRENT:
      repeatImage = imgRepeatClick ? repCurrClick : imgRepeatHover ? repCurrBase : repCurrBase;
      break;
    case repeatStates.ON:
      repeatImage = imgRepeatClick ? repOnClick : imgRepeatHover ? repOnBase : repOnBase;
      break;
    default:
      console.log('Out of scope. (BUG)');
  };

  //Return as button
  return (
      <div className={styles["repeat-wrapper"]}>
        <div className={styles["button-area"]}>
          <div className={styles["repeat"]}>
            <img
                src={repeatImage}
                alt="repeat"
                onClick={() => {
                  setImgRepeatClick(true);
                  // Toggle repeatState on click
                  setRepeatState((prevState) => {
                    switch (prevState) {
                      case repeatStates.OFF:
                        return repeatStates.CURRENT;
                      case repeatStates.CURRENT:
                        return repeatStates.ON;
                      case repeatStates.ON:
                        return repeatStates.OFF;
                      default:
                        return prevState;
                    }
                  });
                  setTimeout(() => {
                    setImgRepeatClick(prev=>!prev);
                  }, 250);
                }}
                onMouseEnter={() => setImgRepeatHover(true)}
                onMouseLeave={() => setImgRepeatHover(false)}
            />
          </div>
        </div>
      </div>
  );
};

const ControlBar = () => {
  const [controller, setController] = useState(new Controller(new Playlist()));
  const [curr, setCurr] = useState("local://C:\\Users\\LEE\\Downloads\\Quick Share\\1.mp3");

  const next = () => setCurr(controller.next());
  const prev = () => setCurr(controller.prev());

  return (
    <div className={styles.footer}>
      <MusicPlayer autoPlay src={curr}
                   showJumpControls={true}
                   showSkipControls={true}
                   onClickPrevious={prev}
                   onClickNext={next}
                   onEnded={next}
                   showFiledVolumn={true}
      />
      <RepeatButton/>
    </div>
  );
};

export default ControlBar;
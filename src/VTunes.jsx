import styles from './VTunes.module.css';
import ControlBar from "./component/ControlBar";
import Container from './component/Container';
//나도 이게 맞는지 모르겠다
import TimerBox from "./TimerBox.jsx";

const VTunes = () => {
    //여기에 타이머 박스 등장 조건 boolean 추가
    //showTimerBox boolean은 TimerSetting.jsx 파일에 있다
  return (
    <div className={styles.vtunes}>
        {showTimerBox ? <TimerBox/> : null}
      <Container />
      <ControlBar />
    </div>
  );
};

export default VTunes;

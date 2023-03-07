import React from "react";
import { WindowContainer, WindowDiv, WindowDetails, WindowName, WindowCross, WindowText} from "./WindowStyles.js";

const Window = () => {
  return (
    <WindowContainer>
      <WindowDiv>
        <WindowDetails>
          <WindowName>System Message</WindowName>
          <WindowCross src="./assets/cross.svg" alt="cross"/>
        </WindowDetails>
        <WindowText>Take your damn creatine! When you have done so, click okay so you will never forget again.</WindowText>
      </WindowDiv>
    </WindowContainer>
  )
}

export default Window;
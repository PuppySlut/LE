import { useState } from "react";
import AbbyCards from "./AbbyCards";
import AbbyCardsFinish from "./AbbyCardsFinish";
import AbbyCardsFollowup from "./AbbyCardsFollowup";

const AbbyMain = (props) => {
  const { variables } = props;
  const { abby } = variables;
  const [time, setTime] = useState(1);
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);
  console.log(time);
  if (abby === 0) {
    if (time === 1) {
      return (
        <AbbyCards
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 2) {
      return (
        <AbbyCardsFollowup
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 3) {
      console.log("abby3");
      return (
        <AbbyCardsFinish
          {...props}
          next={() => {
            props.setAbby(abby + 1);
            props.setArea("evening");
            props.setNN("Card cunt");
          }}
        />
      );
    }
  } else if (abby === 2) {
    return <div></div>;
  }
};

export default AbbyMain;

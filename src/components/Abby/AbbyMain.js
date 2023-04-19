import { useState } from "react";
import AbbyCards from "./AbbyCards";
import AbbyCardsFinish from "./AbbyCardsFinish";
import AbbyCardsFollowup from "./AbbyCardsFollowup";
import AbbyChill from "./AbbyChill";
import AbbyChillYes from "./AbbyChillYes";
import AbbyChillNo from "./AbbyChillNo";
import AbbyFun from "./AbbyFun";
import AbbyFun2 from "./AbbyFun2";

const AbbyMain = (props) => {
  const { variables } = props;
  const { abby } = variables;
  const [time, setTime] = useState(1);

  const yes = () => {
    props.setRomanceAbby(true);
  };
  const no = () => {
    props.setRomanceAbby(false);
  };
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
  } else if (abby === 1) {
    if (time === 1) {
      return (
        <AbbyChill
          {...props}
          no={() => {
            no();
            setTime(time + 1);
          }}
          yes={() => {
            yes();
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 2) {
      if (variables.romanceAbby) {
        return (
          <AbbyChillYes
            {...props}
            next={() => {
              props.setAbby(abby + 1);
              props.setArea("evening");
              props.setNN("Snuggle slut");
            }}
          />
        );
      } else {
        return (
          <AbbyChillNo
            {...props}
            next={() => {
              props.setAbby(abby + 1);
              props.setArea("evening");
              props.setNN("Snuggle slut");
            }}
          />
        );
      }
    }
  } else if (abby === 2) {
    if (time === 1) {
      return (
        <AbbyFun
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 2) {
      return (
        <AbbyFun2
          {...props}
          next={() => {
            props.setAbby(abby + 1);
            props.setArea("evening");
            props.setNN("Playtoy for Abby");
          }}
        />
      );
    }
  }
};

export default AbbyMain;

import { useState } from "react";
import TherapistIntro from "../Introduction/Therapist";
import TherapistIntroFinish from "../Introduction/TherapistFinish";
import TherapistIntroNext from "../Introduction/TherapistNext";
import HypnoBear from "./HypnoBear";
import Cheerleader from "./Cheerleader1";
import Cheerleader2 from "./Cheerleader2";
import Cheerleader3 from "./Cheerleader3";
import Football from "./Football";
import Football2 from "./Football2";
import Football3 from "./Football3";
import Football4 from "./Football4";

const TherapistMain = (props) => {
  const { variables } = props;
  const { hypno } = variables;
  const [time, setTime] = useState(1);
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);
  console.log(props);
  if (hypno === 0) {
    if (time === 1) {
      return (
        <TherapistIntro
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 2) {
      return (
        <TherapistIntroNext
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 3) {
      return (
        <TherapistIntroFinish
          {...props}
          next={() => {
            props.setHypno(variables.hypno + 1);
            setTime(time + 1);
            props.setArea("evening");
            props.setNN("Hypnoslut");
          }}
        />
      );
    }
  } else if (hypno === 1) {
    return (
      <HypnoBear
        {...props}
        next={() => {
          props.setHypno(hypno + 1);
          props.setArea("evening");
          props.setNN("Teddy toy");
        }}
      />
    );
  } else if (hypno === 2) {
    if (time === 1) {
      return (
        <Cheerleader
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 2) {
      return (
        <Cheerleader2
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else {
      return (
        <Cheerleader3
          {...props}
          next={() => {
            props.setHypno(hypno + 1);
            props.setArea("evening");
            props.setNN("Cheer toy");
          }}
        />
      );
    }
  } else if (hypno === 3) {
    if (time === 1) {
      return (
        <Football
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 2) {
      return (
        <Football2
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 3) {
      return (
        <Football3
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else {
      return (
        <Football4
          {...props}
          next={() => {
            props.setHypno(hypno + 1);
            props.setArea("evening");
            props.setNN("Football slut");
          }}
        />
      );
    }
  }
};

export default TherapistMain;

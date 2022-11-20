import { useState } from "react";
import TherapistIntro from "../Introduction/Therapist";
import TherapistIntroFinish from "../Introduction/TherapistFinish";
import TherapistIntroNext from "../Introduction/TherapistNext";
import HypnoBear from "./HypnoBear";

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
  }
};

export default TherapistMain;

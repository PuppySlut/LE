import { useState } from "react";
import MomClassIntroFirst from "./MomClassIntroFirst";
import MomClassIntroSecond from "./MomClassIntroSecond";
import MomIntroFirst from "./MomIntroFirst";
import MomIntroSecond from "./MomIntroSecond";
import MomSecondClass from "./MomSecondClass";
import MomSecondClassFinish from "./MomSecondClassFinish";
import MomSecondClassFollowup from "./MomSecondClassFollowup";

const MomMain = (props) => {
  const { variables } = props;
  const { momProg } = variables;
  const [time, setTime] = useState(1);
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);
  console.log(props);

  if (momProg === 0) {
    if (time === 1) {
      return (
        <MomIntroFirst
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 2) {
      return (
        <MomIntroSecond
          {...props}
          next={() => {
            props.setMomProg(momProg + 1);
            props.setArea("morning");
            props.setNN("Mommy's girl");
            props.setMomteacher(true);
          }}
        />
      );
    }
  } else if (momProg === 1) {
    if (time === 1) {
      return (
        <MomClassIntroFirst
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 2) {
      return (
        <MomClassIntroSecond
          {...props}
          next={() => {
            props.setMomProg(momProg + 1);
            props.setArea("evening");
            props.setNN("Mommy's bimbo");
          }}
        />
      );
    }
  } else if (momProg === 2) {
    if (time === 1) {
      return (
        <MomSecondClass
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 2) {
      return (
        <MomSecondClassFollowup
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 3) {
      return (
        <MomSecondClassFinish
          {...props}
          next={() => {
            props.setMomProg(momProg + 1);
            props.setArea("evening");
            props.setNN("Mould model");
          }}
        />
      );
    }
  }
};

export default MomMain;

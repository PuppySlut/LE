import { useState } from "react";
import FirstCheckUpBegin from "./FirstCheckUpBegin";
import FirstCheckUpPunishment from "./FirstCheckUpPunishment";
import SecondCheckUpBegin from "./SecondCheckUpBegin";
import SecondCheckUpExamination from "./SecondCheckUpExamination";
import SecondCheckUpPunishment from "./SecondCheckUpPunishment";

const NurseMain = (props) => {
  const { variables } = props;
  const { nurse } = variables;
  const [time, setTime] = useState(1);
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);
  console.log(props);
  if (nurse === 0) {
    if (time === 1) {
      return (
        <FirstCheckUpBegin
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else {
      return (
        <FirstCheckUpPunishment
          {...props}
          next={() => {
            props.setNurse(nurse + 1);
            props.setArea("evening");
            props.setNN("Hucow");
          }}
        />
      );
    }
  } else if (nurse === 1) {
    if (time === 1) {
      return (
        <SecondCheckUpBegin
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 2) {
      return (
        <SecondCheckUpExamination
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 3) {
      return (
        <SecondCheckUpPunishment
          {...props}
          next={() => {
            props.setNurse(nurse + 1);
            props.setArea("evening");
            props.setNN("Milk dispenser");
          }}
        />
      );
    }
  }
};

export default NurseMain;

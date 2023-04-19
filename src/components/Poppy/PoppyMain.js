import { useState } from "react";
import ClassWithPoppy from "./ClassWithPoppy1";
import ClassWithPoppy2 from "./ClassWithPoppy2";
import ClassWithPoppyYes from "./ClassWithPoppyYes";
import ClassWithPoppyNo from "./ClassWithPoppyNo";

const PoppyMain = (props) => {
  const { variables } = props;
  const { poppy, romancePoppy } = variables;
  const [time, setTime] = useState(1);
  console.log(variables);

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  const yes = () => {
    props.setRomancePoppy(true);
  };
  const no = () => {
    props.setRomancePoppy(false);
  };

  if (poppy === 0) {
    if (time === 1) {
      return (
        <ClassWithPoppy
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 2) {
      return (
        <ClassWithPoppy2
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
    } else if (romancePoppy) {
      return (
        <ClassWithPoppyYes
          {...props}
          next={() => {
            props.setPoppy(poppy + 1);
            props.setArea("evening");
            props.setNN("Dick helper");
          }}
        />
      );
    } else {
      return (
        <ClassWithPoppyNo
          {...props}
          next={() => {
            props.setPoppy(poppy + 1);
            props.setArea("evening");
          }}
        />
      );
    }
  }
};

export default PoppyMain;

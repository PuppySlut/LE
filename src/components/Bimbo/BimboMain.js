import { useState } from "react";
import BimboIntro from "../Introduction/Bimbo";
import Bimbo101First from "./Bimbo101First";
import Bimbo101Fourth from "./Bimbo101Fourth";
import Bimbo101Second from "./Bimbo101Second";
import Bimbo101Third from "./Bimbo101Third";
import BimboChess from "./BimboChess";

const Intro = (props) => {
  const { variables } = props;
  const { bimbo } = variables;
  const [time, setTime] = useState(1);
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);
  console.log(props);
  if (bimbo === 0) {
    return (
      <BimboIntro
        next={() => {
          props.setBimbo(bimbo + 1);
          props.setArea("evening");
          props.setNN("Bimbo");
        }}
      />
    );
  } else if (bimbo === 1) {
    if (time === 1) {
      return (
        <Bimbo101First
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 2) {
      return (
        <Bimbo101Second
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 3) {
      return (
        <Bimbo101Third
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 4) {
      return (
        <Bimbo101Fourth
          {...props}
          next={() => {
            props.setBimbo(bimbo + 1);
            props.setArea("evening");
            props.setNN("Carpetmuncher");
          }}
        />
      );
    }
  } else if (bimbo === 2) {
    return (
      <BimboChess
        {...props}
        next={() => {
          props.setBimbo(bimbo + 1);
          props.setArea("evening");
          props.setNN("Dumb cunt");
        }}
      />
    );
  }
};

export default Intro;

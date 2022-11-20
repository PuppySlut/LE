import { useState } from "react";
import Meal from "../Introduction/Meal";
import PassIntro from "../Introduction/Pass";
import PunishIntroFirst from "../Introduction/PunishIntroFirst";
import PunishIntroSecond from "../Introduction/PunishIntroSecond";
import WetValleyIntro from "../Introduction/WetValleyIntro";
import HumpmanClassFirst from "./HumpanClassFirst";
import HumpmanClassSecond from "./HumpmanClassSecond";
import WetvalleyMeal from "./WetvalleyMeal";
import WetvalleyMealFinish from "./WetvalleyMealFinish";
import WetvalleyMealKitchen from "./WetvalleyMealKitchen";
import WetvalleyMealKitchenPrep from "./WetvalleyMealKitchenPrep";

const WetvalleyMain = (props) => {
  const { variables } = props;
  const { wetvalleyOp } = variables;
  const [localArea, setLocalArea] = useState("");
  const [time, setTime] = useState(1);
  console.log(localArea);
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);
  console.log(props);

  if (wetvalleyOp === 0) {
    if (localArea === "pass") {
      return (
        <PassIntro
          {...props}
          next={() => {
            props.setDryPanty(false);
            setLocalArea("meal");
          }}
        />
      );
    } else if (localArea === "meal") {
      console.log("reached");
      return (
        <Meal
          {...props}
          next={() => {
            props.setDryPanty(false);
            props.setWetvalleyOp(variables.wetvalleyOp + 1);
            props.setArea("evening");
            props.setNN("Teacher's pet");
          }}
        />
      );
    } else if (localArea === "punish") {
      return (
        <PunishIntroFirst
          variables={variables}
          {...props}
          next={() => {
            setLocalArea("punishNext");
            props.setNN("Class fucktoy");
          }}
        />
      );
    } else if (localArea === "punishNext") {
      return (
        <PunishIntroSecond
          variables={variables}
          {...props}
          next={() => {
            props.setWetvalleyOp(variables.wetvalleyOp + 1);
            props.setArea("evening");
            props.setNN("Teacher's pet");
          }}
        />
      );
    } else {
      return (
        <WetValleyIntro
          variables={variables}
          {...props}
          punish={() => {
            setLocalArea("punish");
          }}
          pass={() => {
            setLocalArea("pass");
          }}
        />
      );
    }
  } else if (wetvalleyOp === 1) {
    if (time === 1) {
      return (
        <WetvalleyMeal
          variables={variables}
          {...props}
          next={() => {
            setTime(time + 1);
          }}
          pass={() => {
            props.setArea("evening");
          }}
        />
      );
    } else if (time === 2) {
      return (
        <WetvalleyMealKitchen
          variables={variables}
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 3) {
      return (
        <WetvalleyMealKitchenPrep
          variables={variables}
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 4) {
      return (
        <WetvalleyMealFinish
          variables={variables}
          {...props}
          next={() => {
            props.setWetvalleyOp(variables.wetvalleyOp + 1);
            props.setArea("evening");
            props.setNN("Fucktoy dessert");
          }}
        />
      );
    }
  } else if (wetvalleyOp === 2) {
    if (time === 1) {
      return (
        <HumpmanClassFirst
          {...props}
          next={() => {
            setTime(time + 1);
          }}
        />
      );
    } else if (time === 2) {
      return (
        <HumpmanClassSecond
          {...props}
          next={() => {
            props.setWetvalleyOp(variables.wetvalleyOp + 1);
            props.setArea("evening");
          }}
        />
      );
    }
  }
};

export default WetvalleyMain;

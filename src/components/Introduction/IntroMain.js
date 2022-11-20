import { Typography } from "@mui/material";
import { useState } from "react";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import SecretaryIntro from "./Secretary";
import CounselorIntro from "./Counselor";
import SecretaryRevisit from "./SecretaryRevisit";
import TherapistIntro from "./Therapist";
import TherapistIntroNext from "./TherapistNext";
import TherapistIntroFinish from "./TherapistFinish";
import SchoolIntro from "./SchoolIntro";
import BimboIntro from "./Bimbo";
import Lifeguard from "./Lifeguard";
import WetValleyIntro from "./WetValleyIntro";
import PassIntro from "./Pass";
import PunishIntroFirst from "./PunishIntroFirst";
import PunishIntroSecond from "./PunishIntroSecond";
import DormFirst from "./DormFirst";
import DormSecond from "./DormSecond";
import DormThird from "./DormThird";
import Meal from "./Meal";
import FirstNight from "./FirstNight";
import Button from "../../elements/Button";

const Intro = (props) => {
  const { variables } = props;
  const [time, setTime] = useState(1);
  const [area, setArea] = useState(variables.area);

  if (area === "therapist") {
    return (
      <TherapistIntro
        variables={variables}
        {...props}
        setLocalArea={(a) => {
          setArea(a);
        }}
        next={() => {
          setArea("therapistNext");
        }}
      />
    );
  } else if (area === "therapistNext") {
    return (
      <TherapistIntroNext
        variables={variables}
        {...props}
        setLocalArea={(a) => {
          setArea(a);
        }}
        next={() => {
          props.setHypno(variables.hypno + 1);
          setArea("therapistFinish");
        }}
      />
    );
  } else if (area === "therapistFinish") {
    return (
      <TherapistIntroFinish
        variables={variables}
        {...props}
        setLocalArea={(a) => {
          setArea(a);
        }}
        next={() => {
          setTime(time + 1);
          setArea("intro");
          props.setNN("Hypnoslut");
        }}
      />
    );
  } else if (area === "school") {
    return (
      <SchoolIntro
        variables={variables}
        {...props}
        setLocalArea={(a) => {
          setArea(a);
        }}
        blonde={() => {
          setArea("bimbo");
          props.setNN("Bimbo");
        }}
        lifeguard={() => {
          setArea("lifeguard");
          props.setNN("Cosplay cunt");
        }}
      />
    );
  } else if (area === "bimbo") {
    return (
      <BimboIntro
        variables={variables}
        {...props}
        setLocalArea={(a) => {
          setArea(a);
        }}
        next={() => {
          props.setBimbo(variables.bimbo + 1);
          setTime(time + 1);
          setArea("intro");
        }}
      />
    );
  } else if (area === "lifeguard") {
    return (
      <Lifeguard
        variables={variables}
        {...props}
        next={() => {
          props.setCosplay(variables.cosplay + 1);
          setTime(time + 1);
          setArea("intro");
        }}
      />
    );
  } else if (area === "wetvalley") {
    return (
      <WetValleyIntro
        variables={variables}
        {...props}
        setLocalArea={(a) => {
          setArea(a);
        }}
        punish={() => {
          console.log("Punish");
          setArea("punish");
        }}
        pass={() => {
          console.log("pass");
          setArea("pass");
        }}
      />
    );
  } else if (area === "pass") {
    return (
      <PassIntro
        variables={variables}
        {...props}
        next={() => {
          props.setWetvalleyOp(variables.wetvalleyOp + 1);
          props.setDryPanty(false);
          setTime(time + 1);
          setArea("intro");
          props.setNN("Teacher's pet");
        }}
      />
    );
  } else if (area === "punish") {
    return (
      <PunishIntroFirst
        variables={variables}
        {...props}
        setLocalArea={(a) => {
          setArea(a);
        }}
        next={() => {
          setArea("punishNext");
          props.setNN("Class fucktoy");
        }}
      />
    );
  } else if (area === "punishNext") {
    return (
      <PunishIntroSecond
        variables={variables}
        {...props}
        next={() => {
          props.setWetvalleyOp(variables.wetvalleyOp + 1);
          setTime(time + 1);
          setArea("intro");
          props.setNN("Teacher's pet");
        }}
      />
    );
  }

  if (time === 1) {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 2);
    return (
      <div>
        <Typography>
          You are in the middle of filling out the application for your new
          school. Seeing as it is an all female school with you being quite a
          cutie yourself, this shouldn't be a problem.
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">First name</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            placeholder={variables.firstName}
            onChange={(e) => {
              props.setFN(e.target.value);
            }}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Family name</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            placeholder={variables.lastName}
            onChange={(e) => {
              props.setLN(e.target.value);
            }}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">
            Mother's name
          </InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            placeholder={variables.mom}
            onChange={(e) => {
              props.setMN(e.target.value);
            }}
          />
        </FormControl>
        <br />
        <Button
          text="Submit Info"
          fun={() => {
            setTime(time + 1);
          }}
        />
      </div>
    );
  } else if (time === 2) {
    return (
      <SecretaryIntro
        variables={props.variables}
        next={() => {
          setTime(time + 1);
        }}
      />
    );
  } else if (time === 3) {
    console.log("couns");
    return (
      <CounselorIntro
        variables={props.variables}
        next={() => {
          setTime(time + 1);
        }}
      />
    );
  } else if (time === 4) {
    return (
      <SecretaryRevisit
        variables={props.variables}
        therapist={() => {
          setArea("therapist");
        }}
        wetvalley={() => {
          setArea("wetvalley");
        }}
        school={() => {
          setArea("school");
        }}
      />
    );
  } else if (time === 5) {
    return (
      <DormFirst
        variables={props.variables}
        next={() => {
          setTime(time + 1);
        }}
      />
    );
  } else if (time === 6) {
    return (
      <DormSecond
        variables={props.variables}
        next={() => {
          setTime(time + 1);
        }}
      />
    );
  } else if (time === 7) {
    return (
      <DormThird
        variables={props.variables}
        next={() => {
          setTime(time + 1);
        }}
      />
    );
  } else if (time === 8) {
    return (
      <Meal
        variables={props.variables}
        next={() => {
          setTime(time + 1);
        }}
      />
    );
  } else {
    return (
      <FirstNight
        variables={props.variables}
        next={() => {
          props.setArea("morning");
        }}
      />
    );
  }
};

export default Intro;

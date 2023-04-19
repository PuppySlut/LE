import React, { useState } from "react";
import "./resources/css/App.css";
import Landing from "./components/Landing";
import IntroMain from "./components/Introduction/IntroMain";
import Morning from "./components/Morning";
import Evening from "./components/Evening";
import BimboMain from "./components/Bimbo/BimboMain";
import MomMain from "./components/Mom/MomMain";
import CosplayMain from "./components/Cosplay/CosplayMain";
import WetvalleyMain from "./components/Wetvalley/WetvalleyMain";
import HeadMain from "./components/Headmistress/HeadMain";
import NurseMain from "./components/Nurse/NurseMain";
import TherapistMain from "./components/Therapist/TherapistMain";
import Layout from "./components/Layout";
import AbbyMain from "./components/Abby/AbbyMain";
import PoppyMain from "./components/Poppy/PoppyMain";

function App() {
  const [area, setArea] = useState("landing"); //"landing"
  const [firstName, setFN] = useState("Candy");
  const [lastName, setLN] = useState("Cane");
  const [mom, setMN] = useState("Sugar");
  const [hypno, setHypno] = useState(0);
  const [nickNames, setNickNames] = useState(["Slut", "Whore", "Pet"]);
  const [bimbo, setBimbo] = useState(0);
  const [cosplay, setCosplay] = useState(0);
  const [wetvalleyOp, setWetvalleyOp] = useState(0);
  const [claimed, setClaimed] = useState(0);
  const [drypanty, setDryPanty] = useState(true);
  const [day, setDay] = useState(0);
  const [momteacher, setMomteacher] = useState(false);
  const [momProg, setMomProg] = useState(0);
  const [headOp, setHeadOp] = useState(0);
  const [nurse, setNurse] = useState(0);
  const [abby, setAbby] = useState(0);
  const [romanceAbby, setRomanceAbby] = useState(false);
  const [poppy, setPoppy] = useState(0);
  const [romancePoppy, setRomancePoppy] = useState(false);

  useState(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const setNN = (item) => {
    setNickNames([...nickNames, item]);
  };

  let output = null;
  const variables = {
    abby: abby,
    nurse: nurse,
    headOp: headOp,
    momProg: momProg,
    momteacher: momteacher,
    day: day,
    drypanty: drypanty,
    wetvalleyOp: wetvalleyOp,
    bimbo: bimbo,
    cosplay: cosplay,
    area: area,
    firstName: firstName,
    lastName: lastName,
    mom: mom,
    nickNames: nickNames,
    hypno: hypno,
    claimed: claimed,
    romanceAbby: romanceAbby,
    romancePoppy: romancePoppy,
    poppy: poppy,
  };

  switch (area) {
    case "morning":
      output = (
        <Morning
          variables={variables}
          school={() => {
            setArea("school");
          }}
          cosplay={() => {
            setArea("cosplay");
          }}
          sick={() => {
            setArea("sick");
          }}
          therapist={() => {
            setArea("therapist");
          }}
          bimbo={() => {
            setArea("bimbo");
          }}
          wetvalley={() => {
            setArea("wetvalley");
          }}
          mary={() => {
            setArea("mary");
          }}
          poppy={() => {
            setArea("poppy");
          }}
          abby={() => {
            setArea("abby");
          }}
          guard={() => {
            setArea("guard");
          }}
          headmistress={() => {
            setArea("headmistress");
          }}
          mom={() => {
            setArea("mom");
          }}
        />
      );
      break;
    case "evening":
      output = (
        <Evening
          variables={variables}
          setArea={(item) => {
            setArea(item);
          }}
          setClaimed={(c) => {
            setClaimed(c);
          }}
          nextDay={() => {
            setDay(day + 1);
          }}
          setNN={(n) => {
            setNN(n);
          }}
        />
      );
      break;
    case "poppy":
      output = (
        <PoppyMain
          variables={variables}
          setPoppy={(i) => {
            setPoppy(i);
          }}
          setArea={(a) => {
            setArea(a);
          }}
          setNN={(n) => {
            setNN(n);
          }}
          setRomancePoppy={(i) => {
            setRomancePoppy(i);
          }}
        />
      );
      break;
    case "abby":
      output = (
        <AbbyMain
          variables={variables}
          setAbby={(i) => {
            setAbby(i);
          }}
          setArea={(a) => {
            setArea(a);
          }}
          setNN={(n) => {
            setNN(n);
          }}
          setRomanceAbby={(i) => {
            setRomanceAbby(i);
          }}
        />
      );
      break;
    case "headmistress":
      output = (
        <HeadMain
          variables={variables}
          setHeadOp={(i) => {
            setHeadOp(i);
          }}
          setArea={(a) => {
            setArea(a);
          }}
          setNN={(n) => {
            setNN(n);
          }}
        />
      );
      break;
    case "sick":
      output = (
        <NurseMain
          variables={variables}
          setNurse={(i) => {
            setNurse(i);
          }}
          setDryPanty={(b) => {
            setDryPanty(b);
          }}
          setArea={(a) => {
            setArea(a);
          }}
          setNN={(n) => {
            setNN(n);
          }}
        />
      );
      break;
    case "wetvalley":
      output = (
        <WetvalleyMain
          variables={variables}
          setWetvalleyOp={(i) => {
            setWetvalleyOp(i);
          }}
          setDryPanty={(b) => {
            setDryPanty(b);
          }}
          setArea={(a) => {
            setArea(a);
          }}
          setNN={(n) => {
            setNN(n);
          }}
        />
      );
      break;
    case "mom":
      output = (
        <MomMain
          variables={variables}
          setMomProg={(i) => {
            setMomProg(i);
          }}
          setArea={(a) => {
            setArea(a);
          }}
          setNN={(n) => {
            setNN(n);
          }}
          setMomteacher={(tf) => {
            setMomteacher(tf);
          }}
        />
      );
      break;
    case "bimbo":
      output = (
        <BimboMain
          variables={variables}
          setBimbo={(i) => {
            setBimbo(i);
          }}
          setArea={(a) => {
            setArea(a);
          }}
          setNN={(n) => {
            setNN(n);
          }}
        />
      );
      break;
    case "cosplay":
      output = (
        <CosplayMain
          variables={variables}
          setCosplay={(i) => {
            setCosplay(i);
          }}
          setArea={(a) => {
            setArea(a);
          }}
          setNN={(n) => {
            setNN(n);
          }}
        />
      );
      break;
    case "therapist":
      output = (
        <TherapistMain
          variables={variables}
          setHypno={(i) => {
            setHypno(i);
          }}
          setArea={(a) => {
            setArea(a);
          }}
          setNN={(n) => {
            setNN(n);
          }}
        />
      );
      break;
    case "landing":
      output = (
        <Landing
          setArea={(item) => {
            setArea(item);
          }}
        />
      );
      break;
    case "intro":
      output = (
        <IntroMain
          variables={variables}
          setDay={(d) => {
            setDay(d);
          }}
          nextDay={() => {
            setDay(day + 1);
          }}
          setArea={(item) => {
            setArea(item);
          }}
          setBimbo={(b) => {
            setBimbo(b);
          }}
          setCosplay={(cos) => {
            setCosplay(cos);
          }}
          setFN={(fn) => {
            setFN(fn);
          }}
          setLN={(ln) => {
            setLN(ln);
          }}
          setMN={(mom) => {
            setMN(mom);
          }}
          setWetvalleyOp={(op) => {
            setWetvalleyOp(op);
          }}
          setHypno={(hypno) => {
            setHypno(hypno);
          }}
          setDryPanty={(dry) => {
            setDryPanty(dry);
          }}
          setNN={(nn) => {
            setNN(nn);
          }}
        />
      );
      break;
    default:
      output = (
        <Landing
          setArea={(item) => {
            setArea(item);
          }}
        />
      );
  }

  return <Layout variables={variables}>{output}</Layout>;
}

export default App;

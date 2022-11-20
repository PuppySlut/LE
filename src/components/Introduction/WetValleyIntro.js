import { Typography } from "@mui/material";
import wetvalley from "../../resources/img/wetvalley.webp";
import { Container } from "react-bootstrap";
import { getWetvalley } from "../../functions/getCharacter";
import * as React from "react";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

function WetValleyIntro(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Deciding that it would be a bad idea to miss out on classes this early,
        you head off to the room that Florina had directed you to.
      </Typography>

      <Typography className="my-3">
        It isn't a long walk and as you walk in you are greeted by a mature
        woman busy trying to lecture on something. She gives you an annoyed look
        before realizing that you must be the new student. Her annoyance quickly
        turns into a predatory smile.
      </Typography>

      {Img(wetvalley, "wetvalley")}

      {getWetvalley(
        "If it isn't our newest student. Class, please welcome " +
          variables.firstName +
          " " +
          variables.lastName +
          ". Miss " +
          variables.lastName +
          " here will be joining the rest of you moving forward, however, she is a bit late.",
        null
      )}

      <Typography className="my-3">
        The teacher turns to you and smiles.{" "}
      </Typography>

      {getWetvalley(
        "I am Miss Wetvalley. Normally a punishment is given to the girls that are late for class, however, since you are new I will give you a chance to just find a seat... or you can get the punishment like a good girl.",
        null
      )}

      <Typography className="my-3">She states.</Typography>

      <Typography className="my-3">
        It is clear that not taking the punishment might make you some enemies
        among the rest of your classmates, however, being punished sounds as if
        it would quite an intense experience.
      </Typography>

      <br />
      <Button
        text="Don't take the punishment"
        fun={() => {
          props.pass();
        }}
      />

      <br />
      <Button
        text="Take the punishment"
        fun={() => {
          props.punish();
        }}
      />
    </Container>
  );
}

export default WetValleyIntro;

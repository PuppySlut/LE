import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getAbby } from "../../functions/getCharacter";
import mass1 from "../../resources/img/chill/4.webp";
import mass2 from "../../resources/img/chill/3.webp";
import mass3 from "../../resources/img/chill/2.webp";
import mass4 from "../../resources/img/chill/1.webp";
import Button from "../../elements/Button";

function AbbyFun(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Slipping out of bed you leave behind a small pile of moaning bodies.
        Half of those people you don't even recognize, it seemed like your
        nightly escapades didn't stop just because you fell asleep.{" "}
      </Typography>

      <Typography className="my-3">
        Grabbing a quick bite to eat you made your way back to your room,
        finding Abby was the only one left. She gave you a bright smile and
        looked you over. Without a word, she waved and indicated for you to lie
        down on the mattress floor. You obeyed and tried to ensure that you
        didn't lie down in a wet patch, but that seems like an impossible task,
        so instead you simply lay down on your belly. Your breasts are being
        squished by the mattress. Abby gets on top of you and you can feel her
        pushing her own naked body against yours.
      </Typography>

      {Img(mass1, "Massage")}
      {getAbby(
        "Oh yes, your spiritual cores are completely blocked. We need to let those meridians breathe so that we can get some of this Venus flare energy into you.",
        "naked"
      )}

      <Typography className="my-3">
        Her voice is soft and seductive and you feel her body move down and her
        hands find your ass squeezing and playing with it. You are pretty sure
        that Venus does not flare with energy, but honestly, you have no idea,
        you aren't an astrologist, and who can really tell about things like
        this with the planets aligning and such?
      </Typography>

      {Img(mass2, "Massage")}
      {getAbby(
        "Have you thought about what I told you? That Artefact that I have! I can show it to you! But you gotta behave and be a good girl for me. Think you can do that?",
        "naked"
      )}

      <Typography className="my-3">
        It is intriguing, getting to see what Abby considers to be an actual
        artefact. You agree and she indicates that you should flip over. You
        follow her instructions and lay down on your back. She instantly starts
        to play with your tits.
      </Typography>

      {Img(mass3, "Massage")}

      {getAbby(
        "Great! Just let me loosen you up a little and we can get you all started. Though I don't really know how to demonstrate this thing to you... I am sure we can figure it out.",
        "naked"
      )}

      <Typography className="my-3">
        Her hands move down between your legs and she is playing with your clit
        as if it was the most natural thing to do. You groan and moan, soon
        climaxing hard, making your toes curl and your body tremble. You are
        breathing heavily, doing your best to try and keep up with the speed
        that she is going.
      </Typography>

      {Img(mass4, "Massage")}

      <Typography className="my-3">
        With your cores unblocked, she smiles and pulls out an ancient-looking
        box that is decorated with Chinese imagery. She slowly opens the lid and
        reveals the artefact inside.{" "}
      </Typography>

      <Button
        text="It is a pen"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default AbbyFun;

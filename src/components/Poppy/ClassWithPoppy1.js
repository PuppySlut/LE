import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import milk from "../../resources/img/tits/16.webp";
import deLipps from "../../resources/img/De Lipps.jpg";
import { getDeLipps } from "../../functions/getCharacter";
import Button from "../../elements/Button";

function ClassWithPoppy(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Waking up you can feel your entire body is overwhelmed by how heavy it
        feels. It is like you have had the best night's sleep of your life, and
        you can't help but think that it might be due to multiple orgasms.
      </Typography>
      <Typography className="my-3">
        You head out and grab something to eat. You are pretty sure that the
        milk on your off-brand cornflakes is from some unfortunate slut who has
        been milked behind the counter since it is much sweeter than you are
        used to. Even so, you are hungry and you eat up.
      </Typography>
      {Img(milk, "Student getting milked")}
      <Typography className="my-3"></Typography>
      You head to your first class of the day and find yourself in a massive
      auditorium. Looking around you spot someone you know. In one of the back
      rows Poppy is sitting and she gives you a small wave. You return the wave
      and head up to her. She has her notebook out but quickly closes it as you
      come closer. Before you can ask any questions the teacher walks into the
      classroom. She is an incredibly curvy woman, her hips swaying from side to
      side as she walked inside.
      {Img(deLipps, "Teacher")}
      <Typography className="my-3"></Typography>
      She didn't hesitate, instead pulling out a piece of chalk and starting to
      write on the blackboard.
      {getDeLipps(
        "My name is Professor De Lipps. Please don't refer to me by any other title. I am here to teach you some of the most important skills you will ever know: Public exposure and the laws to be aware of.",
        null
      )}
      <Typography className="my-3">
        With that, she clicks a button on a small remote, and for a second you
        freeze. Knowing this perverted school you can't help but tense a bit,
        expecting to feel a buzzing between your thighs or maybe to be exposed
        to some intense hypnotic patterns. Instead, a slideshow starts. It is
        explaining some dry legal paragraphs about public exposure.
      </Typography>
      <Button
        text="Look at what Poppy is doing"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default ClassWithPoppy;
//<<set $hypno to $hypno +1>>

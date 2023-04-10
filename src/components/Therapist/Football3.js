import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import cheer1 from "../../resources/img/cheer/5.jpg";
import cheer2 from "../../resources/img/cheer/6.jpg";
import cheer3 from "../../resources/img/cheer/7.jpg";
import { getRose } from "../../functions/getCharacter";
import { getNickName } from "../../functions/getNickName";
import Button from "../../elements/Button";

function Football(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        It doesn't take long before you find yourself back in the changing room
        with the other girls. The spirit is high, and you are being catcalled
        quite a bit as the team undresses.
      </Typography>
      {Img(cheer1, "Football team")}
      <Typography className="my-3">
        They seem to take you in as if they were a pack of hungry wolfs,
        however, Rose calms them down before they outright jump you.
      </Typography>

      {getRose(
        "Alright girls. This is " +
          props.variables.firstName +
          ", you know the " +
          getNickName(props.variables.nickNames) +
          " that has been walking around the place. She is Jill's second in command, and as such, she is free game. No need to hold back, you can use her as much as you want.",
        null
      )}

      <Typography className="my-3">
        The crowd cheers and a couple even gropes themselves just at thought of
        getting some alone time with you. They seem quite pumped up, and their
        muscular bodies are taught with anticipation. They are gleaming with
        sweat, almost ready to head for the showers.
      </Typography>
      {Img(cheer2, "Football team")}

      {getRose(
        "Settle down! We know what is going to happen if I just let you sluts have at her, you are going to absolutely ruin her until she can't remember her own name. So instead we are going to do a gentle introduction, meaning that she will be serving in the showers while the team gets cleaned up, isn't that right, " +
          getNickName(props.variables.nickNames) +
          "?",
        null
      )}

      <Typography className="my-3">
        You blink as the gals cheers, clearly drowning out whatever response you
        might have.
      </Typography>
      {Img(cheer3, "Football team")}
      <Button
        text="You are introduced to the football team."
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default Football;

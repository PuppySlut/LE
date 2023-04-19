import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import jill from "../../resources/img/Jill.jpg";
import cheer from "../../resources/img/cheer/1.webp";
import { getJill } from "../../functions/getCharacter";
import Button from "../../elements/Button";

function Cheerleader(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You find yourself not as sore as you would have expected. Your body
        feels warm and used, but not like it is falling apart.
      </Typography>
      <Typography className="my-3">
        In a good mood, you find yourself heading towards your next class. It
        seems like it is gym class, and you have a good idea of what to expect.
      </Typography>
      <Typography className="my-3">
        However, as you arrive at gym class you don't spot Miss Humpman, but
        rather an incredibly attractive blonde woman. She is barely clothed and
        is definitely a cheerleader if her outfit is any indication. Then again,
        there isn't really much of it.{" "}
      </Typography>
      {Img(jill, "Jill")}
      {getJill(
        "Hi, there everybody! My name is Jill! I am the captain of the cheerleaders. I am so happy that you wanna join us! You all look super hot and I can't wait to get to know you all better!",
        "normal"
      )}
      <Typography className="my-3">
        She does a little cheer and you can't help but notice that her breasts
        are super bouncy. Without even thinking about it you follow her every
        movement with your eyes. She keeps talking, you don't really hear it,
        you are just focusing on that wonderful body.
      </Typography>
      {Img(cheer, "Masturbation")}
      <Typography className="my-3">
        When you are able to refocus yourself you can't help but notice that
        there are only three other girls left, and for some reason you are
        naked. You can't really remember taking off your clothes, but here you
        are. You feel like you should speak up, but your mouth won't open no
        matter what you do.
      </Typography>
      <Button
        text="Looks like you got picked"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default Cheerleader;
//<<set $hypno to $hypno +1>>

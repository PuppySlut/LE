import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getAbby } from "../../functions/getCharacter";
import card1 from "../../resources/img/art/1.png";
import card2 from "../../resources/img/art/2.png";
import abby from "../../resources/img/abby2.webp";
import Button from "../../elements/Button";
import { Vid } from "../../elements/Video";

function AbbyCardsFollowup(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        {" "}
        You can't help but blink a little as you realise that you are playing
        with what are quite obviously lewd hearthstone cards. Abby gives you a
        sly smile as she preemptively slides out of her underwear and sits in
        front of you. You had honestly expected tarot cards or something along
        those lines, but this might be just as fun when it comes down to it.
      </Typography>

      {Img(abby, "Abby")}

      <Typography className="my-3">
        {" "}
        You draw a couple of cards and set the turn counter to one. It looks
        like you will be going second, and Abby is more than happy to start. She
        looks over the cards and without hesitating much she plays what appears
        to be a weapon.
      </Typography>

      {Img(card1, "Lewd Card")}

      <Typography className="my-3">
        {" "}
        The strong strapon lies on her side of the board and with a smile, she
        gets up and rummages around the room finding a toy that isn't quite as
        big, but definitely sizeable. She smirks and puts it on.{" "}
      </Typography>

      {getAbby(
        "There we go, just to make it a little more realistic.",
        "naked"
      )}

      <Typography className="my-3">
        {" "}
        She teases giving it a wave and swaying it back and forth. You look over
        your hand trying to determine what will be the best course of action,
        and you can either take a downturn or try to play for tempo. You decide
        to play for tempo, throwing down the coin and summoning a monster onto
        the field.
      </Typography>

      {Img(card2, "Lewd Card")}

      <Typography className="my-3">
        {" "}
        You smirk, instantly spreading your legs and starting to tease your cunt
        in front of Abby, building up to an intense orgasm in the hopes of
        getting to cum before she has finished her turn.
      </Typography>

      {Vid("./vids/26.mp4", "video/mp4")}
      <Button
        text="You lose"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default AbbyCardsFollowup;

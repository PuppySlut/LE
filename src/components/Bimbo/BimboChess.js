import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import chess from "../../resources/img/chess.jpg";
import hypno1 from "../../resources/img/hypno/14.webp";
import hypno2 from "../../resources/img/hypno/15.gif";
import hypno3 from "../../resources/img/hypno/16.gif";
import mast1 from "../../resources/img/masturbation/19.gif";
import mast2 from "../../resources/img/masturbation/20.gif";
import { Img } from "../../elements/Image";
import { Vid } from "../../elements/Video";
import { getAmber } from "../../functions/getCharacter";
import Button from "../../elements/Button";

function BimboChess(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);
  const { variables } = props;

  return (
    <Container>
      <Typography className="my-3">
        {" "}
        It doesn't take long before you find yourself walking around the halls
        trying to find something to do. A girl gives you a wave and asks you if
        you wanna play chess with her. She quite frankly looks like someone that
        would be much better at sucking cock than playing chess, but you decide
        that you might as well give her a try.
      </Typography>

      {Img(chess, "Chess")}

      <Typography className="my-3">
        It doesn't take long before the two of you have a game set up and she
        gives you a smile.{" "}
      </Typography>

      {getAmber(
        "I am Amber. It is a pleasure to meet you, " + variables.firstName + "."
      )}

      <Typography className="my-3">
        She says and pulls out a small clock.{" "}
      </Typography>

      {getAmber("You don't mind speed chess do you?")}

      <Typography className="my-3">
        She asks and you can't really see any reason to object. However, you
        can't help but notice the soft ticking of the clock continues no matter
        what, and it is nowhere near the speed that you would have expected.
        Looking at your opponent you can't stop yourself from looking into her
        eyes.
      </Typography>

      {Img(hypno1, "Hypno")}

      <Typography className="my-3">
        They are completely impossible to look away from and as you hear the
        ticking of the clock nothing but her voice seems to matter.
      </Typography>

      {getAmber(
        "Good girl. Such a good girl. You don't need to think. As we start to play each one of your pieces symbolizes a thought in your head. Every time I take one of your pieces... one of your thoughts, it will be so much harder to think. It will be so much harder to concentrate."
      )}

      {Img(hypno2, "Hypno")}

      <Typography className="my-3">
        You only hear her words and each word is true. You can't look away from
        her eyes and you can't stop listening to her voice underlined by the
        steady beat of the clock. Tick Tock Tick Tock Tick Tock.
      </Typography>

      {getAmber(
        "You know that I will be winning the game. Because chess is about being smart and your brain will lose all its thoughts. But losing is okay. You will be having fun. Having fun is pleasure. Losing is submission. Submission is pleasure."
      )}

      <Typography className="my-3">She explained softly.</Typography>

      {Img(hypno3, "Hypno")}

      {getAmber(
        "When I finally take your king, you will be submissive and needy."
      )}

      <Typography className="my-3">
        Amber explains before letting her fingers snap. You snap out of it,
        pretty sure that you must have zoned out. You apologize and the two of
        you start playing. It goes pretty well at first, but as you are about to
        take a rather important piece on the board, you can't bring yourself to
        do it, instead, you make a suboptimal move, and lose one of your pawns.
        As the piece is removed from the board it is like a fog descends on your
        brain, making it so hard to think. You can feel your slit is burning up
        and as you lose your next piece it becomes clear that you need to rub
        yourself at least a little.
      </Typography>

      {Img(mast1, "Masturbation")}

      <Typography className="my-3">
        You try to hide it, but it is so hard to concentrate on the game.
        Pleasure is filling you and you keep losing pieces. Each lost piece
        seems so much more intense than the last, pleasure making you moan out
        loud. By the time only your king is left you are quite literally humping
        the table in desperation.
      </Typography>

      {Img(mast2, "Masturbation")}

      <Typography className="my-3">
        Amber gives you a smile and she takes her time getting to the king.
        Slowly and methodically she moves over to it. You both know what is
        gonna happen when she takes it. You are gonna cum like a good submissive
        girl. You can't stop yourself. You need it. You are begging her to
        finish the game and as you promise her both the sun and the moon she
        smiles and finally takes your king.
      </Typography>

      <Typography className="my-3">
        You explode, pleasure rushing through your body. A gushing orgasm,
        unlike anything you have ever experienced. Nothing else matters at that
        moment but your quivering cunt is the centre of the universe as waves of
        pleasure roll through you and make you curl your toes.
      </Typography>

      {Vid("./vids/4.mp4", "video/mp4")}

      <Typography className="my-3">
        When you finally recover it is dark. You need to find a place to sleep.
        Amber is long gone, but you can't help but feel that thinking is a
        little harder.
      </Typography>

      <Button
        text="Head back to your dorm for the night"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default BimboChess;

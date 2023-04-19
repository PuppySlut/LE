import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import football from "../../resources/img/cheer/3.jpg";
import rose from "../../resources/img/rose.jpg";
import bending from "../../resources/img/cheer/4.jpg";
import { getJill, getRose } from "../../functions/getCharacter";
import { getNickName } from "../../functions/getNickName";
import Button from "../../elements/Button";

function Football(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Walking out of the building and towards the Football fields you can feel
        two hands on your ass. Both squeeze each of your cheeks as you are
        paraded through the school. Jena and Jill seem incredibly happy with
        themselves and as you reach the fields you spot the team. They are
        barely dressed with only minimal covering around their body.
      </Typography>
      {Img(football, "Football players")}
      <Typography className="my-3">
        You see one of them perform a hefty tackle, though instead of throwing
        her weight behind the attack, she plunges a pair of fingers into the wet
        snatch of her opponent and suckles on one of those massive tits, making
        the opponent moan and shift, in turn forcing her to drop the ball. The
        captain of the football team seems to be standing on the sideline
        calling out plays and she turns to you as you approach. She is
        incredibly curvy and her ebony skin is coated in a light cover of sweat.
      </Typography>

      {Img(rose, "Football Captain Rose")}

      {getRose(
        "Oh, and who is this? I think I would recognize any of the cheerleaders, especially such a " +
          getNickName(props.variables.nickNames) +
          ". I am Rose.",
        null
      )}
      <Typography className="my-3">
        She clearly takes you in and Jill seems to whisper something in your
        ear, which you don't catch. However, it definitely makes both Jena and
        Rose laugh. You honestly don't get the joke but you smile politely. Rose
        walks closer.
      </Typography>
      {getRose("How obedient! Is she one of the new draft gals?", null)}
      <Typography className="my-3">
        Jill nods as Rose reaches out and touches your ass. You realize too late
        that Jill must have used that trigger on you to make you bend over
        without you noticing and you are currently presenting your rear to a
        complete stranger.
      </Typography>

      {Img(bending, "You bending")}
      {getJill(
        "This is " +
          props.variables.firstName +
          " and she is going to be my second in command on the cheer squat, meaning that if you need to coordinate something you can always go through her. She is quite eager to please as you can see.",
        "student"
      )}

      <Typography className="my-3">
        Both of them laugh once more and Rose nods, clearly appreciating the
        view.
      </Typography>

      {getRose(
        "Now, the rest of the team should get to know her. Miss Jena, can I borrow her to take care of the shower duty?",
        null
      )}

      <Typography className="my-3">
        Jena simply smiles and nods, clearly happy to see you have found your
        right shelf.
      </Typography>

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

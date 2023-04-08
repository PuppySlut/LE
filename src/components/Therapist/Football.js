import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import group from "../../resources/img/group/20.webp";
import jill from "../../resources/img/jill3.jpg";
import grope from "../../resources/img/tits/15.webp";
import finger from "../../resources/img/masturbation/42.webp";
import { getJill, getTher } from "../../functions/getCharacter";
import { getNickName } from "../../functions/getNickName";
import Button from "../../elements/Button";

function Football(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        With the morning sun, you feel reluctant to get out of bed. For a
        moment, you wonder if it would be easier to just sleep in. However,
        thanks to the loud moans from your roomies, that doesn't appear to be an
        option, and you find yourself rolling out of bed... well as much a bed
        as the orgy in the middle of the room is.
      </Typography>
      {Img(group, "Morning routine")}
      <Typography className="my-3">
        It seems like it is time for your next Cheerleader lesson and before you
        know it you are dressed and heading towards the gym. It is long before
        you see Jill, though she is in a cute schoolgirl uniform. The thing is
        still incredibly revealing and you can't help but subtly take her in.
      </Typography>
      {Img(jill, "Jill")}

      <Typography className="my-3">
        Next to her, Miss Jena is standing, and they are definitely discussing
        something. The therapist is groping Jill pretty often but the
        cheerleader captain doesn't seem to mind, even making Jena laugh now and
        again.
      </Typography>

      {Img(grope, "goping")}

      <Typography className="my-3">
        As you walk up to them Jena smiles and reaches out to casually fill your
        pussy as if it was the most ordinary thing in the world. As if it was
        simply the way of giving you a hug, and your mind refuses to let you see
        it as anything else. You simply spread your legs ever so slightly and
        grind against the palm of her hand.
      </Typography>
      {Img(finger, "Fingering")}
      {getTher(
        "Oh! If it isn't the " +
          getNickName(props.variables.nickNames) +
          "! I am so happy to see you! And so glad that we could get that little misunderstanding of yours cleared up. Jill tells me that you are one of the gals on the team that has the most potential.",
        null
      )}
      <Typography className="my-3">
        You can't help but feel a bit proud about that fact and instinctively
        your cunt squeezes around the fingers inside of you, while still riding
        them.
      </Typography>
      {getJill(
        "Yup, this " +
          getNickName(props.variables.nickNames) +
          "really is something else. I am looking forward to getting to know her a bit better. And we should probably introduce her to at least one of the sports teams.",
        "student"
      )}

      <Typography className="my-3">
        They seem to talk about you as if you aren't really there or as if you
        don't have a choice, but thanks to Jena, that is probably true. As they
        both agree it seems like they decide to cancel today's training and
        instead focus on helping you out.
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
//<<set $hypno to $hypno +1>>

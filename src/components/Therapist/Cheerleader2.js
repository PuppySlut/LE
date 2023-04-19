import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import cheer from "../../resources/img/cheer/2.jpg";
import hypno from "../../resources/img/hypno/20.gif";
import jill from "../../resources/img/jill2.jpg";
import { getNickName } from "../../functions/getNickName";
import { getJill } from "../../functions/getCharacter";
import Button from "../../elements/Button";

function Cheerleader(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">Jill gives you all a smile.</Typography>

      {getJill(
        "I see that you have all visited Lena, and got a bit more educated. I am glad to announce that you are all on the Cheerleading team.",
        "normal"
      )}
      <Typography className="my-3">
        You can't help but feel like there should be something more to becoming
        part of the cheerleader team, but on the other hand, you get the feeling
        that you don't have a say in the matter. One of the other girls,
        however, seems to protest, but as soon as she does Jill speaks.
      </Typography>
      {getJill(
        "<strong>Good girls obey, good girls enjoy, and the moon rises.</strong>",
        "normal"
      )}

      {Img(hypno, "Hypnosis")}

      <Typography className="my-3">
        It seems like a weird phrase to use but nothing seems to change for a
        second. Then you notice that the other girls are bent over, showing off
        their holes while still looking at Jill, heads between their legs. It is
        only when the other girls snicker that you discover that you are in the
        same position, unaware that you had even bent over or that your view is
        upside down.
      </Typography>

      {Img(cheer, "Bending over")}

      <Typography className="my-3">
        {" "}
        Jill smirks, clearly very pleased.
      </Typography>

      {getJill(
        "You don't have a choice in this. You can either pretend to join willingly and get lots of benefits, or you can join in without knowing and lose quite a bit of your time. Whatever the case our training will be pretty simple. Your body will learn to associate our chants with various poses, and you will be unable to stop yourself from doing said poses when you perform the chants. Hypno sluts make for the perfect Cheerleaders.",
        "normal"
      )}

      <Typography className="my-3">
        As you realize that there is no real way out of this Jill seems to
        pause, pulling up her shirt and revealing her naked breasts your brain
        seems to short-circuit and she instantly becomes a figure of authority.
        Your brain feels like it would have a harder time disrespecting a judge
        than it would have talking back to Jill with her mountainous tits on
        full display. The cheerleader captain notices and she laughs.
      </Typography>

      {Img(jill, "Jill naked")}

      {getJill(
        "Looks like you are got quite a bit extra time with Miss Jena, " +
          getNickName(props.variables.nickNames) +
          ". No worries, that just means that you will be extra good at all of this. How about we start with some light training?",
        "naked"
      )}

      <Button
        text="Time for training"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default Cheerleader;
//<<set $hypno to $hypno +1>>

import { Typography } from "@mui/material";
import cute1 from "../../resources/img/cute/4.webp";
import hm from "../../resources/img/humpman.jpg";
import ass1 from "../../resources/img/ass/1.jpg";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getHumpman } from "../../functions/getCharacter";
import { Vid } from "../../elements/Video";
import Button from "../../elements/Button";
function HumpmanClassFirst(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Walking into your next class you spot a rather curvy teacher. You
        recognize her as Miss Humpman, the curvy Latina giving you a wide and
        predatory smile as she takes in your body.
      </Typography>

      {Img(hm, "Humpman")}

      <Typography className="my-3">
        You realize that you are barely wearing anything at all. You are pretty
        sure that you would be more decent naked.
      </Typography>

      {Img(cute1, "Cute")}

      <Typography className="my-3">
        You can hear Miss Humpman groan under her breath as she takes you in.
      </Typography>

      {getHumpman("Fuck, you are looking good, girl.", null)}

      <Typography className="my-3">
        She bites her lip before pulling you up beside her for the rest of the
        class to see. None of them comments on the fact that you are almost
        naked, and you can even spot a couple of gals that are sporting the same
        outfit. Though they are fingering themselves like needy sluts while
        having casual conversations with their friends.
      </Typography>

      {Vid("vids/6.mp4", "video/mp4")}

      <Typography className="my-3">
        Is that what your outfit means? That you are some skank? Before you can
        figure it out you feel Miss Humpman's hand on your ass.
      </Typography>

      {getHumpman(
        "Well, how about I help you out with my class since you were so kind to help out Gloria and me with dinner.",
        null
      )}

      <Typography className="my-3">
        She says before turning her attention to the class.
      </Typography>

      {getHumpman(
        "As you all know this is " +
          variables.firstName +
          ". However, as you can see she is showing off her body in one of the slut outfits, like the desperate cunt she is. I bet you can even see her cunt is gleaming underneath that skirt. I just want to let you all know that if anyone of you uses her real name during my class, you will get detention. She isn't a person in here, she is an exercise aid. So please call her slut, bimbo or anything degrading, but using her name is not allowed.",
        null
      )}

      <Typography className="my-3">
        She walks around you while the rest of the class chats with each other.
        She lifts your skirt and pulls down your panties revealing your puffy
        slit and your big round ass.
      </Typography>

      {Img(ass1, "Ass")}

      <Typography className="my-3">
        With that out of the way, Miss Humpman looks around.
      </Typography>

      {getHumpman(
        "So, any suggestions as to what our first exercise should be?",
        null
      )}

      <Typography className="my-3">
        She asks clearly expecting your classmates to figure something out.
      </Typography>

      <Button
        text="Class starts"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}

export default HumpmanClassFirst;

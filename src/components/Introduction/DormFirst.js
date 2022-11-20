import { Typography } from "@mui/material";
import mast1 from "../../resources/img/masturbation/9.jpg";
import abby from "../../resources/img/abby.webp";
import toy1 from "../../resources/img/toy/1.jpg";
import { Container } from "react-bootstrap";
import { getAbby } from "../../functions/getCharacter";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

function DormFirst(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You decide that heading back to your dorm might be the best idea. As
        such you find yourself slowly walking down the strange halls. You see
        plenty of girls eagerly rubbing against each other and pleasuring one
        another. For a moment, you wonder if you should pause and ask to join
        in, but they seem to be a little too lost in pleasure to even
        acknowledge you.
      </Typography>

      {Img(mast1, "masturbation")}

      <Typography className="my-3">
        Finally, you find your room and step inside. It looks like you already
        have three roommates. They give you a smile and they pull you further
        into the room. Before you know it you have been stripped down and are
        naked while they introduce themselves.
      </Typography>

      {getAbby("My name is Abby.", null)}

      <Typography className="my-3">A quirky girl says. </Typography>

      {getAbby(
        "And I can feel your chakra hasn't been properly aligned in some time.",
        null
      )}

      <Typography className="my-3">She explains, rubbing your cunt.</Typography>

      {Img(abby, "Abby")}

      <Typography className="my-3">
        She thinks for a second and then smiles.{" "}
      </Typography>

      {getAbby(
        "In fact, I think I have just the thing. You aren't a Leo, right? Well, not with those hips you are not. I got this amazing Lapis Lazuli alignment tool, please bend over~!",
        null
      )}

      <Typography className="my-3">
        She pulls out what is clearly a dildo and as you are bent over you feel
        it slide deep inside of you.
      </Typography>

      {Img(toy1, "Dildo")}

      <Typography className="my-3">
        The chance of it actually aligning your chakra is pretty low, but it
        feels nice between your folds as it grows slick and wet rather quickly.
        However, your bending over has left your head pushed up against your
        other roommate's pussy.
      </Typography>

      <br />
      <Button
        text="You are quickly overwhelmed by a set of ebonyfold"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}

export default DormFirst;

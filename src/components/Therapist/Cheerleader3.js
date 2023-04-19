import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import pussy from "../../resources/img/masturbation/41.gif";
import sybian from "../../resources/img/machine/6.webp";
import { getJill } from "../../functions/getCharacter";
import Button from "../../elements/Button";
function Cheerleader(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You are led into the equipment room and with the flip of a switch a dim
        fluorescent light flickers on. The room is filled with gym equipment,
        basketballs, mats with mysterious stains, dildos with weights and so on.
        Just the normal equipment that you would expect. However, in the back
        Jill pulls out a Sybian for each of you. She simply asks you to sit on
        it and with her breasts out none of you can disobey her.{" "}
      </Typography>

      {getJill(
        "We will just be learning the chant today, and get it into your brains as a trigger. We won't be adding movements to it, instead just focusing on having you like it. The chant is fairly easy:<br/><strong>Let's get physical</strong><br/> <strong>Get down, get hard, get mean</strong><br/><strong>Let's get physical</strong><br/><strong>And fuck that other team!</strong>",
        "naked"
      )}
      <Typography className="my-3">
        The cheer doesn't seem that bad, honestly, it isn't that outside the
        norm of what an ordinary cheer chant would be. With the instructions,
        Jill places a pair of headphones and goggles on the head of every team
        member and before long lights are flashing away as the Therapist Jena is
        speaking the chant in a slow melodic voice. Each beat of the chant
        follows a pulse of pleasure between your legs, making the entire
        experience incredibly delicious.
      </Typography>
      {Img(sybian, "Sybian")}
      <Typography className="my-3">
        You have no idea how much time you spent on the Sybian, but when Jill
        releases you the scent of sex and pleasure is quite heavy in the small
        storage room. She smiles and nods.
      </Typography>

      {getJill(
        "<strong>Let's get physical<br/>Get down, get hard, get mean<br/>Let's get physical<br/> And fuck that other team!</strong>",
        "naked"
      )}
      <Typography className="my-3">
        {" "}
        You feel your swollen slit drip from the words, pleasure rushing through
        you.
      </Typography>

      {Img(pussy, "Your dripping slit")}

      <Typography className="my-3">
        Another one of the girls even collapses in an intense orgasm from the
        chant.
      </Typography>
      {getJill("Good girls, that is it for today. See you soon.", "naked")}

      <Button
        text="Head back to your room"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default Cheerleader;

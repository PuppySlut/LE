import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import Button from "../../elements/Button";
import { Img } from "../../elements/Image";
import { getWetvalley, getRandStu } from "../../functions/getCharacter";
import mast1 from "../../resources/img/masturbation/6.gif";
import tits1 from "../../resources/img/tits/3.gif";

function PassIntro(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Deciding that any kind of punishment might not be worth it, you find a
        seat in the back of the class. The lessons are about how to properly use
        a strapon. While clearly very sexual it is also very informative, going
        over various facts on how to clean and maintain the toy.
      </Typography>

      <Typography className="my-3">
        A large portion of the class is dedicated to the various straps that
        might be used and how they can break, while another one is spent talking
        about how to choose the right size for your partner.
      </Typography>

      <Typography className="my-3">
        Lastly, you are assigned homework. You are supposed to find three unique
        thrusting patterns and brainstorm on when you are supposed to stop
        fucking your partner. Before you get to leave, Miss Wetvalley asks you
        to stay. She has moved right up to your face.{" "}
      </Typography>

      {getWetvalley(
        "I am a little disappointed that you didn't take the punishment. I guess that I will have to educate you. Come by my chambers whenever you have time.",
        null
      )}

      <Typography className="my-3">She says with a grin.</Typography>

      <Typography className="my-3">
        You barely get to step outside the classroom before you feel hands on
        you. You have no idea who is groping you, but they are doing it rather
        publicly. You can feel a hand on your throat as the stranger exposes you
        to the entire hallway. You hear a couple of gals catcall you but others
        are clearly taking an interest in you.
      </Typography>

      {Img(mast1, "Masturbation")}

      {getRandStu(
        "This slut thinks that she is better than us. She thinks that she doesn't need punishment for being late.",
        null
      )}

      <Typography className="my-3">
        The stranger says will rubbing your cunt in a rather possessive manner.{" "}
      </Typography>

      {getRandStu(
        "I think we should punish this slut ourselves. I say that we remove her dry panty privileges.",
        null
      )}

      <Typography className="my-3">
        Laughter and cheers can be heard all around you as your classmates
        agree. Their hands eagerly touch you all over.
      </Typography>

      {Img(tits1, "Tits")}

      <Typography className="my-3">
        You can feel your orgasm rapidly approaching but just as you are about
        to cum they seem to pull back ever so slightly, making you balance on
        the edge of bliss. The woman behind you whispers into your ear.{" "}
      </Typography>

      {getRandStu(
        "That means you will find yourself molested any time you are sporting dry panties, slut.",
        null
      )}

      <Typography className="my-3">
        With that they let you go. You are dripping and desperate.
      </Typography>

      <br />
      <Button
        text="You head out to your dorm"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default PassIntro;

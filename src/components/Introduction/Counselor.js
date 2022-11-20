import { Typography } from "@mui/material";
import counselor from "../../resources/img/SC.jpg";
import mast1 from "../../resources/img/masturbation/3.jpg";
import mast2 from "../../resources/img/masturbation/4.webp";
import { Container } from "react-bootstrap";
import { getCouns } from "../../functions/getCharacter";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

function CounselorIntro(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You decide that you might as well get to understand what the heck is
        going on. After all, it seems like this place is not your ordinary
        university. A student counsellor might be able to help with that.
      </Typography>

      <Typography className="my-3">
        Walking into the room you see a scantly clad woman who is at the same
        time dressed rather professionally. What you at first assume to be some
        kind of lingerie, is actually a small dress, though it leaves little to
        the imagination. She smiles when you walk in.
      </Typography>

      {Img(counselor, "School counselor")}

      {getCouns(
        variables.firstName +
          " " +
          variables.lastName +
          "! I was just looking over your papers. You have signed up for a ton of stuff! I am Tina Lickwell. A pleasure to meet you. I knew your mother, so of course, it wasn't a surprise that you joined this same prestigious academy. Please have a seat.",
        null
      )}

      <Typography className="my-3">
        She says pointing to a couch. As you take a seat she takes one next to
        you and without question she pulls your panties aside, exposing your
        slit while you try to explain that it was your mother that signed you up
        for this, and you have no idea what you are walking into.
      </Typography>

      {Img(mast1, "Masturbation")}

      {getCouns(
        "Oh, that sounds perfect. In that case I will register " +
          variables.mom +
          " " +
          variables.lastName +
          " as your owner. I will not be spoiling what kind of classes that you have gotten yourself into, but let me explain something about the academy.",
        null
      )}

      <Typography className="my-3">
        Tina says with a smirk, slowly pushing two fingers inside you, while you
        sit on the couch having a casual conversation. Her hand is surprisingly
        possessive.
      </Typography>

      {Img(mast2, "Masturbation")}

      {getCouns(
        "You have been registered as a pet. That means that you will probably not find anyone that will treat you as an equal. They will all treat you like their personal slut. Even during classes, you will find yourself exposed to any wish that the teacher might have. You can of course refuse, but refuse too many times and you will have to speak with me. Continue to refuse, and you might just find yourself back home with mom, and with no option of getting your money back. In debt and without a job seems like a rough spot to be in, so let's agree that you don't want that.",
        null
      )}

      <Typography className="my-3">
        She continues her fingering, though it is clear that she isn't going to
        tell you more about what is happening at the school, and as such you get
        up and leave.
      </Typography>
      <br />
      <Button
        text="Go back to the secretary"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}

export default CounselorIntro;

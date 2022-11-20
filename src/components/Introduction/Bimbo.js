import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { getBimbo } from "../../functions/getCharacter";
import tits1 from "../../resources/img/tits/4.gif";
import tits2 from "../../resources/img/tits/5.gif";
import tits3 from "../../resources/img/tits/6.webp";
import tits4 from "../../resources/img/tits/7.webp";
import tits5 from "../../resources/img/tits/8.gif";
import tits6 from "../../resources/img/tits/9.gif";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

function BimboIntro(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Deciding that the blonde woman might need some 'help' you approach her.
        She gives you a wide grin as she looks you over.{" "}
      </Typography>

      {getBimbo(
        "Like, hi there, naughty slut! Oh, wow! Come join me in thuh water! It is ya know, like, super warm and so class against my bod!",
        null
      )}

      <Typography className="my-3">
        She says in the thickest valley girl accent you have ever heard.{" "}
      </Typography>

      {getBimbo(
        "Don't just stand around! How about I rub you down with like, ya know, this awesome massage oil I have found?",
        null
      )}

      <Typography className="my-3">
        She says getting out of the water.
      </Typography>

      {Img(tits1, "tits")}

      <Typography className="my-3">
        Before you know you are naked and she is slowly rubbing you down in
        thick body oil. The oil makes your body feel warm and soft wherever she
        touches and she is definitely not holding back as your tits get the
        first dose of oil.
      </Typography>

      {Img(tits2, "tits")}

      {getBimbo(
        "Mmmh, like your tits are super duper soft, slut. I can't wait for thuh oil to totally take effect because us gals are goin' to be BFFs from now on.",
        null
      )}

      <Typography className="my-3">
        She whispers in your ear and slowly you feel your bust expanding. It is
        growing bigger and bigger the more she teases and molests you.
      </Typography>

      {Img(tits3, "tits")}

      <Typography className="my-3">
        You can hear her giggle as she takes in the rapid growth to your chest,
        and she is definitely savouring every moment.
      </Typography>

      {Img(tits4, "tits")}

      <Typography className="my-3">
        As she pulls her hands away she inspects your new tits. They are bigger
        than you had thought and you are pretty sure that they won't go back to
        your normal size. Whatever the case, it is clear that you are not going
        to be able to wear your bras anymore.
      </Typography>

      {Img(tits5, "tits")}

      <Typography className="my-3">
        The strange blonde gives you a grin.{" "}
      </Typography>

      {getBimbo(
        "Now your boobies are as hot as mine! It is time to grab somethin' to eat though, but you should totes come see me when you need somewhere to sleep.",
        null
      )}

      <Typography className="my-3">
        She says, teasing her own tits before giving your ass a smack and
        sending you on your way.
      </Typography>

      {Img(tits6, "tits")}

      <Button
        text="Go back to your dorm"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
//<<set $bimbo to $bimbo + 1>>
export default BimboIntro;

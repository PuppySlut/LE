import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import strap1 from "../../resources/img/strap/2.jpg";
import { Img } from "../../elements/Image";
import { getBailey, getMe } from "../../functions/getCharacter";
import anal from "../../resources/img/ass/4.webp";
import anal1 from "../../resources/img/ass/5.webp";
import anal2 from "../../resources/img/ass/3.webp";
import anal3 from "../../resources/img/ass/2.webp";
import Button from "../../elements/Button";

function AnalBailey(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You follow the girl into the bathroom. She's already totally naked and
        is taking something out of her bookbag.{" "}
      </Typography>

      {getBailey(
        "You're " +
          variables.firstName +
          " " +
          variables.lastName +
          ", right? The sexy slut that everyone is talking about? I'm Bailey.",
        null
      )}

      <Typography className="my-3">You nod.</Typography>

      {getMe("That's me. I noticed you staring at my ass. You like it?", null)}

      <Typography className="my-3">
        Bailey pulls you towards her and kisses you roughly.{" "}
      </Typography>

      {getBailey(
        "Oh yes I do. I love girls with big asses. I have one myself.",
        null
      )}

      <Typography className="my-3">
        {" "}
        She briefly turns around to show off her own ass.{" "}
      </Typography>

      {getBailey(
        "Plus, it give me a chance to use one of my favorite toys.",
        null
      )}

      <Typography className="my-3">
        {" "}
        And with that she pulls out a huge black strap-on. It had to be at least
        a foot long.
      </Typography>

      {Img(strap1, "Strapon")}

      {getBailey("I'm going to fuck you in the ass with this.", null)}

      <Typography className="my-3">
        Bailey says with a smirk as she puts on the strap-on. You blush.{" "}
      </Typography>

      {getMe(
        "I've never had anything that big inside of me before, certainly not in my ass.",
        null
      )}

      <Typography className="my-3">Bailey laughs.</Typography>

      {getBailey(
        "Well, once I'm done with you, you'll be the latest size queen around here.",
        null
      )}

      <Typography className="my-3">
        She bends you over the sink before pulling out a bottle of lube, pouring
        it all over the fake cock and rubbing it on as though she was jerking it
        off. The sight of her doing that looks pretty hot.
      </Typography>

      {Img(anal, "Anal")}

      {getBailey(
        "You want this cock in your ass? You want me to make you my little anal slut?",
        null
      )}

      <Typography className="my-3">Bailey demanded. </Typography>

      {getMe("Yes, yes I do!", null)}

      <Typography className="my-3">You reply. </Typography>

      {getMe("Fuck me in the ass with your big cock!", null)}

      <Typography className="my-3">Bailey grins. </Typography>

      {getBailey("Exactly what I want to hear.", null)}

      <Typography className="my-3">
        And she immediately pushes the cock into your asshole.
      </Typography>

      {Img(anal1, "Anal")}

      {getMe("Oh my god....it's so big!", null)}

      <Typography className="my-3">
        {" "}
        You cry out. It's a bit painful but you're absolutely loving it.{" "}
      </Typography>

      {getMe("I want it harder!", null)}

      {Img(anal2, "Anal")}

      {getBailey("Yeah? You want me to pound this asshole?")}

      <Typography className="my-3">
        Bailey asks rhetorically as she begins pounding your asshole, smacking
        your ass as she does so. Moaning and crying Bailey's name you feel an
        orgasm welling up, and soon enough you begin cumming uncontrollably.
      </Typography>

      {Img(anal3, "Anal")}

      <Typography className="my-3">
        With you gushing like a broken mess she seems rather happy and leaves
        you for the night.{" "}
      </Typography>

      <Button
        text="You fade into sleep"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default AnalBailey;

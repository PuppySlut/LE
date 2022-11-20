import { Typography } from "@mui/material";
import poppy from "../../resources/img/poppy.webp";
import mast1 from "../../resources/img/masturbation/10.jpg";
import mast2 from "../../resources/img/masturbation/11.webp";
import { Container } from "react-bootstrap";
import { getPoppy } from "../../functions/getCharacter";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

function DormSecond(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        {" "}
        Your face is filled with a vision of ebony folds.
      </Typography>

      {Img(mast1, "masturbation")}

      {getPoppy(
        "Well, my name is Poppy, and I am a first-year just like you. It is a pleasure to meet you.",
        null
      )}

      <Typography className="my-3">
        She says. You are pretty sure that you have spotted her in the halls at
        some point where she wasn't really wearing that much to conceal herself.
      </Typography>

      {Img(poppy, "Poppy")}

      <Typography className="my-3">
        Even so, your tongue starts to work her folds. She is wet and needy. She
        is more than happy to ride your face and slowly rub her juices all over
        your features. She is groaning softly taking great pleasure in molesting
        your features. Her dark thighs quickly wrap around your face as she is
        starting to approach orgasm.
      </Typography>

      <Typography className="my-3">
        You can taste her need all over your tongue as your spread her folds
        with your warm wet muscle. You can feel the hard clit rubbing against
        your nose as each breath gives you the scent of her wet and needy cunt.
      </Typography>

      {Img(mast2, "masturbation")}

      <Typography className="my-3">
        It is intoxicating, but before you get completely lost in the bliss of
        eating her out while the gem dildo slides in and out of your tight slit,
        your third roommate demands your attention.
      </Typography>

      <br />
      <Button
        text="Your attention is pulled away by gibberish"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}

export default DormSecond;

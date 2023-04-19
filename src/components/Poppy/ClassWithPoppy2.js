import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import pub from "../../resources/img/cute/12.gif";
import { getPoppy } from "../../functions/getCharacter";
import Button from "../../elements/Button";

function ClassWithPoppy2(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        The class is honestly kind of boring. It is mostly the fact that if you
        get caught you should either offer up your body or ask for a lawyer.
        Whatever the case you shouldn't talk one bit. You look over at Poppy and
        notice that she is drawing in her notebook. You are a bit surprised to
        find that she is drawing what looks like a full image sketch of herself,
        but she is sporting a rather sizeable shaft. You can't help but blink a
        little at the image. It seems like the girl is dreaming of being a bit
        more.
      </Typography>
      <Typography className="my-3">
        Your attention is pulled back to the slides as one of them starts to
        move. It appears to be a half-naked woman who is slowly moving on the
        screen. She is barely containing herself as she is clearly enjoying the
        eyes on her body. Her moans only grow in intensity as her hand moves
        down between her thighs, slowly fingering herself in a clothing store.
      </Typography>
      {Img(pub, "Masturbating in a clothing store")}
      <Typography className="my-3">
        You are surprised that the store clerk isn't doing anything about it,
        but on closer examination, you can see a faint pair of lipstick marks on
        the girl's stomach, which seems to match the shade that the clerk is
        using. Things make a lot more sense. The obvious question is of course,
        what the girl did to not get in trouble. It is an easy way of earning
        some points, and Poppy seems rather surprised by your answer. She
        reevaluates you.
      </Typography>
      <Typography className="my-3">
        As the class comes to an end she pulls you aside, finding a small nook
        in one of the school halls. There are plenty of them around as other
        students like to fool around in them. Poppy seems to take a deep breath
        and you get the feeling that whatever she is about to say or ask will
        have a permanent effect on your continued relationship.
      </Typography>
      {getPoppy(
        props.variables.firstName +
          "... you are kinda smart... and I was hoping... would you... how do I ask this... I want a cock...",
        null
      )}
      <Typography className="my-3">
        Her voice ring out. Based on the drawings you saw earlier this doesn't
        really surprise you. She does her best to try and collect herself.
      </Typography>
      {getPoppy("Will you help me get one?")}
      <Button
        text="Help Poppy (Unlocks futanari content)"
        fun={() => {
          props.yes();
        }}
      />
      <Button
        text="Pass on this one"
        fun={() => {
          props.no();
        }}
      />
    </Container>
  );
}
export default ClassWithPoppy2;

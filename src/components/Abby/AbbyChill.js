import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getAbby } from "../../functions/getCharacter";
import waking1 from "../../resources/img/cute/waking.webp";
import waking2 from "../../resources/img/cute/waking2.webp";
import Button from "../../elements/Button";
import { Vid } from "../../elements/Video";

function AbbyChill(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You wake up in your dorm room, groaning a little as your back pops as
        your stretch. Your entire body feels heavy as if someone is laying on
        it, but you see that you somehow have gotten everyone's blankets piled
        on top of you. It is weird that your mind is already going to the
        thought that someone must be lying on top of you, just because you can
        feel their weight.
      </Typography>

      {Img(waking1, "Stretching")}

      <Typography className="my-3">
        You can't help but let a hand slide down between your legs slowly
        rubbing your already wet pussy. This constant need that you have been
        feeling must come from somewhere. As you rub against your clit you can't
        help but let out a soft moan.
      </Typography>

      {Img(waking2, "Rubbing while waking")}

      <Typography className="my-3">
        It seems like you don't have much to do today, and as such you decide to
        see what Abby is up to. She is busy watching some TV. She is relaxing
        and not having a care in the world. It appears to be a movie that she is
        half watching, and it doesn't surprise you that it is porn. The plot is
        kinda hard to follow, but apparently, it is something with a genie and
        corrupting wishes from the mortals.
      </Typography>

      {Vid("vids/genie.mp4", "video/mp4")}

      <Typography className="my-3">
        Abby seems to flip a couple of pages in her book before looking up at
        you. She smiles before casting her eyes on the video, and back to you.
      </Typography>

      {getAbby(
        "Honestly, they are going about it all wrong... But do you believe in things like that? Supernatural stuff I mean. I have a hard time telling with you.",
        "chill"
      )}

      <Typography className="my-3">
        You get the feeling that this might be a defining moment in your
        relationship with Abby.{" "}
      </Typography>
      <Button
        text="Say that you believe."
        fun={() => {
          props.yes();
        }}
      />
      <Button
        text="Say that it isn't for you."
        fun={() => {
          props.no();
        }}
      />
    </Container>
  );
}
export default AbbyChill;

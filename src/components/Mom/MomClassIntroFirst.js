import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import mom from "../../resources/img/art/mom.jpg";
import { Img } from "../../elements/Image";
import { getMom } from "../../functions/getCharacter";
import { Vid } from "../../elements/Video";
import Button from "../../elements/Button";

function MomClassIntroFirst(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You decide to spend some time with your mother, after all, what better
        way to achieve some family bonding? However, you realize that you just
        might have to go to her classes if you want to spend any time with her.
        This is a realization you make during the morning, as a complete
        stranger seems to be savouring your cunt as if it was a fine wine.
      </Typography>

      {Vid("vids/14.mp4", "video/mp4")}

      <Typography className="my-3">
        It is a strange feeling, to say the least, but honestly, at this point,
        it might just be your new normal. People teasing you and this cutie is
        clearly just having fun with you. After quite an amazing morning you
        make your way to your mother's class. Finding her in the middle of
        setting things up. She is sporting a gorgeous dress that is clearly
        showing off her curves in all the right ways.{" "}
      </Typography>

      {Vid("vids/mom.webm", "video/webm")}

      <Typography className="my-3">
        She looks at you as you step inside and gives you a wide smile.{" "}
      </Typography>

      {getMom(
        "OH! Hi there, " +
          variables.firstName +
          "! It is so good that you came by! I am in quite the pickle and I was hoping that you could help me out! I am about to start teaching a class, but my model seems to have been caught up in an intense bondage session and can't make it. Is it something that you would help out with? Please?",
        "teach"
      )}

      <Typography className="my-3">
        You roll your eyes a little at the comment and your Mom smirks.{" "}
      </Typography>

      {getMom(
        "Oh my, such a rebellious teenager. However, I got something for that.",
        "teach"
      )}

      <Typography className="my-3">
        She tugs into her dress and pulls out her massive mounds. Instantly you
        feel the conditioning that you have been exposed to kick in, and you are
        unable to disobey her.
      </Typography>

      {Img(mom, "Mom")}

      <Typography className="my-3">
        With any option of you disobeying her gone she simply asks again, and
        you feel yourself nodding eagerly, happy to pleasure her in any way that
        you can. After all, she is the one in charge, she is the one with the
        power.
      </Typography>

      <Button
        text="You are going to class"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default MomClassIntroFirst;

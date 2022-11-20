import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import mom from "../../resources/img/mom.jpg";
import momtits from "../../resources/img/momtits.jpg";
import head1 from "../../resources/img/headmistress4.webp";
import { Img } from "../../elements/Image";
import { getHead, getMom } from "../../functions/getCharacter";
import Button from "../../elements/Button";

function MomIntroFirst(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Before you have time to ask questions about who is going to be the guest
        you spot a familiar body standing in the door. She is barely clothed,
        but there is no doubt that it is your mom. You can't help but blink as
        you see her wearing little more than a gown as she walks closer to you.
      </Typography>

      {Img(mom, "Mom")}

      {getMom(
        "Hi, sweetie. I see you have met Olivia and her amazing tits.",
        null
      )}

      <Typography className="my-3">
        Your mother says so very casually before walking over to the
        headmistress and kissing her deeply. You feel a sudden urge to cover
        your body but a look from your Mistress tells you not to. The two women
        are eagerly making out their heavy tits pushing against one another. It
        isn't long before they part and you are pulled in between them.
      </Typography>

      {Img(momtits, "Mom")}

      {getMom("Have you been a good little lesbian?", null)}

      <Typography className="my-3">
        Your mom asks casually as if it isn't one of the lewdest things you have
        ever heard. Headmistress Olivia is quick to interrupt.
      </Typography>

      {getHead(
        "Oh yes, she has. Such a naughty little slut. Already really indoctrinated. Her trigger is tits, so as long as you have a good pair, and sweet " +
          variables.mom +
          " you have an amazing pair, she simply cannot disobey you.",
        "seductive"
      )}

      <Typography className="my-3">
        She explains and you can't help but wonder if that is true. You cannot
        bring yourself to disagree with the Headmistress though as she looks so
        beautiful with her heavy mounds.
      </Typography>

      {Img(head1, "Headmistress")}

      <Typography className="my-3">Your mom laughs at that.</Typography>

      {getMom(
        "Is that how you got her into that slutty latex outfit? Is that true, cupcake? Are you addicted to big round tits?",
        null
      )}

      <Typography className="my-3">
        Your mom asks you before you can really say anything she pushes a thigh
        between your legs. You instinctively start to grind against the thigh,
        your tight latex outfit creaking a bit with every move you make.
      </Typography>

      {getMom(
        "Oh my, honey! You are a little obedient lesbian. Mommy can't wait for you to finish your education here. You will be such a good little slut back home. Unable to disobey Mommy as long as she pulls her tits out.",
        null
      )}

      <Typography className="my-3">
        She teases while you keep grinding against her thigh, completely unable
        to disagree with her as long as she has those massive mounds on display.
      </Typography>

      <Button
        text="They start to talk"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default MomIntroFirst;

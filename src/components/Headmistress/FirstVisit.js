import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import head from "../../resources/img/headmistress.webp";
import tits1 from "../../resources/img/tits/12.webp";
import tits2 from "../../resources/img/tits/13.gif";
import tits3 from "../../resources/img/tits/14.webp";
import strap1 from "../../resources/img/strap/7.webp";
import { Img } from "../../elements/Image";
import { getHead } from "../../functions/getCharacter";
import Button from "../../elements/Button";

function FirstVisit(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        {" "}
        You decide that visiting the Headmistress might be a good way to spend
        your time. You can't help but feel a little nervous as you make your way
        to her office. Knocking on the door and walking inside you see her
        sitting there with a smile.
      </Typography>

      {Img(head, "Headmistress")}

      <Typography className="my-3">
        {" "}
        You don't even get to open your mouth before you feel Mistress put her
        massive breast into your mouth. As your conditioning sets in you can't
        think about anything that you could possibly have to say that was more
        important than pleasuring her.
      </Typography>

      {Img(tits1, "Tits")}

      {getHead(
        "Oh my, you really have taken well to the conditioning, princess. You are a complete addict. We will have to enrol you in the ass conditioning as well. That will make you completely unable to disobey any teacher here.",
        null
      )}

      <Typography className="my-3">
        She says though she is not really talking to you, as much as she is
        talking at you, kind of like how someone is talking to a fish. You can't
        really blame her. There are no thoughts in your mind. All you can think
        about is those fantastic tits and how perfect they are.
      </Typography>

      {Img(tits2, "Tits")}

      <Typography className="my-3">
        You are sure they would feel bliss against your hands if you could
        convince her to let you grope them. Maybe if you obey every order that
        she gives you, then maybe you could get to feel and squeeze them? It
        might be worth a try who knows! They would be absolutely divine in your
        hands!
      </Typography>

      {Img(tits3, "Tits")}

      <Typography className="my-3">
        You feel your excitement rise as you convince yourself how good it must
        be. And your eagerness must have shown on your face, as Mistress grins
        and licks her lips. Before you know it you have a gag in your mouth and
        she is pounding you hard from behind while people come to talk to her.
        You are her little fuckpuppet and while she praises you whenever you cum
        in front of strangers, she doesn't even acknowledge you otherwise.
      </Typography>

      {Img(strap1, "Strapon")}

      <Typography className="my-3">
        It is very late by the time she finally lets you go. You can't help but
        almost limp a little as you head back to your room.
      </Typography>

      <Button
        text="Going back to your room"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}

export default FirstVisit;

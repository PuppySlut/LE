import { Typography } from "@mui/material";
import mast1 from "../../resources/img/masturbation/32.webp";
import mast2 from "../../resources/img/masturbation/33.webp";
import mast3 from "../../resources/img/masturbation/34.webp";
import cosplay1 from "../../resources/img/cosplay/4.jpg";
import cosplay2 from "../../resources/img/cosplay/5.webp";
import mast4 from "../../resources/img/masturbation/35.webp";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getChef } from "../../functions/getCharacter";
import Button from "../../elements/Button";
function WetvalleyMealKitchenPrep(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        As one of the chefs starts to feed you what you assume is some kind of
        white curry stew, you feel the other one start to tease your pussy.
      </Typography>
      {getChef("Mmmh, you new sluts are always so fucking desperate.", "first")}
      <Typography className="my-3">
        The chef behind you says, clearly taking great pleasure in examining
        your tight snatch even closer. You feel her warm tongue against your
        hole and you can't help but moan out loud, which makes the other chef
        laugh.
      </Typography>
      {getChef(
        "Remember she is supposed to be desert so she should be as sweet as possible,",
        "second"
      )}
      <Typography className="my-3">
        She says giving you another spoonful of the rich stew that makes your
        body feel like it is on fire.
      </Typography>
      <Typography className="my-3">
        A couple of seconds later you feel something slide inside you and you
        realize that your pussy is being filled by a lollipop.
      </Typography>
      {Img(mast1, "Masturbation")}
      <Typography className="my-3">
        You can feel it dissolve inside of you, slowly making your walls sweeter
        and stickier. Your cunt is definitely going to be very sweet, though the
        chef doesn't relent. She is making sure to press the lollipop against
        every single inch of your tight hole.
      </Typography>
      {Img(mast2, "Masturbation")}
      <Typography className="my-3">
        It is a strange feeling, to say the least, but it isn't as strange as
        the feeling of honey being poured over your snatch. A couple of skilled
        fingers slowly work the thick liquid into your body.
      </Typography>
      {Img(mast3, "Masturbation")}
      <Typography className="my-3">
        As you get covered in honey the other chef finishes up her little
        feeding session and smiles.
      </Typography>
      {getChef("Good girl. Now let's get some sprinkles on you.", "second")}
      <Typography className="my-3">
        One of the chefs says before slowly starting to cover you in sprinkles.
        Thanks to the honey they stick nicely making your cunt look like a
        little heart.
      </Typography>
      {Img(cosplay1, "Cosplay")}
      <Typography className="my-3">
        The rest of your body gets the same treatment, clearly showing that the
        chefs are taking great pain in preparing you for Miss Wetvalley and her
        lover.
      </Typography>
      {Img(cosplay2, "Cosplay")}
      <Typography className="my-3">
        With one last flourish, a strawberry is placed inside your slit and more
        are placed all around you. You have been neatly decorated and you are
        ready to both serve and be served.
      </Typography>
      {Img(mast4, "Cosplay")}
      <Button
        text="You find yourself rolled to Miss Wetvalley's room"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}

export default WetvalleyMealKitchenPrep;

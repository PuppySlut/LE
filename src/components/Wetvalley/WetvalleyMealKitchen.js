import { Typography } from "@mui/material";
import chef1 from "../../resources/img/chef1.webp";
import chef2 from "../../resources/img/chef2.webp";
import mast1 from "../../resources/img/masturbation/30.webp";
import mast2 from "../../resources/img/masturbation/31.gif";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getChef } from "../../functions/getCharacter";
import Button from "../../elements/Button";
function WetvalleyMealKitchen(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You decide that extra credit sounds like a good idea. You agree to the
        request and Miss Wetvalley gives you a piece of paper and asks you to
        head down into the kitchen.
      </Typography>
      <Typography className="my-3">
        Stepping inside you see two chefs eagerly preparing food for everyone.
        They give you a smile.{" "}
      </Typography>
      {getChef("What can we do for you, sweetie?", "first")}

      <Typography className="my-3">
        One asks and grabs the note as you hand it over. She reads it over
        slowly, and you can't help but look at her body which seems barely
        hidden by her apron, which is the only thing that she is wearing, other
        than the chef's hat.
      </Typography>

      {Img(chef1, "Chef")}

      <Typography className="my-3">
        She starts to laugh when she finishes the note and calls the other woman
        over and they read the note once more in complete silence before they
        both burst out laughing. The other chef seemed to be wearing about the
        same amount of clothes as the first and you can see her tits jiggle and
        bounce as she lets her laughter run through her.
      </Typography>

      {Img(chef2, "Chef")}

      <Typography className="my-3">
        They turn their attention to you as they get their laughter out of their
        system.
      </Typography>

      {getChef(
        "Well then, slut. We better get you prepared for the meal. Have you eaten yet?",
        "second"
      )}

      <Typography className="my-3">
        One asks making you shake your head in the negative. The cooks smile and
        before you know it, they lift you up onto the kitchen table. You are put
        onto all fours and your hands are tied together.
      </Typography>
      {getChef(
        "Don't worry, we are just tying you up a bit, then we will be sure to give you something to eat while we get you ready.",
        "first"
      )}

      <Typography className="my-3">
        One of the chefs says, spreading your legs and tying them to the table,
        before you know it your hands are pushed through your legs and tied into
        place, making your present your holes to the world face down and ass up.
      </Typography>

      {Img(mast1, "Masturbation")}

      {getChef(
        "Fuck look at those holes! That is a princess pussy if I ever saw one!",
        "second"
      )}

      <Typography className="my-3">
        The other chef says with a smile. The one that had been talking to you
        walks around you and gets a proper look at your ass and cunt.
      </Typography>

      {getChef(
        "You are right. Hot damn. I wouldn't mind eating those out. Are they as tight as they look?",
        "first"
      )}

      <Typography className="my-3">The chef asks.</Typography>
      {getChef("Let's see.")}
      <Typography className="my-3">
        You feel a pair of fingers slide inside you and a thumb finds your clit
        with such skill that you are pretty sure that she can do it as easily as
        peeling a potato. What follows are some of the most intense finger
        fucking you have ever experienced.
      </Typography>

      {Img(mast2, "Masturbation")}

      {getChef(
        "Welp, nothing too squishy in there, she is practically pulling my fingers inside of her.",
        "first"
      )}

      <Typography className="my-3">
        The chef announces and starts to prepare whatever meal Miss Wetvalley
        has requested. The other chef starts to make you something to eat.
      </Typography>
      <Button
        text="They give you something light"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}

export default WetvalleyMealKitchen;

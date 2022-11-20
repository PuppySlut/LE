import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import card1 from "../../resources/img/art/3.png";
import card2 from "../../resources/img/art/4.png";
import card3 from "../../resources/img/art/5.png";
import Button from "../../elements/Button";

function AbbyCardsFinish(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        The game goes back and forth, nobody has the upper hand as your deck is
        designed around having as many orgasms as possible to trigger various
        effects along with giving your minions powerful stats.
      </Typography>

      {Img(card3, "Lewd Card")}

      <Typography className="my-3">
        You are actually quite amazed by some of the synergies that you find in
        the deck that gives quite a bit of competitive edge balanced with a lot
        of neat little moments that are sprinkled throughout the game.
        Especially as every time you play a card Abby and you laugh about how it
        totally applies to you.
      </Typography>

      {Img(card1, "Lewd Card")}

      <Typography className="my-3">
        All in all, it is quite a wholesome and casual match between friends.
        Just throwing down some cards and trying to cum as much as possible,
        while talking and giggling. It is a nice change compared to what you are
        used to at this school. Even so, Abby's deck is a lot more
        control-focused, annihilating pretty much anything you throw her way.
      </Typography>

      {Img(card2, "Lewd Card")}

      <Typography className="my-3">
        You are of course trying to win, but by turn eleven you have run out of
        steam and the two of you settle in for a steady rhythm that means that
        every time you summon a creature Abby destroys it with some BS spell.
        However, any thoughts of this being unfair vanish whenever she attacks
        you directly as she insists on using whatever 'weapon' she has equipped
        to plough you thoroughly. It is a nice feeling and you can't help but
        feel like spending time with her has been pretty nice.{" "}
      </Typography>
      <Button
        text="You finish up for the day."
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default AbbyCardsFinish;

import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import toy1 from "../../resources/img/toy/2.jpg";
import toy2 from "../../resources/img/toy/3.jpg";
import mast1 from "../../resources/img/masturbation/21.jpg";
import mast2 from "../../resources/img/masturbation/22.gif";
import mast3 from "../../resources/img/masturbation/23.gif";
import mast4 from "../../resources/img/masturbation/24.jpg";
import mast5 from "../../resources/img/masturbation/25.jpg";
import { getTeddy } from "../../functions/getCharacter";
import Button from "../../elements/Button";

function HypnoBear(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You decide that you might as well look around the place. It doesn't seem
        like there could be anything around that would cause you any grief, at
        least not something that isn't intensely sexual, and as such you don't
        mind just wandering for a bit. After about half an hour of aimless
        wandering, you finally find a door that looks interesting. It seems like
        it has hardly been used, and you can't help but notice that the handle
        is strangely erotic in nature.
      </Typography>

      {Img(toy1, "Toy")}

      <Typography className="my-3">
        Opening the door you find yourself in a land of pillows. You really
        can't see the floor instead pillows and mattresses cover every visible
        spot. Even the walls seem to be covered in pillows. Sitting in the
        middle is a big stuffed bear. Its soulless eyes watching you intently.
        You can't take your eyes away from it. It feels hard to think and before
        you even know what you are doing you have thrown off your top and your
        bra. The eyes seem to gleam and the permanent smile seems to get just a
        little bit wider, though that might just be your imagination.
      </Typography>

      {Img(mast1, "Masturbation")}

      {getTeddy(
        "Good girl! Showing off your tits. Teddy loves your tits. They look as soft as him. So big and round. Tits are meant to be played with wouldn't you agree?"
      )}

      <Typography className="my-3">
        The voice seems to come from inside your mind, making it so hard to
        think and you simply nod your head in agreement.{" "}
      </Typography>

      {getTeddy(
        "Tits should be played with. You have tits. You should be played with."
      )}

      <Typography className="my-3">
        The voice continues, the logic so hard to ignore.
      </Typography>

      {getTeddy(
        "Good. Teddy is all pent up. Too few good girls come around to play."
      )}

      <Typography className="my-3">
        The voice continues, and it is only now that you notice the big fat
        strapon that has been put on the bear. It looks like a custom model,
        clearly something designed to bring pleasure to anyone that is
        unfortunate enough to find themselves on the receiving end. It is almost
        animalistic in nature, but you swear that you can see the mould lines
        along the balls of it.
      </Typography>

      {Img(toy2, "Toy")}

      <Typography className="my-3">
        You find yourself walking slowly towards the bear, only to trip since
        the floor seems to be made completely from pillows. However, it doesn't
        hurt one bit, and you continue to crawl closer to the stuffed animal.
        Its eyes looking at you, though it isn't moving. It is hard to tell if
        this is something that you are imagining or that there is actually
        something inside the bear.{" "}
      </Typography>

      {getTeddy(
        "Good girl. You want to be Teddy's needy slut. You belong around Teddy's member. You need to be owned by a stuffed animal. Nothing but a needy slut for an object."
      )}

      <Typography className="my-3">
        The voice rings in your head drowning out all other thoughts. Your body
        is moving on its own as you remove your panties to show the stuffed
        animal how wet you are for it.
      </Typography>

      {Img(mast2, "Masturbation")}

      <Typography className="my-3">
        Soon you have mounted the bear, feeling your cunt getting spread by the
        strange shaft. A plush hand finds your thigh pushing you down. You can't
        tell if you moved the hand yourself or if the bear is simply filling you
        up. It is so hard to think, but it doesn't matter, all that matters is
        the fact that you manage to take the entire shaft to the base, and you
        can start to grind against the plushie.
      </Typography>

      {Img(mast3, "Masturbation")}

      <Typography className="my-3">
        You moan and howl, as it is clear that you are little more than a hole
        for the bear. It is insane to think that you are owned by little more
        than an object, but it is clearly true. You might as well have been
        owned by a dildo, nothing but a fucktoy for the stuffed animal as it
        stuffs you. As you feel your first orgasm take over you push the toy
        against the wall and slam your hips against the base, savouring every
        bulge on the natural shaft.
      </Typography>

      {Img(mast4, "Masturbation")}

      <Typography className="my-3">
        You know why the walls and floor are so soft. It is to allow yourself to
        get lost in the pleasure of fucking the only lover that has ever made
        you feel like such a needy cunt. The pleasure building rapidly inside of
        you and it seems to intensify rapidly. Before you know it you are
        exploding once again, this time making you howl in bliss. The bear is on
        top of you in a blink of an eye, and you can't say if it is your thighs
        making it thrust inside of you or if it's doing it on its own. Honestly,
        you don't care at this point.
      </Typography>

      {Img(mast5, "Masturbation")}

      <Typography className="my-3">
        Orgasm after orgasm rolls through you with no mercy, when you finally
        come to your sense you are outside the door. You can feel something
        sticky between your legs and see that you are oozing with pink good.
        Clearly some kind of cum substitute. Blinking a little you find your way
        back to the part of the school you know, though making sure that you can
        find your way back to the best toy you have ever been owned by.
      </Typography>

      <Button
        text="Head back to your dorm for the night"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default HypnoBear;
//<<set $hypno to $hypno +1>>

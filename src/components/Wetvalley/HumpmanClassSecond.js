import { Typography } from "@mui/material";
import group1 from "../../resources/img/group/4.gif";
import sciss1 from "../../resources/img/scissor/2.webp";
import bimbo1 from "../../resources/img/bimbo/1.jpg";
import strap1 from "../../resources/img/strap/4.webp";
import strap2 from "../../resources/img/strap/5.webp";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

function HumpmanClassSecond(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        As soon as Miss Humpman says that people can start you see that almost
        everyone begins to work out in some way or another. While people are in
        small groups it is also clear that what they do for a workout is not
        what you had really expected. Or rather, having been at this school for
        a day, it is exactly what you have expected. A trio of girls finding
        somewhere to sit and eagerly starts to rub their cunts, clearly trying
        to burn off some calories through furious masturbation.
      </Typography>

      {Img(group1, "Group")}

      <Typography className="my-3">
        While another group does some light 'Yoga', but you clearly recognize
        the around of puffy cunts rubbing against each other. You can't help but
        wonder if you might be able to ask them to use you instead. Though you
        don't get the chance.
      </Typography>

      {Img(sciss1, "Scissoring")}

      <Typography className="my-3">
        Before you get to do anything Miss Humpman takes you by the neck and
        leads you over to the equipment. Without a word, she ties you up and
        exposes you as if it is something completely normal.
      </Typography>

      {Img(bimbo1, "Bimbo")}

      <Typography className="my-3">
        Over the next hour, people use you like a fucktoy. You really aren't
        anything but a piece of equipment to them, clearly not even worth a name
        as they fuck you mercilessly. Strapons almost constantly fill your holes
        as they plough you every way they can think of.
      </Typography>

      {Img(strap1, "Strapon")}

      <Typography className="my-3">
        You can feel their bodies pushing against your own. You can smell their
        softness as they are so close, but without a word, they slide deep
        inside you and start to fuck you like there is no tomorrow. Their hips
        are pistoning hard as they try to work up a sweat in fucking you. Each
        and every shaft leaves behind a sticky surprise that is pumped directly
        into your holes, leaking out.
      </Typography>

      {Img(strap2, "Strapon")}

      <Typography className="my-3">
        To your surprise, people only get angry when you are whipped down...
        there might be some difference between you and the other equipment after
        all. As dinner approaches the gals seems to be fucking you much more
        half-heartedly clearly looking forward to getting something to eat.
      </Typography>

      <Button
        text="After your meal you head back to your dorm"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}

export default HumpmanClassSecond;

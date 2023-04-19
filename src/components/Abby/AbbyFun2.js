import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getAbby } from "../../functions/getCharacter";
import Pen from "../../resources/img/Pen.jpg";
import expandP from "../../resources/img/bimbo/2.gif";
import expandP2 from "../../resources/img/bimbo/3.gif";
import puffy from "../../resources/img/cute/11.webp";
import norm from "../../resources/img/masturbation/5.webp";
import Button from "../../elements/Button";
import { useState } from "react";
import Fade from "@mui/material/Fade";
import rothenburg_decorativeregular from "../../resources/css/rothenburg-decorative.regular-webfont.woff2";

function AbbyFun2(props) {
  /*setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);*/

  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const change = () => {
    setShow(!show);
    if (show === checked) {
      setTimeout(function () {
        setChecked(!checked);
      }, 500);
    }
  };

  return (
    <Container>
      <Typography className="my-3">
        The fountain pen that was inside was ornate and beautiful. The intricate
        craftmanship almost made up for the fact that you were pretty sure that
        it could be bought on Amazon for far too much money, and it was probably
        going to leak almost constantly.
      </Typography>

      {Img(Pen, "Magic Pen")}

      {getAbby(
        "I swear this is the real deal. If your body is attuned to the pen you can reshape reality with it. It is kind of weird since you can only modify existing text, but whenever you modify text the world shifts. I am not fully aware of its limits, but it is kinda like the Genie movie we saw last time, it tries to corrupt the wishes into something supremely naughty.",
        "naked"
      )}
      <Typography className="my-3">
        You tried to grasp the concept but it was honestly supremely weird. That
        could only mean that this was another one of those "Abby ideas" that
        would supposedly tap into some ancient mystical power beyond mortal
        comprehension. The gal could see your hesitation and she rolled her
        eyes.
      </Typography>
      {getAbby("FINE! Let me prove it to you then!", "naked")}
      <Typography className="my-3">
        She rummaged through your room and found something that she could use.
        The blonde hippy girl found what she was looking for. A diary! You were
        pretty sure that Poppy was the one keeping that one. She highlighted a
        line on the page about you.{" "}
      </Typography>

      {show ? (
        <Fade in={checked}>
          <div>
            <Typography
              className="my-3"
              sx={{
                fontFamily: "rothenburg_decorativeregular",
              }}
              variant="h4"
              fontFamily={rothenburg_decorativeregular}
            >
              My new roommates are absolutely amazing. I am lucky that I am with
              a girl that is also a first-year student.{" "}
              {props.variables.firstName} is super cute and I have already
              gotten to taste her plumb pussy.
            </Typography>
            <Typography className="my-3">
              With a flick of the pen, Abby added the word "Plumb" before pussy.
              When she did everything seemed to shift and change making it hard
              for you to breathe for a second. Instantly you felt the pressure
              between your legs starting to build. It was intense and the
              pleasure poured through you as your pussy became bigger and
              bigger.
            </Typography>
            {Img(expandP, "Pussy Expand")}
            <Typography className="my-3">
              The lips were sensitive to the touch, and your clit was firmly
              buried in the warm folds. However, the growth of your sex didn't
              seem to stop. It only seemed to pick up speed becoming fatter and
              thicker. It would be hard for you to close your legs at this
              point.
            </Typography>
            {Img(expandP2, "Pussy Expand")}
            <Typography className="my-3">
              You gasped as bliss rushed through you, pleasure beyond anything
              that you have ever experienced, as your newly enlarged cunt
              jiggled and bounced. It was incredibly jiggly and beyond any
              reasonable size.
            </Typography>
            {getAbby(
              "See! The pen can twist pretty much anything or anyone!",
              "naked"
            )}
            <Typography className="my-3">
              You looked at Abby a bit confused. This was just another one of
              those ideas that she has. She would write down something obviously
              true and always has been. You gave her a look, and Abby pinched
              the bridge of her nose.
            </Typography>
            <Typography className="my-3">
              You could remember always having trouble finding panties that fit.
              Often the fabric would get swallowed up by your massive lips, and
              even wearing pants seems completely impossible.
            </Typography>
            {Img(puffy, "Puffy cunt")}
            <Typography className="my-3">
              You could remember it so vividly as if it had happened yesterday.
              How you got teased with your puffy snatch, and how your Mom had
              needed to comfort you. You could remember how this school had
              ensured that your needy slit was shown off on the first day, and
              how your roomies had played with the puffy labia, making them
              jiggle and bounce from kisses. Even taking time on who could make
              you jiggle the most. It was the first time you had felt really
              accepted.{" "}
            </Typography>
            {getAbby(
              "Yea, this was what I was afraid of. The thing is that people don't remember that the world has changed and I need some help to figure out how to use this thing. I can delete the last thing it wrote though, as long as it is within 24 hours.",
              "naked"
            )}
            <Typography className="my-3">
              Abby turned the pen around, letting the dull jade piece at the top
              run over what she had just written. The text disappeared and once
              more the entire world started to shift. Your cunt shrunk, becoming
              normal.
            </Typography>

            {Img(norm, "Normal cunt")}

            <Typography className="my-3">
              You are about to scream with joy, and finally, you can become a
              normal human being, but then pleasure rushes through you and your
              body shudders. Your mind goes blank for a second as memories that
              seemed so incredibly vivid disappear. You have always had this
              pussy and it is nice and plump, but not overly big.
            </Typography>
            {getAbby("Will you please help me with this thing?", "naked")}
            <Typography className="my-3">
              Abby is almost begging at this point and you can't bring yourself
              to say no, even if this whole thing is just one of her out-there
              alternate science ideas.{" "}
            </Typography>
            <Typography className="my-3">
              The two of you discuss ideas on how to proceed until it is time to
              grab something to eat. You do so before heading back to your room
              for the evening.
            </Typography>
            <Button
              text="Crawl to bed"
              fun={() => {
                props.next();
              }}
            />
          </div>
        </Fade>
      ) : (
        <Fade in={!checked}>
          <Typography
            className="my-3"
            sx={{
              fontFamily: "rothenburg_decorativeregular",
            }}
            variant="h4"
            fontFamily={rothenburg_decorativeregular}
          >
            My new roommates are absolutely amazing. I am lucky that I am with a
            girl that is also a first-year student. {props.variables.firstName}{" "}
            is super cute and I have already gotten to taste{" "}
            <span
              style={{ color: "red" }}
              onClick={() => {
                change();
              }}
              className="pointer"
            >
              <u>her pussy.</u>
            </span>
          </Typography>
        </Fade>
      )}
    </Container>
  );
}
export default AbbyFun2;

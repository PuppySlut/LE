import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getAbby } from "../../functions/getCharacter";
import toy1 from "../../resources/img/toy/4.webp";
import toy2 from "../../resources/img/toy/8.webp";
import Button from "../../elements/Button";
import { Vid } from "../../elements/Video";

function AbbyCards(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You wake up in your dorm, Abby, Poppy and Mary cuddled around you and
        you can feel their soft touches against your body. It is clear that they
        have been taking advantage of your unprotected body while you have been
        sleeping as you are pretty sure that the particularly thick Unakite
        dildo is new, and you can feel it deep inside of you. It is supposed to
        help with sleeping.
      </Typography>

      {Img(toy1, "Toy")}

      <Typography className="my-3">
        You stretch and yawn, feeling having honestly slept incredibly well. You
        might just have to thank Abby for her help, though there is no need to
        make it too obvious. Looking around you can't find her anywhere and as
        such you decide to try and search for her. The information isn't hard to
        find, but the method is fairly predictable for the school.{" "}
      </Typography>

      {Vid("vids/9.mp4", "video/mp4")}

      <Typography className="my-3">
        After escaping the impromptu orgy that seems to be forming around you,
        simply by asking where you can find Abby, you find her in one of the
        greenhouses where she is playing with a set of strange cards. She
        doesn't even look up when you enter.{" "}
      </Typography>

      {Img(toy2, "Toy")}

      {getAbby(
        "Ahhh, I was expecting you. Don't worry, the cards have told me all about your past, present and future. There is no need to hide from the world anymore. Please take a seat, Amanda.",
        null
      )}

      {variables.firstName === "Amanda" ? (
        <Typography className="my-3">
          You feel a little surprised that she knew it was you. There might be
          some truth to this after all.
        </Typography>
      ) : (
        <div>
          <Typography className="my-3">
            You blink. Clear your throat, and give Abby a look.{" "}
          </Typography>

          {getAbby(
            "Oh! " +
              variables.firstName +
              "! I should have expected as much! Sorry! I... Uhm... I thought you might have been someone else.",
            null
          )}

          <Typography className="my-3">
            Abby apologizes before gesturing to a seat in front of her.
          </Typography>
        </div>
      )}

      {getAbby("Come take a seat.", null)}

      <Typography className="my-3">
        The hippie girl suggests laying out some strange cards in front of you.
      </Typography>

      {getAbby("Want to play a little game?", null)}

      <Typography className="my-3">
        What you had expected to be tarot card turns out to be some kind of lewd
        collectable cardgame.
      </Typography>
      <Button
        text="Sure why not"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default AbbyCards;

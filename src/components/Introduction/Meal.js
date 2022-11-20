import { Typography } from "@mui/material";
import mast1 from "../../resources/img/masturbation/12.gif";
import cute1 from "../../resources/img/cute/1.jpg";
import { Container } from "react-bootstrap";
import { getRandStu } from "../../functions/getCharacter";
import { Img } from "../../elements/Image";
import { getNickName } from "../../functions/getNickName";
import { Vid } from "../../elements/Video";
import Button from "../../elements/Button";
function Meal(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You decide that something nice to eat will hit the spot just right. The
        canteen is full of people, and it comes as no surprise that the food has
        been shaped like pussies. You are pretty sure that some poor girl's
        juices have been mixed in with your dinner.{" "}
      </Typography>

      {Vid("vids/2.mp4", "video/mp4")}

      {variables.drypanty ? (
        <Typography className="my-3">
          You sigh and eat up quickly, you are pretty beat after the day that
          you have had. As such you head off to bed without even thinking much
          about it.
        </Typography>
      ) : (
        <div>
          <Typography className="my-3">
            As you are about to eat you feel someone push a hand between your
            legs.
          </Typography>

          {Img(mast1, "Masturbation")}

          {getRandStu(
            "Someone has dry panties. Looks like we have to fix that!",
            "meal"
          )}

          <Typography className="my-3">
            The unknown student says, pushing her hand into your panties where
            her digits sink into your puffy folds. You can feel two fingers
            slide inside of you, pushing up against your clit as she starts to
            slowly move back and forth.{" "}
          </Typography>

          {Vid("vids/3.mp4", "video/mp4")}

          <Typography className="my-3">
            Before you know it she is pulling you up to a standing position by
            your cunt alone, and pushing you onto the table so you are laying on
            your back. She moves in between your legs and you can feel her
            rubbing against you, even with your clothes on it feels amazing. You
            are putting on a great display for the entire dining hall, and you
            feel the desperate need to moan and beg for more.
          </Typography>

          {Img(cute1, "Cute")}

          <Typography className="my-3">
            You can feel the orgasm building inside of you, but before you
            explode she pulls away and smirks.{" "}
          </Typography>

          {getRandStu(
            "That should do it. Enjoy your soaked panties, " +
              getNickName(variables.nickNames),
            "meal"
          )}
          <Typography className="my-3">
            With that, the stranger leaves. You are not sure if you want to
            change your panties to get them dry or to ensure that this will
            happen again.
          </Typography>
        </div>
      )}

      <Button
        text="Go to your room and sleep"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}

export default Meal;

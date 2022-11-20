import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { getMom } from "../../functions/getCharacter";
import { Vid } from "../../elements/Video";
import Button from "../../elements/Button";

function MomSecondClass(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You gotta admit that you had a lot of fun with your mom the last time
        you hung out with her, and as such you find your way back to her
        classroom. She lights up with a bright smile when she spots you, clearly
        incredibly happy to see you.{" "}
      </Typography>

      {Vid("vids/mom2.mp4", "video/mp4")}

      {getMom(
        "Morning, princess. You look incredible! Ready for another day as my model? I promise you that you will be rewarded for all your hard work!",
        null
      )}

      <Typography className="my-3">
        She says with a smirk on her lips. She pulls you in for a hug and you
        feel her hands slowly explore your body, finding your cheeks and giving
        them a squeeze before slowly moving up your hips, gently pulling off
        your shirt and throwing it to the side. She kisses you deeply and the
        two of you are standing there, kissing and groping each other
        passionately as the other students join the class. Though before all the
        other students have joined the class your mom is eagerly eating you out.
      </Typography>

      {Vid("vids/19.mp4", "video/mp4")}

      <Button
        text="Begin class"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default MomSecondClass;

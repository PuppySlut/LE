import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import group1 from "../../resources/img/group/13.jpg";
import group2 from "../../resources/img/group/12.jpg";
import group3 from "../../resources/img/group/14.jpg";
import group4 from "../../resources/img/group/17.jpg";
import { getNurse } from "../../functions/getCharacter";
import { Vid } from "../../elements/Video";
import Button from "../../elements/Button";

function SecondCheckUpExamination(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Walking into the clinic you are surprised to find two other nurses that
        are clearly not medically trained. They look a lot like porn models,
        though the outfits they are sporting do nothing to help alleviate that
        perception of them.
      </Typography>

      {Vid("vids/12.mp4", "video/mp4")}

      <Typography className="my-3">
        The blonde is clearly giggling and teasing the brunette who seems to be
        occupied by her own massive tits.{" "}
      </Typography>

      {Vid("vids/13.mp4", "video/mp4")}

      <Typography className="my-3">
        It doesn't take them long before they spot you and they both smile.{" "}
      </Typography>

      {getNurse(
        "Oh, you must be that cute cow that the nurses talked about!",
        "blonde"
      )}

      <Typography className="my-3">
        The blonde exclaims and before you can even think of asking about the
        nurses the brunette joins in.{" "}
      </Typography>

      {getNurse(
        "Yea, such a cutie. Come here you are just in time for another examination.",
        "brunette"
      )}

      <Typography className="my-3">
        She says and leads you to a medical bed.
      </Typography>

      <Typography className="my-3">
        Before long you feel surrounded by a lot of women who are dressed like
        pretend nurses.{" "}
      </Typography>

      {Img(group1, "Group")}

      <Typography className="my-3">
        They seem to grope and tease your body, clearly just inspecting you
        while playing pretend.
      </Typography>

      {getNurse("What is the diagnosis?", "blonde")}

      <Typography className="my-3">
        A voice asks from behind you are you are forced onto all fours and
        someone slides a couple of fingers deep inside your hole.{" "}
      </Typography>

      {getNurse(
        "She is clearly a nympho cow! She needs 5000 orgasms stat!",
        "brunette"
      )}

      <Typography className="my-3">
        The group giggles and hands force you onto your back, exposing your
        holes. A thick double-ended dildo is being pushed right against your
        cunt seemingly without anyone even asking if it will fit.{" "}
      </Typography>

      {Img(group2, "Group")}

      <Typography className="my-3">
        Over the next long while the group of strange nurses are fucking you as
        if their lives depended on it. Each time they are using some cheesy
        excuse or medical term to start fucking you with a bunch of strapons.
      </Typography>

      {Img(group3, "Group")}

      <Typography className="my-3">
        Each of the girls seems to be getting off to the fact that they are
        'inspecting' you and 'diagnosing' you, making you choke on their
        instruments after asking you to open wide.
      </Typography>

      {Img(group4, "Group")}

      <Typography className="my-3">
        They are all moaning and panting by the time the real nurses return. It
        seems like you still need to go through the orgasm torture.
      </Typography>

      <Button
        text="Back into the milkingmachine"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default SecondCheckUpExamination;

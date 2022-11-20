import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { getMom } from "../../functions/getCharacter";
import { Vid } from "../../elements/Video";
import group1 from "../../resources/img/group/19.gif";
import tits1 from "../../resources/img/tits/15.webp";
import { Img } from "../../elements/Image";
import { getNickName } from "../../functions/getNickName";
import Button from "../../elements/Button";
function MomSecondClassFollowup(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);
  const { variables } = props;

  return (
    <Container>
      <Typography className="my-3">
        While people stream inside they are more than happy to see you again.
        Almost every girl that enters seems to lean in and kiss you deeply,
        their tongues exploring your mouth while they make out with you.
      </Typography>

      {Vid("vids/24.mp4", "video/mp4")}

      <Typography className="my-3">
        Others eagerly touch your body, feeling its curves and tenderly giving
        you a pinch or two as they seem to be enthralled by your perfect form.
        Their digits trail over your frame and find every spot that makes you
        whimper. You are already a mess of need and pleasure and you can't help
        but feel that just the greeting is putting you on edge.
      </Typography>

      {Img(tits1, "Tits")}

      <Typography className="my-3">
        As your mom's tongue teases your wet folds you can't help but feel like
        the class has turned into an impromptu orgy. And for a glorious moment
        you simply just give in to the pleasure and let everything wash over
        you.
      </Typography>

      {Img(group1, "Group")}

      <Typography className="my-3">
        You honestly lose count of the number of orgasms that roll through you
        and you are left in a panting mess, barely able to move. Juices soaking
        your inner thighs. Your mom seems very pleased.
      </Typography>

      {
        (getMom(
          "Well done class! My " +
            getNickName(variables.nickNames) +
            " seems to have enjoyed that quite a bit, so I think we can start the class properly. Today you will be making your own dildos. Whoever makes my little girl cum the most gets an automatic A+ for my class."
        ),
        "nude")
      }
      <Button
        text="Begin class"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default MomSecondClassFollowup;

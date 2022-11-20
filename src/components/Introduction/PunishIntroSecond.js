import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { getWetvalley, getRandStu } from "../../functions/getCharacter";
import strap1 from "../../resources/img/strap/2.jpg";
import strap2 from "../../resources/img/strap/1.webp";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

function PunishIntroSecond(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Someone is clearly raising their hand but with them behind you, it is
        impossible to tell who is speaking.
      </Typography>

      {getWetvalley("Miss Lustgaard, please. What would you choose.", null)}

      <Typography className="my-3">
        Miss Wetvalley says pointing at the student.{" "}
      </Typography>

      {getRandStu(
        variables.firstName +
          "... I mean the horny slut seems to be begging for something to fill her. I would suggest 11 inches. It is probably bigger than any male partners she has ever had, making sure that she understands that lesbian partners are better, but not too big to completely ruin her for some nice fingering later.",
        null
      )}

      <Typography className="my-3">
        The student speaks as if you aren't even there, as if you are just a
        slab of meat. A needy hole that is desperate to be filled. At this
        point, she might be right.
      </Typography>

      <Typography className="my-3">
        Miss Wetvalley nods slowly clearly thinking things over.{" "}
      </Typography>

      {getWetvalley(
        "That is a great idea. Though it also depends on what kind of state she is in. If you would want to emphasise the fact that she is a bitch, a knotted strapon might prove superior. Whatever the case, we will be using normal ones. I had planned on using an 8-inch strapon, but I think that Miss Lustgaard has a point, I will be switching to an 11-inch.",
        null
      )}

      {Img(strap1, "Strapon")}

      <Typography className="my-3">
        Miss Wetvalley pulls a strapon out and informs the rest of the class to
        do the same. before you know it you are surrounded by fake cocks. They
        are rubbing all over you and teasing you. Before long they are pumping
        you with wild abandon. The entire class gets to use you. The teacher is
        correcting proper behaviour in the students from time to time, while
        clearly savouring the show.
      </Typography>

      {Img(strap2, "Strapon")}

      <Typography className="my-3">
        When you are finally left as a used pair of holes she moves behind you
        and undoes the restraints.{" "}
      </Typography>

      {getWetvalley(
        "Mmmh, such a good girl you are. So willing to obey. You will be my toy from now on. Come by my chambers whenever you have time.",
        null
      )}

      <Typography className="my-3">She says with a grin.</Typography>

      <br />
      <Button
        text="You leave the class used and abused and head to your dorm"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default PunishIntroSecond;

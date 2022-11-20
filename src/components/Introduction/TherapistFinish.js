import { Typography } from "@mui/material";
import mast1 from "../../resources/img/masturbation/1.webp";
import mast2 from "../../resources/img/masturbation/2.gif";
import tits1 from "../../resources/img/tits/1.gif";
import hypno13 from "../../resources/img/hypno/13.gif";
import Box from "@mui/material/Box";
import { getTher } from "../../functions/getCharacter";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

const TherapistIntroFinish = (props) => {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Box>
      <Typography>
        With a snap, you felt wide awake. It was a silly notion that you didn't
        like girls. You are a lesbian after all. That was as sure as two plus
        two equalled four. It was one of those inescapable logical facts like
        things would fall down if dropped. All logic would tell you that you are
        lesbian through and through. You apologize to Lena for wasting her time,
        but she doesn't seem to mind. In fact, you notice that she is sporting a
        vibrator. You don't remember her having that when you walked in.
      </Typography>

      {Img(mast1, "Masturbation")}

      <Typography>
        And by the state of her clothing, she must have been enjoying herself
        quite a bit.
      </Typography>

      {Img(mast2, "Masturbation")}

      <Typography>
        You pause as you stare at her big round tits. They look so massive, so
        perfect. You really wanna worship them.
      </Typography>

      {Img(tits1, "Tits")}

      <Typography>
        They look absolutely perfect and you can feel yourself trembling as you
        slowly start to touch them. Mommy Lena doesn't say anything, simply
        petting your head and nibbling on your ear. Her eyes locked with yours,
        and a flash of memories of what you have been through fills your mind.
      </Typography>

      {Img(hypno13, "Hypno")}

      <Typography>
        In the next second, you are on your knees, face buried in her damp cunt.
        You didn't even tell your body to move, it simply followed its
        instincts. Your tongue is teasing her clit and you can feel her big soft
        labia on either side of your mouth.{" "}
      </Typography>

      {getTher("Good girl, Mommy is very proud of you.", null)}

      <Typography>
        Mommy Lena says, rubbing her drenched slit all over your face. It
        doesn't take long before she is gushing hard all over your features. As
        she calms down from the orgasm she gives your head a couple of pads
        before dismissing you.
      </Typography>

      <Typography>
        You smile. Girls should get excited about other girls. You are both
        lesbians after all. You give her a hug and a kiss on the cheek before
        heading out the door.
      </Typography>

      <br />
      <Button
        text="Head to your dorm"
        fun={() => {
          props.next();
        }}
      />
    </Box>
  );
};
export default TherapistIntroFinish;

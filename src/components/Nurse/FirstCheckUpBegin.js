import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import nurse from "../../resources/img/cosplay/3.jpg";
import group from "../../resources/img/group/11.webp";
import mast1 from "../../resources/img/masturbation/26.gif";
import mast2 from "../../resources/img/masturbation/27.webp";
import { getNurse } from "../../functions/getCharacter";
import Button from "../../elements/Button";

function FirstCheckUpBegin(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You slowly realize that you have to go to classes and you sigh. That
        definitely isn't going to happen in your state, your legs are clearly
        trembling from how intense your night was. You decide that getting out
        of the way of your classmates might be a good idea as well. Spending the
        day at the nurse's office with a 'cough' might just be what you can
        overcome.
      </Typography>

      <Typography className="my-3">
        The first few meters down the halls is at a crawl, but after that, you
        manage to stagger and as the last few toys, from the night before, drop
        from your body. Though you finally make it down to the nurse's office.
        Walking inside you see two women looking at you with hungry eyes and
        something tells you that this place might just be like the rest of the
        school, you probably shouldn't have expected anything else. They are
        barely dressed, showing more ass and tits than some strippers.
      </Typography>

      {Img(nurse, "Nurses")}

      {getNurse("Aww, are you feeling unwell, honey?")}

      <Typography className="my-3">
        One of them asks walking up to you and pulling you further into the
        office. What you had expected to be a simple examination room turns out
        to be a small desk with a long corridor behind it. Multiple examination
        rooms seem to be located on each side of the hall, and the other nurse
        locks the door behind you. You start to feel uneasy but explain that you
        probably can't attend classes today thanks to a rather persistent cough
        while trying to cough as much as possible to show how super serious it
        is. You are betting on the fact that the two nurses that look a lot like
        bimbos don't actually have any idea of what a real cough would sound
        like. Apparently, your gamble isn't working as they are leading you into
        a hall where multiple girls have been tied to beds, their holes easily
        accessible.
      </Typography>

      {Img(group, "Group")}

      <Typography className="my-3">
        One of the nurses is standing behind you. Her soft curvy body pressed
        against yours. You can feel her heavy tits against your back and her
        soft delicate hands on your hips.{" "}
      </Typography>

      {getNurse(
        "All these sluts are naughty girls. They have tried to skip school way too many times."
      )}

      <Typography className="my-3">
        She whispers softly while the other nurse casually walks over and puts
        her lips to one of the girls' cunt, making the poor exposed woman moan
        loudly in absolute ecstasy.
      </Typography>

      {Img(mast1, "Masturbation")}

      <Typography className="my-3">
        The nurse behind you giggles softly.
      </Typography>

      {getNurse(
        "We got this handy tool that lets us scan anyone to see if they are okay. And if you try to get out of classes three times and nothing is wrong we will tie you up just like this and any time a student earns a reward they can simply come down here and use you or take you back to their room."
      )}

      <Typography className="my-3">
        She explains while the other nurse continues to eat out the defenceless
        slut.
      </Typography>

      <Typography className="my-3">
        It is less than two minutes later and you are bound, gagged and
        blindfolded. The nurses tying you up spread eagle, while they
        periodically push a vibrator against your cunt. They have tried to
        explain that the vibrator is really a complex device scanning your body
        from your core. However, it is definitely also intended to drive you
        absolutely insane as even after cumming they continue to push it against
        you and doesn't release you from your bonds.
      </Typography>

      {Img(mast2, "Masturbation")}

      <Button
        text="Time for punishment"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default FirstCheckUpBegin;

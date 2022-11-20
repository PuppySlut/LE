import { Typography } from "@mui/material";
import therapist2 from "../../resources/img/therapist2.jpg";
import hypno6 from "../../resources/img/hypno/6.gif";
import hypno7 from "../../resources/img/hypno/7.gif";
import hypno8 from "../../resources/img/hypno/8.gif";
import hypno9 from "../../resources/img/hypno/9.gif";
import hypno10 from "../../resources/img/hypno/10.gif";
import hypno11 from "../../resources/img/hypno/11.gif";
import hypno12 from "../../resources/img/hypno/12.gif";
import Box from "@mui/material/Box";
import { getTher } from "../../functions/getCharacter";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

const TherapistIntroNext = (props) => {
  const { variables } = props;
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Box>
      <Typography>
        {" "}
        Lena decided that things should probably get a bit more intense. This
        was after all {variables.mom + " " + variables.lastName}'s daughter. You
        should be a proper dyke.{" "}
      </Typography>

      {getTher(
        "Lesbians love girls. You are a lesbian. You love girls. Girls are feminine. You love anything feminine. Tits are very feminine. You love tits.",
        null
      )}

      <Typography>
        She explained slowly making sure that the logic would be as sound as
        ever.
      </Typography>

      {getTher(
        "Something big is always powerful. Something big is always better. A big scoop of ice cream is always better than a small scoop of ice cream. A big pizza is always better than a small pizza. A big lion is always superior to a small mouse. Bigger is always better. You love tits. Bigger is always better. You love big tits.",
        null
      )}

      <Typography>
        Lena said softly, her voice little more than a whisper in your ear.
      </Typography>

      {getTher(
        "Big means power. Big tits mean more power. The bigger the tits the harder someone is to disobey.",
        null
      )}

      <Typography>
        Lena instructed while slowly putting away the pendulum and instead
        undoing her top, revealing her own heavy mounds.
      </Typography>

      {Img(therapist2, "Therapist")}

      <Typography>
        Lena smiled and positioned herself in front of your blank eyes. Her big
        tits taking over from the pendulum.
      </Typography>

      {Img(hypno6, "Hypno")}

      <Typography>
        Lena used her hypnotic mounds to continue the indoctrination.
      </Typography>

      {getTher(
        "My tits are so big... That is why you can't help but obey me. You feel it, don't you? This pit in your stomach. The intense need to do whatever I tell you. This submissive need.",
        "titsOut"
      )}

      <Typography>
        She explained swaying her mounds from side to side.
      </Typography>

      {Img(hypno7, "Hypno")}

      <Typography>The therapist smiled. </Typography>

      {getTher(
        "This submissive need is always triggered when you see a massive pair of tits. This state of obedience is triggered whenever you see heavy mounds. Tits are your trigger. Repeat.",
        "titsOut"
      )}

      <Typography>Lena smiled as you repeated the phrase.</Typography>

      {Img(hypno8, "Hypno")}

      {getTher(
        "Naked tits make you obey. My tits are the best. They are so big and round. You can't help but call me Mommy. My breasts are maternal and superior in every way.",
        "titsOut"
      )}

      <Typography>The perverted therapist continued.</Typography>

      {Img(hypno9, "Hypno")}

      <Typography>
        Lena continued her assault on your mind over the next hour. Installing
        triggers into you and making sure that you wouldn't be able to disobey
        tits.
      </Typography>

      {Img(hypno10, "Hypno")}

      <Typography>
        Her absolutely amazing funbags are the centre of every little suggestion
        that she made. In your vulnerable state, there was nothing that you
        could do to fight it.
      </Typography>

      {Img(hypno11, "Hypno")}

      <Typography>
        All with the same guiding principle. The same unifying goal. To install
        a need in you. To make you crave one thing.
      </Typography>

      {Img(hypno12, "Hypno")}

      <Typography>
        Her words making you realize that you are broken and that you will need
        many more sessions with her to get fixed
      </Typography>

      <br />
      <Button
        text="You Wake Up"
        fun={() => {
          props.next();
        }}
      />
    </Box>
  );
};
export default TherapistIntroNext;

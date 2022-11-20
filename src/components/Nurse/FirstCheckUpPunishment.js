import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import mach1 from "../../resources/img/machine/1.webp";
import mach2 from "../../resources/img/machine/2.gif";
import mach3 from "../../resources/img/machine/3.gif";
import { getNurse } from "../../functions/getCharacter";
import Button from "../../elements/Button";

function FirstCheckUpPunishment(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        As the device gives a small ping you hear the nurses giggle.
      </Typography>

      {getNurse(
        "Such a bad girl. Trying to sneak out of classes. Well, we don't wanna discourage you from coming back so we will be sure to give you a very pleasurable experience."
      )}

      <Typography className="my-3">
        She says and you can feel the hospital bed that you are strapped into
        start to move.
      </Typography>

      <Typography className="my-3">
        It doesn't take long before you feel yourself get pulled up and bent
        over. The blindfold is removed and you find yourself in a brightly lit
        room. You appear to be strapped to a reversed gynaecology chair. The
        nurses smile at you. Each of them grabs a suction cup and attaches it to
        your nipples. The cups instantly start to milk you.
      </Typography>

      {getNurse("There we go. Time for some training.")}

      <Typography className="my-3">The nurse smirks.</Typography>

      {Img(mach1, "Machine")}

      <Typography className="my-3">
        You feel a vibrator against your cunt. It is buzzing away while
        something thick slides into your ass. The nurses giggle.
      </Typography>

      {getNurse(
        "Such a good cow! you are meant to cum over and over again. You aren't meant to think. You just need pleasure. You just need bliss. You don't need thoughts. You are a hucow, and you are gonna make lots of delicious milk for everyone."
      )}

      <Typography className="my-3">One of them says taking you in.</Typography>

      {Img(mach2, "Machine")}

      <Typography className="my-3">
        The mechanical arms that are fucking you only seem to pick up as you are
        brought to your first orgasm. As you gush you see a counter on the wall
        that you are facing tick up. It now says 1. The nurses giggle.
      </Typography>

      {getNurse(
        "For the next two hours, you will be cumming as much as possible. This will be the baseline. Whenever you try and skip classes you will get trained by us. Once your training is done you should be able to cum non-stop for all two hours... not only that but just seeing us should make you squirt."
      )}

      <Typography className="my-3">
        One of the says before leaving you to your quivering fate.
      </Typography>

      {Img(mach3, "Machine")}

      <Typography className="my-3">
        The counter is flashing 23 when you are finally done. You have even
        started to drip with milk. You quiver slightly doing your best to try
        and focus.
      </Typography>

      <Button
        text="You get the feeling that it is later than you expect and head to your room"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default FirstCheckUpPunishment;
//<<set $sick to 1>>

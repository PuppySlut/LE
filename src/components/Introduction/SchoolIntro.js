import { Typography } from "@mui/material";
import group1 from "../../resources/img/group/1.jpg";
import mast1 from "../../resources/img/masturbation/8.webp";
import lifeguard from "../../resources/img/lifeguard.webp";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

function SchoolIntro(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Having just been molested by your friends you decide to take a quick
        walk around the premises, and before long you find the pool area.
      </Typography>

      <Typography className="my-3">
        You see a lot of girls having fun around the grounds. They all seem to
        be desperately trying to fulfil some intense need at all times.
      </Typography>

      {Img(group1, "Group")}

      <Typography className="my-3">
        You manage to break out of your daydreaming and make your way to the
        swimming pool. There seem to be quite a lot of girls around the pool
        area. You spot a blond rubbing her slit while pretending to look at her
        phone in the hot tub area. She isn't really hiding it that well.
      </Typography>

      {Img(mast1, "Masturbation")}

      <Typography className="my-3">
        The lifeguard seems to be quite bored. The water is barely deep enough
        to drown in, but she is probably still obliged to be here. It might be a
        good way to earn some brownie points with the staff if you helped her
        out.
      </Typography>

      {Img(lifeguard, "Lifeguard")}

      <br />
      <Button
        text="Go see the blonde"
        fun={() => {
          props.blonde();
        }}
      />

      <br />
      <Button
        text="Go see the lifeguard"
        fun={() => {
          props.lifeguard();
        }}
      />
    </Container>
  );
}

export default SchoolIntro;

import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getAbby } from "../../functions/getCharacter";
import waking1 from "../../resources/img/cute/waking.webp";
import waking2 from "../../resources/img/cute/waking2.webp";
import Button from "../../elements/Button";
import { Vid } from "../../elements/Video";

function AbbyChillYes(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Button
        text="Say that it isn't for you."
        fun={() => {
          props.no();
        }}
      />
    </Container>
  );
}
export default AbbyChillYes;

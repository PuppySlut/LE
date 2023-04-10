import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getAbby } from "../../functions/getCharacter";
import toy1 from "../../resources/img/toy/4.webp";
import toy2 from "../../resources/img/toy/8.webp";
import Button from "../../elements/Button";
import { Vid } from "../../elements/Video";

function AbbyChill(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3"></Typography>
      {Vid("vids/genie.mp4", "video/mp4")}
      <Button
        text="Sure why not"
        fun={() => {
          props.next();
        }}
      />
      <Button
        text="You finish up for the day."
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default AbbyChill;

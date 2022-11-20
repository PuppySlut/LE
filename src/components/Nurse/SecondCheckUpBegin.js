import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import Button from "../../elements/Button";
import { Vid } from "../../elements/Video";

function SecondCheckUpBegin(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You hate to admit it, but ever since the milking by those nurses you
        have found your body begging for more. The milk you have been producing
        has been a constant part of any masturbation that you perform.
      </Typography>

      {Vid("vids/11.mp4", "video/mp4")}

      <Typography className="my-3">
        Maybe pretending to be sick again will help you with this depraved lust.
      </Typography>

      <Button
        text="Pretend to be sick again"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default SecondCheckUpBegin;

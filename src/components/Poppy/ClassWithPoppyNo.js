import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import Button from "../../elements/Button";

function ClassWithPoppyNo(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You shake your head, and Poppy seems a little disappointed but you go in
        opposite directions as you head back to your room.
      </Typography>
      <Button
        text="Back to your room"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default ClassWithPoppyNo;

import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import Button from "../../elements/Button";

function ClassWithPoppyYes(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Container>
        <Typography className="my-3">
          Explaining that you will be happy to help Poppy smiles and hand you a
          small keycard. Apparently it is for some kind of ongoing experiment
          that she wanna take part in. You agree to meet there next time.
        </Typography>
        <Button
          text="Back to your room"
          fun={() => {
            props.next();
          }}
        />
      </Container>
    </Container>
  );
}
export default ClassWithPoppyYes;

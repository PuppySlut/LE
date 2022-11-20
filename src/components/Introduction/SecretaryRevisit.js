import { Typography } from "@mui/material";
import mast5 from "../../resources/img/masturbation/5.webp";
import tits2 from "../../resources/img/tits/2.gif";
import { Container } from "react-bootstrap";
import { getSec } from "../../functions/getCharacter";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

const SecretaryRevisit = (props) => {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography>
        {" "}
        You find your way back to the secretary. The blond woman, Florina, seems
        to be rather busy. One hand is clearly between her legs, teasing her
        cunt for anyone to see.
      </Typography>

      {Img(mast5, "Masturbation")}

      <Typography>
        While her other hand is molesting her heavy tits, which are barely
        contained by her outfit. The heavy flesh spills out between her fingers
        as she gropes her mounds.
      </Typography>

      {Img(tits2, "Tits")}

      <Typography>
        As she spots you but doesn't stop. She looks you over with a questioning
        look.
      </Typography>

      {getSec(
        "Back so soon? I would have expected Tina to absolutely molest you for hours on end. I assumed that you would be crawling out of her office. Oh well, what can I do for you? Need directions for class, or do you want to take a look around the grounds?",
        null
      )}
      <div className="d-grid gap-2">
        <Button
          text="Try to explain you are not into girls"
          fun={() => {
            props.therapist();
          }}
        />

        <br />
        <Button
          text="Get Directions for Class"
          fun={() => {
            props.wetvalley();
          }}
        />

        <br />
        <Button
          text="Walk around the school"
          fun={() => {
            props.school();
          }}
        />
      </div>
    </Container>
  );
};

export default SecretaryRevisit;

import { Typography } from "@mui/material";
import secretary from "../../resources/img/secretary.webp";
import { Container } from "react-bootstrap";
import { getSec } from "../../functions/getCharacter";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

const SecretaryIntro = (props) => {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography>
        {" "}
        You find yourself standing in front of the administration building of
        S.L.U.T. It is massive and seems to take up at least one-third of the
        school grounds. Saint Lillith University of Technology is a special
        school, or so you have been told by your mother. {
          props.variables.mom
        }{" "}
        was quite insistent that you would go to the same school as her,
        something about maintaining the {props.lastName} legacy.
      </Typography>

      <Typography>
        You find your way inside and are greeted by a curvy woman sitting at the
        front desk. She is blond and has the figure of someone that should be
        doing porn. She looks you over and gives you a bright smile.
      </Typography>

      {Img(secretary, "Secretary")}

      <Typography>
        As she looks you over you can see her licking her lips ever so slightly.{" "}
      </Typography>

      {getSec(
        "You must be " + variables.firstName + " " + variables.lastName + ".",
        null
      )}

      <Typography>
        She says getting up to shake your hand. Her fingers are soft and slender
        though she isn't sporting any long nails.
      </Typography>

      {getSec(
        "I am Florina. I used to go to this school with your mother. She managed to convince the Headmistress to let you in on very short notice. The rest of the girls started a month ago, so you will be needing to catch up. Don't worry, if you are anything like your mother I am sure that you will fit right in.",
        null
      )}

      <Typography>She says almost with a purr.</Typography>

      <Typography>
        Florina gets back down behind her desk and types away at the computer.
      </Typography>

      {getSec(
        "For now, I suggest that you can go see the student counsellor about what is expected of you, she is just right down the hall.",
        null
      )}

      <Typography>
        She explained, clearly dismissing you as she had important work to do.
      </Typography>
      <br />
      <Button
        text="Go see the student counsellor"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
};

export default SecretaryIntro;

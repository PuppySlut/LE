import { Typography } from "@mui/material";
import wv from "../../resources/img/wetvalley2.jpg";
import hm from "../../resources/img/humpman.jpg";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getNickName } from "../../functions/getNickName";
import { getWetvalley } from "../../functions/getCharacter";
import Button from "../../elements/Button";
function WetvalleyMeal(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You attend classes through out the day but before going to dinner you
        remember the invitation from Miss Wetvalley.
      </Typography>
      <Typography className="my-3">
        You decide that getting a meal with your teacher might be a good way to
        score some easy points.
      </Typography>
      <Typography className="my-3">
        Walking to her room is harder than you had expected, you have to ask for
        directions multiple times and each time you stop to ask they insist on
        groping your body.
      </Typography>
      <Typography className="my-3">
        You finally find your way to the room and knocking on the door you hear
        a voice inside.
      </Typography>
      {getWetvalley("Please do come in.", "meal")}
      <Typography className="my-3">
        As you step inside you find Miss Wetvalley standing almost naked, she
        had clearly been in the process of removing her panties and as she looks
        at you she is clearly surprised that you are the one that decides to
        step through the door, then she smiles, clearly remembering what a good
        girl you are.
      </Typography>
      {Img(wv, "Wetvalley")}
      {getWetvalley(
        "Miss " +
          variables.firstName +
          ". I had not expected you. Though I am glad that you are here. No doubt looking to invite me out for dinner, isn't that so?",
        "meal"
      )}
      <Typography className="my-3">
        She asks. This clearly isn't the first time she has been asked out by a
        student.
      </Typography>
      {getWetvalley(
        "Unfortunately it is my date night tonight. Miss Humpman, your Physical Education teacher will be coming over in a couple of moments... but since you are such a good " +
          getNickName(variables.nickNames) +
          ", I might be able to give you some extra credit.",
        "meal"
      )}
      <Typography className="my-3">
        She smiles as the door opens behind you revealing a curvy woman still in
        a running bra and running pants.
      </Typography>
      {Img(hm, "Wetvalley")}

      <Button
        text="Join them"
        fun={() => {
          props.next();
        }}
      />
      <Button
        text="Refuse the offer"
        fun={() => {
          props.pass();
        }}
      />
    </Container>
  );
}

export default WetvalleyMeal;

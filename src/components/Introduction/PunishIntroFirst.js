import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import Button from "../../elements/Button";
import { getWetvalley } from "../../functions/getCharacter";
import mast1 from "../../resources/img/masturbation/7.gif";

function PunishIntroFirst(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 10);

  return (
    <Container>
      <Typography className="my-3">
        You decide that not getting punished would probably lead to your new
        classmates seeing you as above them. Since first impressions matter that
        seems like it will be a bad idea for you.
      </Typography>

      <Typography className="my-3">
        Miss Wetvalley nods as you decide on taking the punishment. She guides
        you over to her desk and makes you bend over it her desk, ass towards
        the class, which in turn hikes up your skirt ever so slightly. Not
        enough for anyone to see anything, but enough that you have to think
        about how you are standing. Miss Wetvalley walks over to your hands and
        quickly straps them to her desk. For a moment you wonder who keeps wrist
        straps on their desk, but it seems like Miss Wetvalley would be the one.
      </Typography>

      {getWetvalley(
        "Okay class, Miss " +
          variables.lastName +
          " has decided to volunteer as our test subject today. She doesn't know any of your names and as such, it would be unfair to use hers. Please refer to her as slut, whore, fucktoy or any other name you have learned during domination 101.",
        null
      )}

      <Typography className="my-3">
        Miss Wetvalley stated much to the cheer of the rest of the class.
      </Typography>

      {getWetvalley(
        "Now we need to determine how wet our partner is to pick the right strapon.",
        null
      )}

      <Typography className="my-3">
        The curvy teacher explained, pulling up your skirt and almost ripping
        off your panties. Giving your ass a smack, she started to tease your
        needy folds, even rubbing your clit ever so slightly. She made sure to
        show off your wetness to the rest of the class.
      </Typography>

      {(mast1, "Masturbation")}

      <br />
      <Button
        text="Looks like you are the class toy"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default PunishIntroFirst;

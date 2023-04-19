import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getAbby } from "../../functions/getCharacter";
import chill from "../../resources/img/cute/10.gif";
import chill1 from "../../resources/img/scissor/3.gif";
import chill2 from "../../resources/img/scissor/4.gif";
import Button from "../../elements/Button";

function AbbyChillYes(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Honestly, there might be something to all of this. Who was to say that
        these spiritual elements didn't come from a place of truth? Though the
        way that the media portrayed them had clearly warped things in some way.{" "}
      </Typography>
      <Typography className="my-3">
        You explained your stance to Abby and she nodded along, clearly sharing
        your thoughts, though it was clear that she might be a bit further into
        this thing than you were. She moved behind you and her hand found your
        slit, slowly rubbing against it while the two of you watched the movie.
      </Typography>

      {Img(chill, "Chilling")}

      {getAbby(
        "You know, I actually got a little secret. I found some mystical artefact from ages long past, able to use the spiritual energies to rewrite the very existence of the world.",
        "chill"
      )}
      <Typography className="my-3">
        You laugh a little, it is kind of hard to take her serious when she has
        her palm against your slit, slowly rubbing it and teasing it. She purrs,
        clearly not taking you for a fool, but still wanting to make her point.{" "}
      </Typography>

      {getAbby(
        "It is true. I am the reason for this school, you need to be careful about what you use those kinds of things for, but honestly, it can be super fun. How about I show you sometime?",
        "chill"
      )}

      <Typography className="my-3">
        You agree though you have your doubts, but if she can prove it she
        should at least get the chance. The two of you hug deeply while the
        movie end and the next begin. This one is even worse than the first.
      </Typography>

      {Img(chill2, "Chilling")}

      <Typography className="my-3">
        It doesn't take that long before the two of you are moaning loud enough
        to block out the sound of the movie, but they are honestly really bad.
        Even so, it is a nice and relaxing way to spend your day.
      </Typography>

      {Img(chill1, "Chilling")}
      <Button
        text="Crawl to bed"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default AbbyChillYes;

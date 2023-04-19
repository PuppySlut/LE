import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getAbby } from "../../functions/getCharacter";
import chill1 from "../../resources/img/scissor/3.gif";
import chill2 from "../../resources/img/scissor/4.gif";
import Button from "../../elements/Button";

function AbbyChillNo(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You explain that it isn't something for you, but you definitely believe
        in her and that you will support her as much as you can. Abby seems a
        little disappointed but smiles back at you.
      </Typography>
      {getAbby(
        "Aww, you are so sweet. Thank you for your support. We can still be friends, and I am still going to realign your chakras whenever I get the chance. The benefits of your mind going blank during orgasm is like meditating for an entire day.",
        "chill"
      )}
      <Typography className="my-3">
        You had your doubts but you weren't going to try and argue the point.
        The two of you hugged deeply and while the bad movies were streaming on
        the TV, you started to get comfortable.
      </Typography>
      {Img(chill1, "Chilling")}
      <Typography className="my-3">
        It didn't take that long before the two of you were moaning loud enough
        to block out the sound of the movie, but they were honestly really bad.
        Even so, it felt like a nice and relaxing way to spend your day.
      </Typography>
      {Img(chill2, "Chilling")}
      <Button
        text="Crawl to bed"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default AbbyChillNo;

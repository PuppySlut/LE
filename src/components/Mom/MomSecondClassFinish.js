import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import art1 from "../../resources/img/art/9.webp";
import art2 from "../../resources/img/art/12.jpg";
import art3 from "../../resources/img/art/11.jpg";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

function MomSecondClassFinish(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        It doesn't take long before the class has found clay and it honestly
        doesn't take long before the process of sculpting clay has turned into a
        rather heated exchange, which isn't just due to the oven that some of
        the are using. The whole 'Woops I accidentally got you dirty'-routine is
        honestly a little outdated, but they seem to enjoy themselves.
      </Typography>

      {Img(art1, "Art class")}

      <Typography className="my-3">
        Even so, you are far too exhausted to even pretend to participate and it
        slowly dawns on you that this might not be a one-time deal, as creating
        ceramic dildos will probably take quite a bit of time. Some even seem to
        just be starting, and honestly not making that much progress, thanks to
        external factors.
      </Typography>

      {Img(art2, "Art class")}

      <Typography className="my-3">
        Others, on the other hand, constantly move up to you and measure various
        elements of your body. Some grope you, seeing when you moan when they
        plunge a pair of fingers inside of you, or just in general teasing you
        before giggling and going back to work. You do hear a couple of figures
        explode in the furnace, but through a slow and steady process, people
        are slowly making some rather intense-looking products.
      </Typography>

      {Img(art3, "Art class")}

      <Typography className="my-3">
        You get the feeling that the next class will be used to test just who
        gets an A+ in the class.
      </Typography>

      <Button
        text="Return to your room"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default MomSecondClassFinish;

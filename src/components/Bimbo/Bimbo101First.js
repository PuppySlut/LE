import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import cute1 from "../../resources/img/cute/3.jpg";
import cute2 from "../../resources/img/cute/4.webp";
import cute3 from "../../resources/img/cute/5.gif";
import { Img } from "../../elements/Image";
import twins from "../../resources/img/twins.jpg";
import Button from "../../elements/Button";

function Bimbo101Second(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Waking up you find yourself completely naked. You are pretty sure that
        you must have passed out from the orgasms, instead of really falling
        asleep, but for some reason, it is some of the best rest you have ever
        gotten in your life. Looking around for something to wear you find that
        a uniform has been provided for you. It barely contains your tits, and
        you could swear that your jugs have gotten bigger since yesterday. They
        seem to be on constant display thanks to the uniform.
      </Typography>

      {Img(cute1, "cute")}

      <Typography className="my-3">
        The skirt barely covers your ass, allowing anyone that walks behind you
        to get a good look at your ass, and the fact that you aren't wearing any
        panties. It is clear that the uniform provided has been carefully
        measured to your new proportions to make sure that you are put on
        complete display for anyone that sees you.
      </Typography>

      {Img(cute2, "cute")}

      <Typography className="my-3">
        You head out. On your way to the kitchen to get something to eat you can
        feel eyes all over your body. Taking in your curves and taking in your
        puffy cunt. All around you, people are staring at you and clearly
        craving you. On your way to the kitchen, multiple people are groping and
        teasing you. Fingering your needy little hole or groping your tits. You
        don't mind one bit, it feels great after all.
      </Typography>

      <Typography className="my-3">
        Getting into the kitchen you grab one of the special 'morning juice'
        flasks and start to chug it hungrily. It hits the spot just right and
        you feel so much better.
      </Typography>

      {Img(cute3, "cute")}

      <Typography className="my-3">
        Heading to your first class you realize that you will be spending time
        in 'Bimbo Bitch 101'. It seems rather fitting taking your outfit into
        account. Most people would probably consider you a bimbo. Walking into
        the class you find a pair of twins who will be your teacher. They look
        you over and it is clear that they have something devious in mind.
      </Typography>

      {Img(twins, "twins")}

      <Typography className="my-3">
        Making your way through the room you take a seat, ready for your first
        class.
      </Typography>

      <Button
        text="Your classmate is used for demonstration"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default Bimbo101Second;

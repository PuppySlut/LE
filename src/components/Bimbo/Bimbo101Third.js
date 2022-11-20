import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import tits1 from "../../resources/img/tits/10.gif";
import cun1 from "../../resources/img/cun/1.jpg";
import cute1 from "../../resources/img/cute/6.jpg";
import cute2 from "../../resources/img/cute/7.webp";
import { Img } from "../../elements/Image";
import { Vid } from "../../elements/Video";
import Button from "../../elements/Button";

function Bimbo101Third(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You see her get dragged up to the desk and displayed to the entire
        class. The poor girl's legs are still trembling and for some reason you
        can't help but think about your lips slowly kissing the inside of her
        thighs, your tongue licking up the juices.
      </Typography>

      {variables.hypno > 0 ? (
        <div>
          <Typography className="my-3">
            You feel silly for a moment as you remember what Mommy Lena
            explained to you. You are a lesbian bimbo and having bigger tits
            means more power. Your classmate has bigger tits than you so it is
            only natural that you would feel compelled to worship the massive
            mounds.
          </Typography>

          {Img(tits1, "Tits")}
        </div>
      ) : null}

      <Typography className="my-3">
        You manage to refocus yourself on what is happening in front of you. As
        one of the twins sits on the poor girl's face.
      </Typography>

      {Img(cun1, "Cunnilingus")}

      <Typography className="my-3">
        As the other teacher starts to explain how divine pussy is and how much
        it should be worshipped you can feel the vibrations between your legs
        pick up.
      </Typography>

      <Typography className="my-3">
        There is various information about the worship of cunts, from how to
        properly worship a hairy muff and some of the elements associated with
        it. It even has its own little slide show. You can't help but think you
        might spot your own mother's snatch among the images.
      </Typography>

      {Img(cute1, "Cute")}

      <Typography className="my-3">
        It is hard to say as you didn't really pay that much attention to your
        mother's sexy bits. However, it is also hard to pay attention to the
        slides as the muffled moans of the other student keep filling your ears,
        and the not so muffled moans of the other teacher soon follow. Another
        student manages to gush hard during the explanation and she is quickly
        dragged up to the desk to show off her own slit.
      </Typography>

      {Img(cute2, "Cute")}

      <Typography className="my-3">
        You watch as the teachers spank her ass while pushing a vibrator against
        her cunt, making her into an absolute mess. You can't help but feel
        yourself get lost in the pleasure and the orgasm is building deep inside
        of you.
      </Typography>

      {Vid("./vids/5.mp4", "video/mp4")}

      <Button
        text="There is no way of stopping it"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default Bimbo101Third;

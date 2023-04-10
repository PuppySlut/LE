import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import shower1 from "../../resources/img/shower/1.webp";
import shower2 from "../../resources/img/shower/2.webp";
import shower3 from "../../resources/img/shower/3.webp";
import shower4 from "../../resources/img/shower/4.gif";
import shower5 from "../../resources/img/shower/5.gif";
import shower6 from "../../resources/img/shower/6.gif";
import { Vid } from "../../elements/Video";
import Button from "../../elements/Button";

function Football(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Peeking into the showers you can see that the 'teambuilding exercises'
        have already begun. It starts out slow, a couple of girls sneaking off
        together, only for the sound of moans to flow from the small bathroom.
        You catch a glimpse of them burning off some of the stress, barely even
        out of their clothes.
      </Typography>

      {Vid("vids/shower.mp4", "video/mp4")}

      <Typography className="my-3">
        Before you even register it a couple is eagerly kissing right next to
        you, clearly getting into the passion of it. You recognize them as the
        girl who performed that incredibly vicious tackle and the victim. It
        seems like this might be a way to work out any conflict. While lewd, you
        start to get an appreciation for what is going on around you.
      </Typography>

      {Vid("vids/shower2.mp4", "video/mp4")}

      <Typography className="my-3">
        Before you can comment on anything the sound of wet rubbing can be heard
        from the showers, and you get the feeling that the party is about to
        start. A quick peak inside reveals that the girls are already slowly
        starting, having some fun and bringing each other to a couple of loud
        orgasms, as if it was the most normal thing in the world.
      </Typography>

      {Vid("vids/shower3.mp4", "video/mp4")}
      <Typography className="my-3">
        It doesn't take long before you are stripped by Rose. She doesn't say
        anything, but the way her hand pushes against your stomach leaves no
        doubt about who is in charge. Without a word she sends you into the
        showers, smacking your ass as you leave. Within seconds the warm water
        is hitting your body, and you can feel yourself relax, as you simply
        look down and see how far you have come.
      </Typography>
      {Vid("vids/wet.mp4", "video/mp4")}
      <Typography className="my-3"></Typography>
      {Img(shower1, "Shower")}
      {Img(shower2, "Shower")}
      {Img(shower3, "Shower")}
      {Img(shower4, "Shower")}
      {Img(shower5, "Shower")}
      {Img(shower6, "Shower")}

      <Button
        text="You are introduced to the football team."
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default Football;

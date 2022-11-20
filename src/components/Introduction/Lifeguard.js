import { Typography } from "@mui/material";
import cosplay1 from "../../resources/img/cosplay/1.jpg";
import cosplay2 from "../../resources/img/cosplay/2.jpg";
import { Container } from "react-bootstrap";
import { getLife } from "../../functions/getCharacter";
import * as React from "react";
import { Vid } from "../../elements/Video";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

function Lifeguard(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        Wandering over to the lifeguard you pause as she spots you. You hadn't
        noticed all the cameras that she had been modelling for, and it suddenly
        makes a lot more sense that there wouldn't be a lifeguard around the
        pool.
      </Typography>

      {getLife(
        "Hey there! Think you can help me out? I need a model to do some shoots for some cute cosplays! Please! Put this on!",
        null
      )}

      <Typography className="my-3">
        She shoves a rather small outfit into your hands and you can't really
        bring yourself to refuse her. As such, you are soon dressed in a skimpy
        bikini.
      </Typography>

      {Vid("vids/1.mp4", "video/mp4")}

      {getLife("That is great. Now we just need a couple of pics.", null)}

      <Typography className="my-3">
        The lifeguard says with a wide grin. She pushes you down on your back
        and you feel her straddle your stomach. A bright flash from one of the
        cameras seems to indicate that she has gotten the picture that she
        wanted. She kisses you deeply, her tongue filling your mouth, and you
        can't help but feel that this isn't how you are supposed to perform
        mouth-to-mouth. Her fingers gripping your tits, and molesting them as
        another flash indicates a picture has been taken.{" "}
      </Typography>

      <Typography className="my-3">
        You really have no idea how many pictures are taken of the two of you.
        There is one with her trying to save you from the pool, but your tits
        are falling out and she goes from concern to eagerly suck on your hard
        nipples.
      </Typography>

      {Img(cosplay1, "Cosplay")}

      <Typography className="my-3">
        The whole setup even ends up rather explicitly sexual as you are bent
        over the edge of the pool and stuffed with a dildo. You can feel her
        hands on your lower back, guiding you and teasing you, as your tight
        snatch is clenching around the dildo.
      </Typography>

      {Img(cosplay2, "Cosplay")}

      <Typography className="my-3">
        When you are finally done the lifeguard inspects you with a smirk.
      </Typography>

      {getLife(
        "You did really well! Thanks a ton! How about you join the cosplay club? I am sure you will fit right in!",
        null
      )}

      <Typography className="my-3">
        You can't help but think it over. It seems like it might be fun!
      </Typography>

      <br />
      <Button
        text="For now you pack your stuff and head to your room"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
//<<set $cosplay to $cosplay + 1>>

export default Lifeguard;

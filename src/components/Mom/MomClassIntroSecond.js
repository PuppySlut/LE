import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import art1 from "../../resources/img/art/08.jpg";
import cute1 from "../../resources/img/cute/9.webp";
import mast1 from "../../resources/img/masturbation/39.gif";
import mast2 from "../../resources/img/masturbation/40.gif";
import { Img } from "../../elements/Image";
import { getMom } from "../../functions/getCharacter";
import { Vid } from "../../elements/Video";
import Button from "../../elements/Button";

function MomClassIntroSecond(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        With your little argument settled it doesn't take long before you find
        yourself in class. Your mom is standing right behind you, stroking your
        hair and slowly humming to herself. She seems to be in a great mood, to
        be honest, and you can't really blame her at this point.{" "}
      </Typography>

      <Typography className="my-3">
        Soon everyone seems to have found their way behind their canvas and your
        mom introduces you to the rest of the class.
      </Typography>

      {getMom(
        "Alright girls. I know that you were probably looking forward to painting Bailey today, but she won't be able to move for at least another couple of hours. Instead, my  daughter will be modelling for us.",
        "teacher"
      )}

      <Typography className="my-3">
        Her proclamation is met with a lot of cheers and howls.{" "}
      </Typography>

      {Img(art1)}

      {variables.bimbo > 0 ? (
        <div>
          {getMom(
            "As you can see she is definitely my little girl. I mean, just look at her curves, she has definitely gotten those from me.",
            "teacher"
          )}

          <Typography className="my-3">
            Your mom says with a smirk on her face, and you feel eyes roam all
            over your body.
          </Typography>

          {Vid("vids/15.mp4", "video/mp4")}

          {getMom("Yup, she is definitely my little bimbo.", "teacher")}

          <Typography className="my-3">Your mother adds proudly.</Typography>
        </div>
      ) : (
        <div>
          {getMom(
            "She is my little princess and such a good girl. I am sure that we will be having a lot of fun today.",
            "teacher"
          )}

          <Typography className="my-3">
            She says and you feel eyes all over your body, exploring it. With a
            smile, you jiggle around a little to make sure that they get a good
            look at you.
          </Typography>

          {Img(cute1, "Cute")}

          {getMom("Such a cutie!", "teacher")}

          <Typography className="my-3">
            Your mom adds, before turning her attention back to the class.
          </Typography>
        </div>
      )}

      {getMom(
        "Now then! We will be doing oily painting today, and we should think about what position our model should be in. I think that we will be going with the classic masturbation pose.",
        "teacher"
      )}

      <Typography className="my-3">
        Your mom explains and you are about to complain that you might not be
        all that comfortable masturbating in front of a crowd of people, but
        your mom simply smiles and adds.{" "}
      </Typography>

      {getMom(
        variables.firstName + ", did you know that 'Good Girls Masturbate'?",
        "teacher"
      )}

      <Typography className="my-3">
        You feel something inside of you click and you find yourself unable to
        stop the motion as your hands move down between your legs.
      </Typography>

      {Img(mast1, "Masturbation")}

      <Typography className="my-3">
        Your mother is clearly very pleased as you find yourself on a small cot
        that can be used as a podium. It is raised slightly allowing the entire
        class to see you. You are whimpering softly and you notice your mom
        biting her lip at the sound and sight of you.{" "}
      </Typography>

      {getMom(
        "What do you think girls? My little girl really is the sluttiest thing in the world. Now, I think we need her to show off her tits a bit more. So how about we make her ride a pillow for us?",
        "teacher"
      )}

      <Typography className="my-3">
        The question is rhetorical as the curvy MILF returns with a pillow
        seconds later. She looks at you with a smile.{" "}
      </Typography>

      {getMom(
        "You know the deal. You can either start humping this yourself, or I can make you...",
        "teacher"
      )}

      <Typography className="my-3">
        She is clearly revelling in the power she holds over you, and you don't
        even want to argue instead grabbing the pillow and pushing it between
        your legs.
      </Typography>

      {Img(mast2, "Masturbation")}

      <Typography className="my-3">
        It doesn't take long before your mom finds her way behind a desk and
        slowly starts to masturbate as well, simply watching you while mewling
        softly. For some reason the fact that your mom is fingering herself at
        the sight of you makes you grind even harder.
      </Typography>

      {Vid("vids/17.mp4", "video/mp4")}

      <Typography className="my-3">
        Now and again a student walks up to you and inspects you, clearly trying
        to determine how your tits move or your hands are sitting. A lot of them
        seem to be having trouble with your hands. Though one girl walks up and
        almost pushes her face between your legs. When your mother clears her
        throat the girl tries to explain that she couldn't get a good look at
        how your folds were spread on the pillow and needed a closer look.{" "}
      </Typography>

      {Vid("vids/18.mp4", "video/mp4")}

      <Typography className="my-3">
        As the class slowly comes to an end, your mom makes you cum over and
        over again. It isn't like she has stopped you so far, but it is clear
        that she wants to see just how many orgasms she can milk out of you.
      </Typography>

      {Vid("vids/16.mp4", "video/mp4")}

      <Typography className="my-3">
        Once the class ends $mom walks up to you with a smile.{" "}
      </Typography>

      {getMom(
        "Well done! I think you should become a permanent part of my class, sweetie.",
        "teacher"
      )}

      <Typography className="my-3">
        She gives you a kiss on the cheek and cuddles up to you, snuggling
        tightly before you need to head out.
      </Typography>

      <Button
        text="Go back to your room"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default MomClassIntroSecond;
//<<set $momRel to 1>><<run $petNames.push('mommy's bimbo')>>

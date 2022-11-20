import { Typography } from "@mui/material";
import therapist from "../../resources/img/therapist.jpg";
import hypno1 from "../../resources/img/hypno/1.jpg";
import hypno2 from "../../resources/img/hypno/2.jpg";
import hypno3 from "../../resources/img/hypno/3.jpg";
import hypno4 from "../../resources/img/hypno/4.gif";
import Box from "@mui/material/Box";
import { getTher, getSec } from "../../functions/getCharacter";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

const TherapistIntro = (props) => {
  const { variables } = props;
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Box>
      <Typography>
        You clear your throat, much to Florina's surprise. She looks you over
        with a questioning look. You pause for a moment, not really sure how to
        put your thoughts into words, but you finally manage to explain that you
        are not really into girls. Florina looks like she has been hit in the
        head with a shovel.
      </Typography>

      {getSec(
        "... Are you sure that you are " + variables.mom + "'s daughter?",
        null
      )}

      <Typography>
        {" "}
        She asks in disbelief. She is clearly not really sure what to do until
        she starts to smile.{" "}
      </Typography>

      {getSec(
        "Oh! I know, there must have been some mistake then. Would you mind going to talk with the school therapist? Some girls might just need someone to talk to about their sexuality.",
        null
      )}

      <Typography>
        She explains. You feel a bit reluctant, but after Florina assures you
        that you just need to have a quick session with the therapist to be able
        to get your student loan paid back, it isn't really a hard decision to
        make.
      </Typography>

      <Typography>
        You make your way to the therapist's office and opening the door you
        find a stunning woman sitting at a desk. The office itself is rather
        sparsely decorated, with a desk, a comfortable chair and the classical
        couch for you to lay down on.
      </Typography>

      {Img(therapist, "Therapist")}

      <Typography>She gives you a smile. </Typography>

      {getTher(
        "You must be " +
          variables.firstName +
          ". Florina said that you would be coming by. Don't worry I am not gonna bite. Please take a seat on the couch.",
        null
      )}

      <Typography>
        She says pointing towards the couch and you are more than happy to find
        that while she is hardly dressed she isn't desperately obsessed with
        sex.
      </Typography>

      {getTher(
        "My name is Lena. A pleasure to meet you Miss " +
          variables.lastName +
          ". Now Florina said that there had been a mix-up. Apparently, you are not interested in girls.",
        null
      )}

      <Typography>
        {" "}
        She says while taking a seat in the big soft chair next to you.
      </Typography>

      <Typography>She looks you over and smiles kindly.</Typography>

      {getTher(
        "Now, I know what you might be thinking, I am not here to talk you out of things, but I do need to know if you are at least bi-sexual. It might be something that you deeply suppress. You have a choice here. We can either go the proper route and have a meeting each day over the next five semesters to help determine if you are really interested in girls, or I can access your subconscious directly through hypnosis.",
        null
      )}

      <Typography>
        She explains. Honestly, it doesn't sound like you have much of a choice
        in this so accepting hypnosis she pulls out a small pendant.
      </Typography>

      {Img(hypno1, "Hypno")}

      <Typography>
        She slowly starts to sway it back and forth in front of you instructing
        you to not move your head, but simply follow it with your eyes. She
        explains that it is meant to be a focus for your mind.
      </Typography>

      {Img(hypno2, "Hypno")}

      {getTher("You have played pokemon before, right?", null)}

      <Typography>
        She asks and you say that you do, and are about to explain the
        difference between EV and IV and why Bidoof is the best pokemon there
        is. Lena interrupts you with a laugh.
      </Typography>

      {getTher(
        "Good! Think of this as a Pokeball for your focus. Pulling against your mind. Capturing your thoughts. One by one they are stored in my special crystal Pokeball. Getting pulled in and stored. They are safe. Safe and out of the way.",
        null
      )}

      {Img(hypno3, "Hypno")}

      <Typography>
        You feel your mind relax as all the thoughts are captured with such ease
        by the swaying pendulum. Back and forth it goes and your eyes are
        starting to get heavy.
      </Typography>

      {Img(hypno4, "Hypno")}

      <Typography>
        You can hear Lena starts to speak, but it is so hard to understand her
        when you can't even think about the words. They simply push into your
        mind. Nothing is registering but that slowly swaying ball.
      </Typography>

      {getTher("Tell me " + variables.firstName + ". Do you like girls?", null)}

      <Typography>
        Lena asks, looking down at her newest patient. A weak moan of 'no' came
        from those cute lips.
      </Typography>

      {getTher("Not even you mom?", null)}

      <Typography>
        Lena asks sweetly. There is a pause. Clearly not a no, but it is
        definitely not a yes either.
      </Typography>

      {getTher(
        "You love your mom, don't you" + variables.firstName + "?",
        null
      )}

      <Typography>
        Lena's voice is a bit sterner. A groan of agreement came from the cutie
        beneath her.
      </Typography>

      {getTher(
        "Your mother is a girl. You love your mother. Therefore, you love a girl.",
        null
      )}

      <Typography>
        The therapist slowly weaved a net of false logic around the unprotected
        mind.
      </Typography>

      {getTher("You like yourself, don't you?", null)}

      <Typography>
        Lena continued. The cutie seemed to moan a soft agreement.
      </Typography>

      {getTher(
        "You are a girl. You like yourself. You like a girl. You like more than one girl. You like girls.",
        null
      )}

      <Typography>Lena explained softly with a smile.</Typography>

      {getTher("You love girls. Lesbians love girls. You are a lesbian.", null)}

      <Typography>
        Lena slowly explained, implanting the idea that the cutie was a lesbian
        into her mind.
      </Typography>

      <br />
      <Button
        text="She continues"
        fun={() => {
          props.next();
        }}
      />
    </Box>
  );
};
//<<set $hypno to $hypno +1>>
export default TherapistIntro;

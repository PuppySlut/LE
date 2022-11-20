import { Typography } from "@mui/material";
import mast1 from "../../resources/img/masturbation/36.jpg";
import toy1 from "../../resources/img/toy/5.webp";
import toy2 from "../../resources/img/toy/6.webp";
import { getNickName } from "../../functions/getNickName";
import { Container } from "react-bootstrap";
import { Img } from "../../elements/Image";
import { getWetvalley, getHumpman } from "../../functions/getCharacter";
import Button from "../../elements/Button";
function WetvalleyMealFinish(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);
  const { variables } = props;

  return (
    <Container>
      <Typography className="my-3">
        You find yourself being rolled out of the kitchen. Your holes are on
        full display as you are brought through the canteen, every student
        seeing you stuffed with food.
      </Typography>

      {Img(mast1, "Masturbation")}

      <Typography className="my-3">
        You can hear them whisper as you are paraded around, the chef clearly
        taking a long way around, even stopping up to talk to one of the other
        teachers.
      </Typography>

      <Typography className="my-3">
        When you finally arrive at Miss Wetvalley's room you can hear grunting
        and moaning from the other side. The chef doesn't stop, instead just
        rolling you inside. You can see Miss Humpman on top of Miss Wetvalley, a
        thick double dildo between them.
      </Typography>

      {Img(toy1, "Toy")}

      <Typography className="my-3">
        The chef clears her throat and you see the curvy mocha goddess turn her
        head.
      </Typography>

      {getHumpman(
        "Oh my, what a naughty little thing you are. Did you bring me dessert?"
      )}

      <Typography className="my-3">
        She underlines her question by slamming her powerful hips deeply against
        Miss Wetvalley's ass, making them both groan.
      </Typography>

      {getHumpman(
        "Is she the new " +
          getNickName(variables.nickNames) +
          " I have been hearing so much about?"
      )}

      <Typography className="my-3">
        She asked with a smirk, pumping away a groan that can be heard from
        underneath her.
      </Typography>

      {getWetvalley(
        "That she is~! mmmh~! Right there, love! Pump my pussy right there... I am gonna-Ahhhh"
      )}

      <Typography className="my-3">
        As Miss Wetvalley cums, Miss Humpman pushes a little remote control. The
        sound of something thick pumping can be heard and as they slowly pull
        off the dildo it is clear that they have been filled with cum by the
        toy.
      </Typography>

      {Img(toy2, "Toy")}

      <Typography className="my-3">
        Looking around you can see that the chef has already left you alone, and
        your teachers slowly get up from the cum-soaked position.
      </Typography>

      {getHumpman(
        "Oh my, is she " +
          variables.mom +
          "'s girl? I could recognize that ass anywhere.",
        null
      )}

      <Typography className="my-3">
        Miss Humpman says with a smirk walking around behind you and pushing her
        lips against your cunt. You can feel her pull out the strawberry with a
        wet slurp before walking over and sharing it with Miss Wetvalley.
      </Typography>

      {getWetvalley(
        "That she is. It seems like the " +
          variables.lastName +
          " family makes for excellent sluts.",
        "meal"
      )}

      <Typography className="my-3">
        They giggle treating you as if you weren't even there. They tease and
        play with you, taking turns to lick your cunt or suck on your tits. It
        is clear that while you are delicious you are nothing more than a small
        break in their vigorous lovemaking.
      </Typography>

      <Typography className="my-3">
        They don't even acknowledge your orgasms instead talking about other
        students and what they are working on, while you gush hard. After two
        hours of licking, kissing and teasing you are finally excused. Only once
        you are untied do they seem to recognize you as a person.
      </Typography>

      {getWetvalley(
        "Thank you for your help, sweetie. You did very well. We might just invite you next time.",
        "meal"
      )}

      <Typography className="my-3">
        Miss Wetvalley says with a smirk, biting your lower lip as she draws out
        a kiss.
      </Typography>

      {getHumpman(
        "Stop teasing the poor girl, love. " +
          variables.firstName +
          " you were the best dessert we have had all year. I will see you in class.",
        null
      )}

      <Typography className="my-3">
        Miss Humpman adds before sending you out the door.
      </Typography>

      <Button
        text="You head back to your dorm"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}

export default WetvalleyMealFinish;
// <<set $wetvalley to $wetvalley +1>>

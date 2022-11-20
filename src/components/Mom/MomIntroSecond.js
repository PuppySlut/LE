import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import tits1 from "../../resources/img/tits/11.webp";
import mom2 from "../../resources/img/mom2.jpg";
import cosplay from "../../resources/img/cosplay/7.jpg";
import { Img } from "../../elements/Image";
import { getMom } from "../../functions/getCharacter";
import Button from "../../elements/Button";

function MomIntroSecond(props) {
  const { variables } = props;

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        {variables.mom} gives a smile as she sees that she has complete control
        over you with her big jugs out.
      </Typography>

      {getMom(
        "You are completely under Mommy's control. Go on. Start kissing Mommy's tits, cupcake. The adults will be talking for a bit and you are doing so well!",
        null
      )}

      <Typography className="my-3">
        She encourages and before you can protest you find your lips against her
        heavy mounds and you are eagerly suckling, licking, kissing, groping and
        panting like there is no tomorrow.
      </Typography>

      {Img(tits1, "Tits")}

      <Typography className="my-3">
        You can't stop yourself no matter how hard you try, the hypnotic
        compulsion the school has been indoctrinating you with making you obey
        any depraved command from those heavy mounds. You are guided to lay on
        the desk of the headmistress on your stomach. Tits hanging out over one
        end while being just being in range to continue your eager assault on
        the thick mounds while your latex-clad holes are presented to the curvy
        Mistress. She wastes no time in idly teasing your covered snatch,
        casually talking with your mother, though you can't focus on their words
        as the pleasure and tits are simply too much.
      </Typography>

      {Img(cosplay, "Cosplay")}

      <Typography className="my-3">
        It is hard to tell how long they have been talking, but finally, they
        decide to focus on you. Your mother smiles a warm and kind smile.{" "}
      </Typography>

      {getMom(
        "That took some bargaining sweetie. But it looks like my little cupcake will get sold to me once your training is done.",
        null
      )}

      <Typography className="my-3">
        She looks at you with a mischievous grin, almost daring you to protest,
        but you can't. You can't disagree with her as long as her heavy tits are
        out.
      </Typography>

      {Img(mom2, "mom")}

      {getMom(
        "Now in exchange for getting to buy you, Mommy will have to start teaching some classes, but that does mean that you can get the opportunity to spend the night in Mommy's room whenever you need to sleep. And you should be sleeping with as many people as possible. I wan't you nice and corrupted for your new life with me.",
        "lust"
      )}

      <Typography className="my-3">
        She says with a wink, before pulling you in for a deep kiss. You can
        feel her tongue explore your mouth greedily. When she finally pulls away
        you are panting for your life.{" "}
      </Typography>

      {getMom(
        "Mommy needs to go prepare for her next class. Be a good little slut and become a proper bimbo lesbian for Mommy.",
        "lust"
      )}

      <Typography className="my-3">
        She says with a wink before leaving you in the office. The Mistress
        smiles and dismiss you for the evening.
      </Typography>

      <Typography className="my-3">
        Finding your way back to your room you groan. You are ready to collapse
        and you don't even bother with the orgy around you.
      </Typography>

      <Button
        text="Head to bed"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}
export default MomIntroSecond;
//[[Sleep|morning]]<<set $momteacher to true>><<set $headmistress to 1>></set>

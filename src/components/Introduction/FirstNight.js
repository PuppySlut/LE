import { Typography } from "@mui/material";
import group1 from "../../resources/img/group/3.gif";
import group2 from "../../resources/img/group/4.gif";
import group3 from "../../resources/img/group/5.jpg";
import mary2 from "../../resources/img/mary2.webp";
import { Container } from "react-bootstrap";
import { getMary, getAbby } from "../../functions/getCharacter";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

function FirstNight(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        As you step inside your dorm room you see that the mattresses have been
        laid out to cover the floor. Your three roomies are already lost in
        scissoring each other. They seem to be completely lost to the pleasure
        of their cunts grinding together.
      </Typography>

      {Img(group1, "Group")}

      {getMary(
        "Bugger! ye girls pure ken howfur tae grind yer cunts lik' professionals. Yer gonnae mak' me explode afore oor dorm hoor even haes hud time tae git back 'ere.",
        null
      )}

      <Typography className="my-3">
        You hear Mary's voice come from the pile of quivering flesh.{" "}
      </Typography>

      {getAbby(
        "Don't worry, sweetie. We are just realigning your chakras to make you even more amazing. You will be having so much more fun. Now, the moon isn't gonna be in the right position forever, so you gotta cum your brains out now.",
        null
      )}

      <Typography className="my-3">
        Your hear Abby say, she is clearly timing the other two's orgasms to
        help them 'reawaken spiritually'.{" "}
      </Typography>

      {getMary(
        "Ah cannae spunk anymair ye dunderheided bugger! ah swear ah dinnae think mah legs wull even shift fae whit ye hae dane tae us!",
        null
      )}

      <Typography className="my-3">
        Mary bites back, and Poppy seems to whimper in agreement. Her 'Chakra'
        must have been realigned already, but she seems to be unable to stop in
        the naughty display. You get the feeling that they probably have been at
        this for hours. Just teasing each other and making each other cum.
      </Typography>

      {Img(group2, "Group")}

      <Typography className="my-3">
        They finally spot you just as Mary cum.{" "}
      </Typography>

      {getMary(
        "Och thare yer, fud. We hae bin waiting fur ye fur- bugger bugger bugger! a'm cumming! ahhh!",
        "cum"
      )}

      <Typography className="my-3">
        Her orgasm interrupted whatever she might have planned on saying, not
        that you would really have been able to understand her. You can't help
        but giggle at the sight of the petite redhead cumming her brains out.
      </Typography>

      {Img(mary2, "Mary cumming")}

      <Typography className="my-3">
        You see Abby's mischievous eyes on your body, and she licks her lips.
        Clearly taking you in.{" "}
      </Typography>

      {getAbby(
        "Oh, honey. Your womb isn't cultivating the essence of heaven and earth like it is supposed to. We are gonna have to fix that.",
        null
      )}

      <Typography className="my-3">
        {" "}
        The blonde says making Poppy mewl and Mary grin.
      </Typography>

      <Typography className="my-3">
        Before you can answer you are pulled into the orgy. Fingers, toys and
        whatever else they can find sliding deep inside you. You barely get to
        breathe between nursing and eating your roomies out. You are the centre
        of their attention, as they have clearly explored each other already.
        You don't remember how many orgasms you have had, or what time it was,
        though you remember Abby making sure that you cum 12 times when the
        clock struck midnight. You had to fake a couple of those orgasms to even
        have a chance of making it through the night. You drift off to sleep
        cuddling your dormmates and with what you assume to be a strapon in your
        cunt a bullet vibe against your clit.
      </Typography>

      {Img(group3, "Group")}

      <br />
      <Button
        text="Waking up"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}

export default FirstNight;

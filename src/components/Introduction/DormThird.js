import { Typography } from "@mui/material";
import mary from "../../resources/img/mary.webp";
import scis1 from "../../resources/img/scissor/1.gif";
import group1 from "../../resources/img/group/2.gif";
import { Container } from "react-bootstrap";
import { getMary } from "../../functions/getCharacter";
import { Img } from "../../elements/Image";
import Button from "../../elements/Button";

function DormThird(props) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      {getMary("Dinnae ye forgoat aboot me, hoor.", null)}

      <Typography className="my-3">
        The voice pulls you out of your pussy eating bliss, what the fuck did
        she just say. Looking at the last of your roommates she is beautiful and
        absolutely stunning. She looks like an angel as the afternoon light hits
        her just right.
      </Typography>

      {Img(mary, "Mary")}

      {getMary(
        "Th' name is Mary, fud. Bit ye kin ca' me mistress. Maist o' mah fowk haes na idea that a'm intae girls, sae a'm gonnae mak' sure tae git as mony orgasms fae ye as maybee aye afore this semester is ower.",
        null
      )}

      <Typography className="my-3">
        She says with a wide smile, clearly very proud of herself. You blink not
        really sure what the fuck she is on about. She is clearly annoyed at the
        fact that you are not reacting to her.{" "}
      </Typography>

      {getMary(
        "Och fur fucks sake. Juist git ower 'ere 'n' grind yer fud against mines afore ah skelp ye ower th' heid wi' that glaikit gem dil'doo.",
        null
      )}

      <Typography className="my-3">
        You are pretty sure that she wants something from you... and being an
        expert in pattern recognition you are also pretty sure that the
        something is sex. She said something about her being named Mary, but you
        should call her Mistress... Is she into femdom? That might explain a
        couple of things. You clear your throat and crawl over to her. She looks
        at you as if you are stupid before forcing you on your back, the gem
        dildo slipping out of your hole. Before you know it you are grinding
        cunts.
      </Typography>

      {Img(scis1, "Scissoring")}

      {getMary("Noo that wasn't that solid wis it, hoor?", null)}

      <Typography className="my-3">
        She says triumphantly, though you just moan, trying to be obedient while
        not understanding what the fuck she is on about.
      </Typography>

      <Typography className="my-3">
        In the end, the four of you decide to take the mattress from each bed
        and lay it in the middle of the room, covering the entire floor in the
        soft beds. You all find yourself working together to get to know each
        other.
      </Typography>

      {Img(group1, "Group")}

      <Typography className="my-3">
        It is almost evening when you finally stop. I hear your stomach growl
        and it is clear that you should go get something to eat.
      </Typography>

      <br />
      <Button
        text="Deciding that you need some space after that orgy you go alone"
        fun={() => {
          props.next();
        }}
      />
    </Container>
  );
}

export default DormThird;

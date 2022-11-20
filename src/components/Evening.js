import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import guard from "./../resources/img/guard.jpg";
import headmistress from "./../resources/img/headmistress.webp";
import key from "./../resources/img/key.webp";
import headmistress2 from "./../resources/img/headmistress2.webp";
import headmistress3 from "./../resources/img/headmistress3.webp";
import cute1 from "./../resources/img/cute/2.jpg";
import cosplay from "./../resources/img/cosplay/6.jpg";
import { Img } from "../elements/Image";
import group1 from "./../resources/img/group/6.jpg";
import group2 from "./../resources/img/group/7.webp";
import group3 from "./../resources/img/group/8.webp";
import group4 from "./../resources/img/group/9.webp";
import group5 from "./../resources/img/group/10.gif";
import mast1 from "./../resources/img/masturbation/28.webp";
import mast2 from "./../resources/img/masturbation/29.gif";
import bailey from "./../resources/img/bailey.jpg";
import strap1 from "./../resources/img/strap/3.webp";
import { getHead, getRandStu } from "../functions/getCharacter";
import { useState } from "react";
import AnalBailey from "./Bailey/AnalBailey";
import { Vid } from "../elements/Video";
import Button from "../elements/Button";

function Evening(props) {
  const { variables, nextDay, setArea } = props;
  const [analScene, setAnalScene] = useState(false);

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  if (analScene) {
    return (
      <AnalBailey
        {...props}
        next={() => {
          props.setArea("morning");
          props.setNN("Anal slut");
        }}
      />
    );
  } else if (variables.day === 5) {
    return (
      <Container>
        <Typography className="my-3">
          As you head back to your dorm you find yourself stopped by a stern
          security guard.{" "}
        </Typography>

        {Img(guard, "Guard")}

        <Typography className="my-3">
          She grabs you by the neck and without a word leads you to the
          Headmistress's office. Opening the heavy door you see an insanely
          curvy redhead.
        </Typography>

        {Img(headmistress, "Headmistress")}

        <Typography className="my-3">She gives you a smile. </Typography>

        {getHead(
          variables.firstName +
            "... So glad to see you. You are definitely the slut that I was looking for.",
          null
        )}

        <Typography className="my-3">
          She smirks having clearly heard your reputation. You can't help but
          notice the key that is hanging between her massive tits. You can't
          help but wonder what it might unlock.
        </Typography>

        {Img(key, "Key")}

        <Typography className="my-3">
          You feel a pair of hands on your hips, and you realize that you have
          been staring at the massive tits, while the headmistress has been
          moving closer to you. Your eyes are completely glued to the heavy
          mounds.{" "}
        </Typography>

        {getHead(
          "Oh, such a good little breast-obsessed cunt you are. I was going to tell you my name, but I think you can simply call me Mistress.",
          null
        )}

        <Typography className="my-3">She purrs. </Typography>

        {getHead(
          "Please, kitten. Continue to stare at my tits. It's hard not to, right? So very very hard.",
          null
        )}

        <Typography className="my-3">
          She speaks and you find yourself nodding along.
        </Typography>

        {Img(headmistress2, "Headmistress")}

        <Typography className="my-3">
          You can feel her hands exploring your body, sinking into your tits and
          molesting your ass. You can certainly feel her superior fingers slowly
          taking off your clothes, but you can't bring yourself to look away
          from her tits long enough to confirm.{" "}
        </Typography>

        {getHead(
          "That is right, just keep staring. You are just a desperate little girl, addicted to my perfect tits. Keep looking.",
          "intense"
        )}

        <Typography className="my-3">
          She assured you and you can feel how you are completely naked.
        </Typography>

        {Img(headmistress3, "Headmistress")}

        {getHead(
          "We are gonna have to dress you, Kitten. Can't have you naked with your special guest around. Please, be a good girl for Mistress and help yourself get dressed. If you do, you will get to touch my divine tits.",
          "seductive"
        )}

        <Typography className="my-3">
          She promises. It is all the compensation you could ask for and before
          you know it you are wearing a tight-fitting latex suit that clearly
          has a bullet vibrator hidden in your crotch.
        </Typography>

        {Img(cosplay, "Cosplay")}

        {getHead(
          "Perfect. All ready for the guest. Come to Mistress and you can play with her tits.",
          "seductive"
        )}

        <Typography className="my-3">
          She says and just like she had promised you get to sit on her lab and
          squeeze and molest those heavy mounds. The more you do the more
          stimulated you become, and you can swear that you are about to cum
          from just playing with someone else's breasts.
        </Typography>
        <br />
        <Button
          text="You meet the special guest"
          fun={() => {
            setArea("mom");
            nextDay();
          }}
        />
      </Container>
    );
  } else {
    const check = Math.round(Math.random() * 10);
    console.log(check);
    if (check < 2 && variables.claimed < 1) {
      return (
        <Container>
          <Typography className="my-3">
            You are heading back to your dorm ready to sneak in and get some
            sleep, however, you only get a couple of doors down the hall of
            dorms before you see a blonde woman. Her eyes light up as she spots
            you.{" "}
          </Typography>

          {getRandStu("Wait, you haven't been claimed for tonight?", "evening")}

          <Typography className="my-3">She asks in disbelief.</Typography>

          {variables.bimbo > 0 ? (
            <div>
              {getRandStu(
                "I mean, look at those tits you got! It is hard to believe that someone hasn't just pulled you into their dorm and treated you like the fucking bimbo dyke you are.",
                "evening"
              )}
              <Typography className="my-3">
                She adds with a wicked smile.
              </Typography>
            </div>
          ) : null}

          <Typography className="my-3">
            It is clear that the stranger has something planned for you as she
            gives you a look once more.
          </Typography>

          {Img(cute1, "cute")}

          <Typography className="my-3">
            She pulls you through the door she has been standing in front of and
            gives every one of the girls inside a wide smile.{" "}
          </Typography>

          {getRandStu(
            "This is " +
              variables.firstName +
              ". You know, the new slut. She is our free use girl for tonight. She can't really say no, since... she is the school pet and doesn't really have any rights. So feel free to just dogpile the needy whore. She isn't a person tonight, she is a plaything for the entire dorm, so don't go using her name.",
            "evening"
          )}

          <Typography className="my-3">
            The leader of the dorm explains while the others stare at you
            hungrily.
          </Typography>

          {Img(group1, "Group")}

          <Typography className="my-3">
            You are quickly stripped of anything that might hide your modesty,
            and the door is locked. Any protest you might have had is silenced
            as eager mouths assault your body. Slurping and licking on your most
            sensitive bits, making you moan and squeal, which only seems to
            incentivise the crowd to overwhelm you.
          </Typography>

          {Img(group2, "Group")}

          <Typography className="my-3">
            For the next hour, the girls make a game out of seeing how many
            times they can make you cum in rapid succession. The pleasure is
            clearly overwhelming and your own face is buried in snatches, tits
            and asses to the point where you would be able to recognize any of
            the girls from the dorm by their holes alone.
          </Typography>

          {Img(group3, "Group")}

          <Typography className="my-3">
            Pleasure only intensifies as the evening turns to night. It is
            unclear if you will be able to get any rest at all, but they are
            clearly not giving you the chance. Even as you pass out they are
            more than happy to assault your body with eager mouths, and fingers,
            not to mention that you have definitely felt more than one sex toy
            inside of you.
          </Typography>

          {Img(group4, "Group")}

          <Typography className="my-3">
            You finally drift off while three girls eat you out, they are
            clearly savouring the taste of your cunt, but you can't handle any
            more, you need sleep and you slowly drift off as your eyelids become
            very heavy.
          </Typography>

          {Img(group5, "Group")}

          <Button
            text="Sleep"
            fun={() => {
              setArea("morning");
              nextDay();
            }}
          />
        </Container>
      );
    } else if (check < 2) {
      return (
        <Container>
          <Typography className="my-3">
            After grabbing a bite to eat and a long day at this perverted school
            you simply make your way to your room. It isn't long before you get
            back, only to find one of your roomies eagerly humping your pillow.
          </Typography>

          {Vid("vids/7.mp4", "video/mp4")}

          <Typography className="my-3">
            You really don't have the mental capacity to even complain about it
            and before long you fall asleep on top of a drenched pillow.
          </Typography>
          <Button
            text="You drift off to sleep"
            fun={() => {
              setArea("morning");
              nextDay();
            }}
          />
        </Container>
      );
    } else if (check < 3) {
      return (
        <Container>
          <Typography className="my-3">
            Lunch isn't anything out of the ordinary... at least not for this
            school. As you shuffle along in the queue you can see people
            whispering and snickering. It takes you a moment to realize that
            they are giggling at you. Your body is on full display and it is
            clear that you forgot to put on clothes from your last encounter.
          </Typography>
          {Img(mast1, "Masturbation")}
          <Typography className="my-3">
            It isn't long before some of the older girls pull you out of the
            line for the food court. One of them grins.{" "}
          </Typography>
          "Not often we get to see a naked slut. You are gonna be a good girl
          and eat what you are given. Needy cunts like you need thick girlcock!"
          <Typography className="my-3">
            She says, pulling her pants down to reveal a fat shaft.
          </Typography>
          {Img(strap1, "Strap")}
          <Typography className="my-3">
            Before you know it you are spending your lunch underneath a table
            sucking cock. Of all places to slurp on thick dick, this school
            wasn't one of the places that you had expected. However, each of the
            older girls wiggles their fat butts and wide hips as you slurp on
            their thick members, and they reward you with a hefty load.
          </Typography>
          <Button
            text="With that you call it a day"
            fun={() => {
              setArea("morning");
              nextDay();
            }}
          />
        </Container>
      );
    } else if (check < 4) {
      return (
        <Container>
          <Typography className="my-3">
            Lunch isn't anything out of the ordinary... at least not for this
            school. As you shuffle along in the queue you can see people
            whispering and snickering. It takes you a moment to realize that
            they are looking at a rather unfortunate girl that seems to be
            having kitchen duty. Her cunt is stuffed with a cob of corn.
          </Typography>

          {Img(mast2, "Masturbation")}

          <Typography className="my-3">
            She is clearly enjoying herself thanks to the studded nature of the
            corn, and you can hear her moans as she gets closer. Each corn is
            drenched in her juices and as you get closer it becomes clear that
            she is making quite the mess. Before you know it, you are getting
            your own cob of corn. However, before you get to pull it out of the
            poor girl, one of your classmates shoves your face into her cunt,
            making you pull out the corn with your mouth instead of your
            fingers.
          </Typography>

          <Typography className="my-3">
            You can feel the girl's wetness all over your face, drenching your
            every feature. It is intense and wet. You can't help but groan
            softly as long strings of need pull away from your face. You eat
            your lunch with a wide smile on your face looking at the girl being
            filled to the brim with food.
          </Typography>
          <Button
            text="With that you call it a day"
            fun={() => {
              setArea("morning");
              nextDay();
            }}
          />
        </Container>
      );
    } else if (check < 6) {
      return (
        <Container>
          <Typography className="my-3">
            It has been the longest day of your life and you are about to just
            go to sleep, and it honestly might not even be on your pillow.
            Instead, you find yourself walking into your room where you find
            Mary helping out Abby.
          </Typography>

          {Vid("vids/8.mp4", "video/mp4")}

          <Typography className="my-3">
            Abby is moaning something about the need to cover some gemstones in
            her juices. You decide it ain't worth your time and simply head to
            bed without questioning anything.
          </Typography>

          <Button
            text="You fall asleep"
            fun={() => {
              setArea("morning");
              nextDay();
            }}
          />
        </Container>
      );
    } else if (check < 8) {
      return (
        <Container>
          <Typography className="my-3">
            After getting back from your courses, you decide you need a bit of a
            break and head back to your dorm room. Once you get there, you
            notice that your roommates are gone, probably in class. Reflecting
            on everything that has happened to you so far, you realize that you
            have been enjoying everything that has happened. And you also
            realize that you'll probably never have sex with a boy ever again.
            And you're okay with that.
          </Typography>

          <Typography className="my-3">
            You decide you want to be a little bolder and deliberately go back
            out completely naked. A number of girls are already cat-calling you,
            with someone complimenting your plump ass. You turn around and
            notice a blonde girl, slightly taller than you wearing a tight shirt
            that accentuated her D-cup breasts.{" "}
          </Typography>

          {Img(bailey, "Bailey")}

          <Typography className="my-3">
            You flash her a wink, bend over slightly and give your ass a little
            shake. The girl smirks back and wanders over to you, smacking you on
            the ass before wandering into a nearby girls' bathroom. She motions
            for you to follow her.
          </Typography>
          <Button
            text="You get the feeling that you will be her anal slut, so you eagerly follow"
            fun={() => {
              setAnalScene(true);
              nextDay();
            }}
          />

          <Button
            text="You decide to head back to bed"
            fun={() => {
              setArea("morning");
              nextDay();
            }}
          />
        </Container>
      );
    } else {
      return (
        <Container>
          <Typography className="my-3">
            It seems like this might be the best time for you to get some sleep.
          </Typography>

          <Button
            text="You decide to head to bed"
            fun={() => {
              setArea("morning");
              nextDay();
            }}
          />
        </Container>
      );
    }
  }
}

export default Evening;

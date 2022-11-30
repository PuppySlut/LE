import { Typography } from "@mui/material";
import Button from "../elements/Button";

const Landing = (props) => {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <div>
      <Typography variant="h5" align="center">
        Lesbian Education
      </Typography>
      <Typography align="center" className="my-3">
        Welcome to Lesbian Education, a small Choose your own adventure that has
        been thrown together over quite some time on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://chyoa.com/chapter/Introduction.1134972"
        >
          CHYOA
        </a>
        . If you wanna add to the story and not worry about coding, simply add
        it on CHYOA, and I will be sure to integrate it. If you don't mind
        coding here is the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/PuppySlut/LE"
        >
          github
        </a>{" "}
        link to the project.
      </Typography>
      <br />
      <Typography align="center" className="my-3">
        Want to give feedback? I will probably check out whever this was posted,
        but you can also find me on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mostlylesbianlewds.bdsmlr.com/"
        >
          BDSMLR!
        </a>
      </Typography>
      <br />
      <Typography align="center" className="my-3">
        Just to make it clear this game includes adult material, do not continue
        if you are not of legal age to consume such content in your region.
      </Typography>
      <br />
      <Typography align="center" className="my-3">
        As you might already have deducted, this game focuses heavily on
        Lesbians, mostly girl on girl, though there is a wide variety of kinks
        such as incest, cosplay, and a couple of scenes feature dicked girls.
      </Typography>
      <br />
      <Button
        text="Continue to the lewds"
        fun={() => {
          console.log(props);
          props.setArea("intro");
        }}
      />
    </div>
  );
};

export default Landing;

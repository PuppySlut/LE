import { Typography, Box } from "@mui/material";
import secretary from "../resources/img/secretary.webp";
import counselor from "../resources/img/SC.jpg";
import therapist from "../resources/img/therapist.jpg";
import therapist2 from "../resources/img/therapist2.jpg";
import lifeguard from "../resources/img/lifeguard.webp";
import nurse from "./../resources/img/cosplay/3.jpg";
import mary from "../resources/img/mary.webp";
import mary2 from "../resources/img/mary2.webp";
import abby from "../resources/img/abby.webp";
import chef1 from "../resources/img/chef1.webp";
import chef2 from "../resources/img/chef2.webp";
import teddy from "../resources/img/teddy.jpg";
import hm from "../resources/img/humpman.jpg";
import { Image } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import bimbo from "../resources/img/bimbo.jpg";
import wetvalley from "../resources/img/wetvalley.webp";
import wetvalley2 from "../resources/img/wetvalley2.jpg";
import randStudent from "../resources/img/randStudent.gif";
import poppy from "../resources/img/poppy.webp";
import randStuMeal from "../resources/img/randStuMeal.webp";
import twins from "../resources/img/twins.jpg";
import headmistress from "./../resources/img/headmistress.webp";
import headmistress2 from "./../resources/img/headmistress2.webp";
import headmistress3 from "./../resources/img/headmistress3.webp";
import randStuEve from "./../resources/img/cute/2.jpg";
import mom from "../resources/img/mom.jpg";
import mom2 from "../resources/img/mom2.jpg";
import momteach from "../resources/img/momTeach.jpg";
import bailey from "./../resources/img/bailey.jpg";
import you from "./../resources/img/you.jpg";
import cosplay from "./../resources/img/cosplay.jpg";
import jasmine from "./../resources/img/masturbation/15.jpg";
import chess from "./../resources/img/chess.jpg";
import abbyNaked from "./../resources/img/abby2.webp";
import "@fontsource/news-cycle";
import "@fontsource/baskervville";
import "@fontsource/overpass";
import "@fontsource/podkova";
import "@fontsource/emilys-candy";
import "@fontsource/gentium-book-basic";
import "@fontsource/sedgwick-ave";
import "@fontsource/purple-purse";
import "@fontsource/oleo-script";
import "@fontsource/mochiy-pop-one";
import "@fontsource/milonga";
import "@fontsource/oleo-script";
import { Vid } from "../elements/Video";

export const getSec = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#170f11",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#5c164e",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#402039",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#e2fcef",
                fontFamily: "baskervville",
              }}
            >
              Florina
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#e2fcef",
              fontFamily: "baskervville",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={secretary}
            className="mx-auto d-block"
            alt="Secretary"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getCouns = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#041F1E",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#C57B57",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#1E2D2F",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#F7DBA7",
                fontFamily: "Podkova",
              }}
            >
              Tina Lickwell
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#F7DBA7",
              fontFamily: "Podkova",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={counselor}
            className="mx-auto d-block"
            alt="Counselor"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getTher = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#100B00",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#85CB33",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#3B341F",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#EFFFC8",
                fontFamily: "Overpass",
              }}
            >
              Lena
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#EFFFC8",
              fontFamily: "Overpass",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={mood === "titsOut" ? therapist2 : therapist}
            className="mx-auto d-block"
            alt="Therapist"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getLife = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#C42847",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#000022",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#E28413",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#FBF5F3",
                fontFamily: "Emilys Candy",
              }}
            >
              "Lifeguard"
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#FBF5F3",
              fontFamily: "Emilys Candy",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={lifeguard}
            className="mx-auto d-block"
            alt="Therapist"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getCosplay = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#C42847",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#000022",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#E28413",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#FBF5F3",
                fontFamily: "Emilys Candy",
              }}
            >
              Cosplay Teacher
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#FBF5F3",
              fontFamily: "Emilys Candy",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={mood === "jasmine" ? jasmine : cosplay}
            className="mx-auto d-block"
            alt="Cosplay Teacher"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getBimbo = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFD2FC",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#B96AC9",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#DDFFF7",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#231B1B",
                fontFamily: "Emilys Candy",
              }}
            >
              Random bimbo
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#231B1B",
              fontFamily: "Emilys Candy",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={bimbo}
            className="mx-auto d-block"
            alt="Therapist"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getWetvalley = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1d3557",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#457b9d",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#a8dadc",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#e63946",
                fontFamily: "Gentium Book Basic",
              }}
            >
              Miss Wetvalley
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#e63946",
              fontFamily: "Gentium Book Basic",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={mood === "meal" ? wetvalley2 : wetvalley}
            className="mx-auto d-block"
            alt="Wetvalley"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getRandStu = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#264653",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#e76f51",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#2a9d8f",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#e9c46a",
                fontFamily: "Emilys Candy",
              }}
            >
              Random Student
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#e9c46a",
              fontFamily: "Emilys Candy",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={
              mood === "meal"
                ? randStuMeal
                : mood === "evening"
                ? randStuEve
                : randStudent
            }
            className="mx-auto d-block"
            alt="Random Student"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getAbby = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#331E38",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#A0C1B9",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#706993",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#F4E8C1",
                fontFamily: "Sedgwick Ave",
              }}
            >
              Abby
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#F4E8C1",
              fontFamily: "Sedgwick Ave",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={mood === "naked" ? abbyNaked : abby}
            className="mx-auto d-block"
            alt="Abby"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getPoppy = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#9B1D20",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#635D5C",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#3D2B3D",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#D0FFCE",
                fontFamily: "Purple Purse",
              }}
            >
              Poppy
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#D0FFCE",
              fontFamily: "Purple Purse",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={poppy}
            className="mx-auto d-block"
            alt="Poppy"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getMary = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#6E8387",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#0CCA4A",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#A4B8C4",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#FCFAFA",
                fontFamily: "Oleo Script",
              }}
            >
              Mary
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#FCFAFA",
              fontFamily: "Oleo Script",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={mood === "cum" ? mary2 : mary}
            className="mx-auto d-block"
            alt="Mary"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getTwins = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#3D2645",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#DA4167",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#832161",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#F0EFF4",
                fontFamily: "News Cycle",
              }}
            >
              The Twins
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#F0EFF4",
              fontFamily: "News Cycle",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={twins}
            className="mx-auto d-block"
            alt="Twins"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getHead = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#92140c",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#254441",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#ff6f59",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#D2D0DD",
                fontFamily: "Mochiy Pop One",
              }}
            >
              The Headmistress
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#D2D0DD",
              fontFamily: "Mochiy Pop One",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={
              mood === "intense"
                ? headmistress2
                : mood === "seductive"
                ? headmistress3
                : headmistress
            }
            className="mx-auto d-block"
            alt="headmistress"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getMom = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#561D25",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#D3E298",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#CE8147",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#CDE7BE",
                fontFamily: "Milonga",
              }}
            >
              Mom
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#CDE7BE",
              fontFamily: "Milonga",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={mood === "lust" ? mom2 : mood === "teach" ? momteach : mom}
            className="mx-auto d-block"
            alt="Twins"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getMe = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#121619",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#09814A",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#2D4739",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#E5C687",
                fontFamily: "Milonga",
              }}
            >
              You
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Image
            src={you}
            className="mx-auto d-block"
            alt="Twins"
            fluid
            roundedCircle
          />
        </Col>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#E5C687",
              fontFamily: "Milonga",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getBailey = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#561D25",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#D3E298",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#CE8147",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#CDE7BE",
                fontFamily: "Milonga",
              }}
            >
              Bailey
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#CDE7BE",
              fontFamily: "Milonga",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={bailey}
            className="mx-auto d-block"
            alt="Twins"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getChef = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#264653",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#e76f51",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#2a9d8f",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#e9c46a",
                fontFamily: "podkova",
              }}
            >
              Chef
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#e9c46a",
              fontFamily: "podkova",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={mood === "first" ? chef1 : chef2}
            className="mx-auto d-block"
            alt="Chef"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getHumpman = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#191716",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#3D348B",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#E6AF2E",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#E0E2DB",
                fontFamily: "Podkova",
              }}
            >
              Tina Lickwell
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#E0E2DB",
              fontFamily: "Podkova",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={hm}
            className="mx-auto d-block"
            alt="Humpman"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getAmber = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFD2FC",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#B96AC9",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#DDFFF7",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#231B1B",
                fontFamily: "Emilys Candy",
              }}
            >
              Amber
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#231B1B",
              fontFamily: "Emilys Candy",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={chess}
            className="mx-auto d-block"
            alt="Amber"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getNurse = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#C41E3D",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#D2E0BF",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#3A3238",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#E5C3D1",
                fontFamily: "Oleo Script",
              }}
            >
              Nurses
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#3A3238",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              className="text-center"
              sx={{
                color: "#E5C3D1",
                fontFamily: "Oleo Script",
              }}
            >
              {text}
            </Typography>
          </Box>
        </Col>
        <Col xs={3}>
          {mood === "blonde" ? (
            Vid("vids/12.mp4", "video/mp4")
          ) : mood === "brunette" ? (
            Vid("vids/13.mp4", "video/mp4")
          ) : (
            <Image
              src={nurse}
              className="mx-auto d-block"
              alt="Nurse"
              fluid
              roundedCircle
            />
          )}
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

export const getTeddy = (text, mood) => {
  return (
    <Box
      sx={{
        backgroundColor: "#170f11",
        boxShadow: 1,
        border: 4,
        borderRadius: 4,
        p: 2,
        m: 2,
        borderColor: "#5c164e",
      }}
    >
      <Row>
        <Col>
          <Box
            sx={{
              backgroundColor: "#402039",
              borderRadius: 4,
              p: 2,
              m: 2,
            }}
          >
            <Typography
              variant="h6"
              className="text-center"
              sx={{
                color: "#e2fcef",
                fontFamily: "baskervville",
              }}
            >
              Teddy
            </Typography>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography
            className="text-center"
            sx={{
              color: "#e2fcef",
              fontFamily: "baskervville",
            }}
          >
            {text}
          </Typography>
        </Col>
        <Col xs={3}>
          <Image
            src={teddy}
            className="mx-auto d-block"
            alt="Secretary"
            fluid
            roundedCircle
          />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Box>
  );
};

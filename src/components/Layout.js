import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { Container } from "react-bootstrap";
import bgDefault from "../resources/Baggrund.jpg";
import { Box } from "@mui/system";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";

function DrawerAppBar(props) {
  const { children, variables } = props;

  return (
    <Container>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Lesbian Education
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        style={{
          backgroundImage: bgDefault,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Toolbar />
        <br />
        <Grid container>
          <Grid item xs={2}>
            <Box
              sx={{
                backgroundColor: "#402039",
                borderRadius: 4,
                p: 2,
              }}
            >
              <Typography
                variant="h5"
                className="text-center"
                sx={{
                  color: "#e2fcef",
                }}
              >
                Character Info:
              </Typography>

              <ListGroup>
                <ListGroup.Item variant="dark">
                  <Typography variant="p" className="text-center">
                    <strong>Name:</strong>
                    <br />{" "}
                    {props.variables.firstName + " " + props.variables.lastName}
                  </Typography>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Typography variant="p" className="text-center">
                    <strong>Mom name:</strong>
                    <br />{" "}
                    {props.variables.mom + " " + props.variables.lastName}
                  </Typography>
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  <Typography variant="p" className="text-center">
                    <strong>Day:</strong>
                    <br /> {variables.day + 1}
                  </Typography>
                </ListGroup.Item>

                {variables.bimbo > 0 ? (
                  <ListGroup.Item>
                    <Typography variant="p" className="text-center">
                      <strong>Bimbo stage:</strong>
                      <br /> {variables.bimbo}
                    </Typography>
                  </ListGroup.Item>
                ) : null}

                {variables.cosplay > 0 ? (
                  <ListGroup.Item variant="dark">
                    <Typography variant="p" className="text-center">
                      <strong>Cosplay progress:</strong>
                      <br /> {variables.cosplay}
                    </Typography>
                  </ListGroup.Item>
                ) : null}

                {variables.nurse > 0 ? (
                  <ListGroup.Item>
                    <Typography variant="p" className="text-center">
                      <strong>Nurse progress:</strong>
                      <br /> {variables.nurse}
                    </Typography>
                  </ListGroup.Item>
                ) : null}

                {variables.wetvalleyOp > 0 ? (
                  <ListGroup.Item variant="dark">
                    <Typography variant="p" className="text-center">
                      <strong>Wetvalley opinion:</strong>
                      <br /> {variables.wetvalleyOp}
                    </Typography>
                  </ListGroup.Item>
                ) : null}

                {variables.hypno > 0 ? (
                  <ListGroup.Item>
                    <Typography variant="p" className="text-center">
                      <strong>Hypno progress:</strong> <br />
                      {variables.hypno}
                    </Typography>
                  </ListGroup.Item>
                ) : null}

                {variables.momProg > 0 ? (
                  <ListGroup.Item variant="dark">
                    <Typography variant="p" className="text-center">
                      <strong>Mom progress:</strong> <br />
                      {variables.momProg}
                    </Typography>
                  </ListGroup.Item>
                ) : null}

                {variables.headOp > 0 ? (
                  <ListGroup.Item>
                    <Typography variant="p" className="text-center">
                      <strong>Headmistress Opinion:</strong>
                      <br /> {variables.headOp}
                    </Typography>
                  </ListGroup.Item>
                ) : null}
              </ListGroup>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <strong>List of Nicknames</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup>
                      {variables.nickNames.map((i, n) => {
                        return (
                          <ListGroup.Item
                            key={i}
                            variant={n % 2 === 0 ? "dark" : null}
                          >
                            <Typography variant="p" className="text-center">
                              {i}
                            </Typography>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Paper sx={{ m: 3, p: 1 }}>
              <br />
              {children}
              <br />
            </Paper>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default DrawerAppBar;

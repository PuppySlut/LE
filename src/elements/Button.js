import { Button } from "@mui/material";

function StyledButton(props) {
  return (
    <Button
      fullWidth
      size="large"
      variant="contained"
      className="my-3"
      onClick={() => {
        props.fun();
      }}
    >
      {props.text}
    </Button>
  );
}

export default StyledButton;

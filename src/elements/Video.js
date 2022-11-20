import { Card } from "react-bootstrap";
export const Vid = (vid, type) => {
  return (
    <Card component="li" sx={{ height: "100%", width: "100%" }}>
      <video autoPlay loop muted>
        <source src={vid} type={type} />
        Your browser does not support the video tag.
      </video>
    </Card>
  );
};

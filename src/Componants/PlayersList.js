import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "../App.css";
const PlayerList = (props) => {
  return (
    <Col md={3} sm={6} className="mb-3">
      <Card className=".Card-style">
        <Card.Img
          variant="top"
          src={props.user.ImageURL}
          height="400"
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>
            <h6> Player: {props.user.name} </h6>
            <h6> Team: {props.user.team}</h6>
            <h6>Nationality: {props.user.nationality}</h6>{" "}
            <h6>Age: {props.user.age} </h6>
            <h6>Jersey Number:{props.user.jerseyNumber} </h6>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default PlayerList;

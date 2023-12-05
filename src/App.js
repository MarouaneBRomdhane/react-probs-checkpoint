// import Card from "react-bootstrap/Card";
import Player from "./Componants/Player";
import "./App.css";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Player />
        </Row>
      </Container>
    </>
  );
}

export default App;

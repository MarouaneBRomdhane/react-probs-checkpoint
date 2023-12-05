import React from "react";
import players from "../players";
import PlayerList from "./PlayersList";
import { Row } from "react-bootstrap";

const Player = () => {
  return (
    <Row>
      {players.map((element) => (
        <PlayerList user={element} key={element.id}></PlayerList>
      ))}
    </Row>
  );
};

export default Player;

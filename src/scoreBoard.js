import React from "react";
import "./styles.css";
import { Player } from "./player";
import { Text } from "./text";

export const ScoreBoard = ({ playerList }) => {
  return (
    <div className="scoreboard">
      <Text size="1.2rem" color="white">
        SCOREBOARD
      </Text>
      {playerList.map((p, idx) => (
        <Player key={idx} player={p} idx={idx} />
      ))}
    </div>
  );
};

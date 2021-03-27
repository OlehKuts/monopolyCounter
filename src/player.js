import React from "react";
import "./styles.css";
import { Icon } from "./iconDocs/icon";
import { memberList } from "./database";

export const Player = ({ player, idx, ...props }) => {
  const playerColor =
    player.id === "Bank"
      ? "black"
      : memberList.filter((m) => m.name === player.id)[0].color;
  return (
    <div
      className="playerLine"
      style={{
        backgroundColor:
          idx === 0 ? "lavender" : idx === 1 ? "darkKhaki" : "floralWhite"
      }}
      {...props}
    >
      <div id="place">{idx === 0 ? "#" : idx}</div>

      <div id="ava" style={{ backgroundColor: "gainsboro" }}>
        <Icon
          name={idx === 0 ? "bank" : player.id}
          size="1.2rem"
          color={playerColor}
        />
      </div>
      <div
        id="name"
        style={{
          color: playerColor
        }}
      >
        {player.name}
      </div>
      <div id="bankroll">{player.bankroll}</div>
    </div>
  );
};

import React, { useState } from "react";
import "./styles.css";
import { memberList } from "./database";
import { Text } from "./text";

export const PlayersForm = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(true);

  const [playerId, setPlayerId] = useState(memberList[0].name);
  const onPlayerIdChange = (event) => {
    setPlayerId(event.target.value);
  };
  const [playerName, setPlayerName] = useState("");
  const onPlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };
  const [usedIds, setUsdIds] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    setUsdIds([...usedIds, playerId]);
    if (usedIds.some((i) => i === playerId)) return;
    if (playerName === "") return;
    onAdd(playerId, playerName);
    setPlayerId(memberList[0].name);
    setPlayerName("");
  };
  console.log(usedIds);
  return (
    <>
      {showForm && (
        <div>
          <div className="playersForm">
            <form onSubmit={onSubmit}>
              <Text size="1.25rem">Create new player</Text>
              <div>
                <select value={playerId} onChange={onPlayerIdChange}>
                  {memberList.map((item, idx) => (
                    <option key={idx} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <input
                  value={playerName}
                  onChange={onPlayerNameChange}
                  placeholder="enter your name..."
                />
              </div>
              <input type="submit" value="Add player" className="submit" />
              <button onClick={() => setShowForm((prev) => !prev)}>
                {" "}
                Finish
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

import React from "react";
import "./styles.css";
import { Icon } from "./iconDocs/icon";

export const Transaction = ({ transaction, idx, ...props }) => {
  const payer = transaction.payer.slice(0, 10);
  const receiver = transaction.receiver.slice(0, 10);
  return (
    <div
      className="playerLine"
      id="transLine"
      style={{
        backgroundColor: idx % 2 === 0 ? "lavender" : "white"
      }}
      {...props}
    >
      <div className="trans">{payer}</div>
      <div className="trans">
        <Icon name="arrowRight" size="1.2rem" color="navy" />
      </div>
      <div className="trans">{receiver}</div>
      <div>{transaction.sum}</div>
    </div>
  );
};

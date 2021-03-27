import React from "react";
import "./styles.css";
import { Transaction } from "./transaction";
import { Text } from "./text";

export const TransactionsHistory = ({ transactions }) => {
  return (
    <div className="scoreboard" id="transBoard">
      <Text size="1.2rem" color="black">
        TRANSACTIONS HISTORY
      </Text>
      {transactions.map((t, idx) => (
        <Transaction key={idx} transaction={t} idx={idx} />
      ))}
    </div>
  );
};

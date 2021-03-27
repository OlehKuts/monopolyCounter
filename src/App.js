import React, { useReducer } from "react";
import "./styles.css";
import { TransactionForm } from "./transactionForm";
import { PlayersForm } from "./playersForm";
import { playersReducer, PLAYERS_ACTIONS } from "./playersReducer";
import { bank } from "./database";
import { transaction } from "./database";
import { ScoreBoard } from "./scoreBoard";
import {
  transactionsReducer,
  TRANSACTIONS_ACTIONS
} from "./transactionsReducer";
import { TransactionsHistory } from "./transactionsHistory";

export const App = () => {
  const [players, dispatch] = useReducer(playersReducer, [bank]);
  const onTransactionAdd = (payer, receiver, sum) => {
    dispatch({ type: PLAYERS_ACTIONS.TRANSACTIONADD, payer, receiver, sum });
  };
  const onPlayerAdd = (playerId, playerName) => {
    dispatch({
      type: PLAYERS_ACTIONS.PLAYERSADD,
      playerId,
      playerName
    });
  };
  const [transactions, dispatchTransaction] = useReducer(transactionsReducer, [
    transaction
  ]);
  const onNewTransaction = (payer, receiver, sum) => {
    dispatchTransaction({
      type: TRANSACTIONS_ACTIONS.NEW,
      payer,
      receiver,
      sum
    });
  };
  const sortedPlayers = players.sort(function (a, b) {
    return Number(b.bankroll) - Number(a.bankroll);
  });
  // console.log(str);
  return (
    <div className="App">
      <TransactionsHistory transactions={transactions} />
      <div className="transactionForm">
        <PlayersForm onAdd={onPlayerAdd} />
        <TransactionForm
          onAdd={onTransactionAdd}
          onNewTransaction={onNewTransaction}
          players={players}
        />
        <ScoreBoard playerList={sortedPlayers} />
      </div>
    </div>
  );
};

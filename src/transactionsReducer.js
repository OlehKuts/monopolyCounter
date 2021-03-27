export const TRANSACTIONS_ACTIONS = {
  NEW: "new",
  REMOVE: "remove"
};

export const transactionsReducer = (transactions, action) => {
  switch (action.type) {
    case TRANSACTIONS_ACTIONS.NEW:
      return [
        {
          payer: action.payer,
          receiver: action.receiver,
          sum: action.sum
        },
        ...transactions
      ];
    // case PLAYERS_ACTIONS.TRANSACTIONADD:
    //   return players.map((p) =>
    //     p.name === action.payer
    //       ? {
    //           ...p,
    //           bankroll: p.bankroll - Number(action.sum)
    //         }
    //       : p.name === action.receiver
    //       ? {
    //           ...p,
    //           bankroll: p.bankroll + Number(action.sum)
    //         }
    //       : p
    //   );
    default:
      throw new Error();
  }
};

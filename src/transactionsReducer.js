export const TRANSACTIONS_ACTIONS = {
  NEW: "new",
  REMOVE: "remove",
};

export const transactionsReducer = (transactions, action) => {
  switch (action.type) {
    case TRANSACTIONS_ACTIONS.NEW:
      return [
        {
          payer: action.payer,
          receiver: action.receiver,
          sum: action.sum,
        },
        ...transactions,
      ];
    default:
      throw new Error();
  }
};

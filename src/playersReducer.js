export const PLAYERS_ACTIONS = {
  PLAYERSADD: "playersadd",
  TRANSACTIONADD: "transactionadd"
};

export const playersReducer = (players, action) => {
  switch (action.type) {
    case PLAYERS_ACTIONS.PLAYERSADD:
      return [
        {
          name: action.playerName,
          id: action.playerId,
          bankroll: 1500
        },
        ...players
      ];
    case PLAYERS_ACTIONS.TRANSACTIONADD:
      return players.map((p) =>
        p.name === action.payer
          ? {
              ...p,
              bankroll: p.bankroll - Number(action.sum)
            }
          : p.name === action.receiver
          ? {
              ...p,
              bankroll: p.bankroll + Number(action.sum)
            }
          : p
      );
    default:
      throw new Error();
  }
};

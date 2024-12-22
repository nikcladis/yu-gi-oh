const INITIAL_FIELD: FieldArea[] = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  card: null,
}));

export const FIELD_STATE: FieldState = {
  playerOne: INITIAL_FIELD.slice(0, 10),
  playerTwo: INITIAL_FIELD.slice(10, 20),
};

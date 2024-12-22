import { useCallback, useEffect, useRef } from "react";
import { Hand } from "@components/Hand";
import { FieldGrid } from "@components/Field";
import LeftPanel from "@components/Layout/LeftPanel/LeftPanel";
import RightPanel from "@components/Layout/RightPanel/RightPanel";
import { PlayerId } from "@/types/enums";
import { useGameContext } from "@contexts/GameContext";

const Arena: React.FC = () => {
  const { state, dispatch } = useGameContext();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      dispatch({
        type: "ADD_CARDS_TO_HAND",
        playerId: PlayerId.Self,
        amount: 5,
      });
      dispatch({
        type: "ADD_CARDS_TO_HAND",
        playerId: PlayerId.Opponent,
        amount: 5,
      });
    }
  }, [dispatch]);

  const removeCardFromHand = useCallback(
    (cardId: number, playerId: PlayerId) => {
      dispatch({ type: "REMOVE_CARD_FROM_HAND", cardId, playerId });
    },
    [dispatch]
  );

  const addCardToField = useCallback(
    (fieldId: number, card: CardData, playerId: PlayerId) => {
      dispatch({ type: "ADD_CARD_TO_FIELD", card, fieldId, playerId });
    },
    [dispatch]
  );

  const handleDropCardToField = useCallback(
    (card: CardData, FieldId: number, playerId: PlayerId) => {
      removeCardFromHand(card.id, playerId);
      addCardToField(FieldId, card, playerId);
    },
    [removeCardFromHand, addCardToField]
  );

  return (
    <div className="bg-black grid grid-cols-8 gap-2 p-2 min-h-screen max-h-fit">
      <LeftPanel />
      <div className="grid grid-rows-10 gap-2 row-span-8 col-span-5">
        <Hand
          cards={state.players[PlayerId.Opponent].hand || []}
          isDraggable={state.currentPlayer === PlayerId.Opponent}
        />
        <div className="text-white row-span-6 grid grid-rows-11">
          <FieldGrid
            fieldData={state.field.playerOpponent}
            playerId={PlayerId.Opponent}
            onDrop={(card, fieldId) =>
              state.currentPlayer === PlayerId.Opponent &&
              handleDropCardToField(card, fieldId, PlayerId.Opponent)
            }
          />
          <div className="row-span-1"></div>
          <FieldGrid
            fieldData={state.field.playerSelf}
            playerId={PlayerId.Self}
            onDrop={(card, fieldId) =>
              state.currentPlayer === PlayerId.Self &&
              handleDropCardToField(card, fieldId, PlayerId.Self)
            }
          />
        </div>
        <Hand
          cards={state.players[PlayerId.Self].hand || []}
          isDraggable={state.currentPlayer === PlayerId.Self}
        />
      </div>
      <RightPanel />
    </div>
  );
};

export default Arena;

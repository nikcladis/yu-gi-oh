import { createContext, useContext, useState, ReactNode } from "react";

interface CardInfoType {
  selectedCard: CardData | null;
  setSelectedCard: (card: CardData | null) => void;
}

const CardInfoContext = createContext<CardInfoType | undefined>(undefined);

export const CardInfoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  return (
    <CardInfoContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </CardInfoContext.Provider>
  );
};

export const useCardInfoContext = () => {
  const context = useContext(CardInfoContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardInfoProvider");
  }
  return context;
};

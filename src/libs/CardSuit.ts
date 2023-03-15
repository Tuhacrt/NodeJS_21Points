class CardSuit {
  constructor(private readonly suitImg: keyof typeof CardSuit.PokerSuit) {}
  
  public toString(): string {
    return CardSuit.PokerSuit[this.suitImg];
  }
}

namespace CardSuit {
  export enum PokerSuit {
    'CLUB' = '\u2663',
    'DIAMOND' = '\u2666',
    'HEART' = '\u2665',
    'SPADE' = '\u2660',
  }
}

export { CardSuit };

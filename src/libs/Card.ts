import { CardSuit } from './CardSuit.js';

export class Card {
  constructor(public rank: number, public suit: CardSuit.PokerSuit) {}
}
//
// export class Card {
//   readonly rank: number;
  
//   readonly suit: CardSuit.PokerSuit;
  
//   constructor(rank: number, suit: CardSuit.PokerSuit) {
//     this.rank = rank;
//     this.suit = suit;
//   }
// }

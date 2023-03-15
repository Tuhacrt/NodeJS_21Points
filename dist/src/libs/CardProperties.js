export var CardProperties;
(function (CardProperties) {
    const suitRanks = {
        CLUB: 0,
        DIAMOND: 1,
        HEART: 2,
        SPADE: 3,
    };
    class CardStandardComparator {
        static compareTwoCards(card1, card2) {
            if (card1.rank !== card2.rank) {
                return card1.rank - card2.rank;
            }
            return suitRanks[card1.suit] - suitRanks[card2.suit];
        }
        static compare(card1, card2) {
            return this.compareTwoCards(card1, card2);
        }
    }
    CardProperties.CardStandardComparator = CardStandardComparator;
})(CardProperties = CardProperties || (CardProperties = {}));
// export namespace CardProperties {
//   export class CardStandardComparator {
//     public static compareTwoCards(card1: Card, card2: Card): number {
//       if (card1.rank !== card2.rank) return card1.rank - card2.rank;
//       return (
//         this.getStandardSuitRank(card1.suit) -
//         this.getStandardSuitRank(card2.suit)
//       );
//     }
//     public static getStandardSuitRank(suit: CardSuit.PokerSuit) {
//       switch (suit) {
//         case 'CLUB' as CardSuit.PokerSuit:
//           return 0;
//         case 'DIAMOND' as CardSuit.PokerSuit:
//           return 1;
//         case 'HEART' as CardSuit.PokerSuit:
//           return 2;
//         case 'SPADE' as CardSuit.PokerSuit:
//           return 3;
//         default:
//           throw new Error('Not suit!!!');
//       }
//     }
//     public static compare(card1: Card, card2: Card): number {
//       return this.compareTwoCards(card1, card2);
//     }
//   }
// }

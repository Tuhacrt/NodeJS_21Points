class CardSuit {
    suitImg;
    constructor(suitImg) {
        this.suitImg = suitImg;
    }
    toString() {
        return CardSuit.PokerSuit[this.suitImg];
    }
}
(function (CardSuit) {
    let PokerSuit;
    (function (PokerSuit) {
        PokerSuit["CLUB"] = "\u2663";
        PokerSuit["DIAMOND"] = "\u2666";
        PokerSuit["HEART"] = "\u2665";
        PokerSuit["SPADE"] = "\u2660";
    })(PokerSuit = CardSuit.PokerSuit || (CardSuit.PokerSuit = {}));
})(CardSuit || (CardSuit = {}));
export { CardSuit };

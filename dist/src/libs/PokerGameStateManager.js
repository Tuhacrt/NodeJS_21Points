import { Card } from './Card.js';
import { CardDeck } from './CardDeck.js';
import { CardSuit } from './CardSuit.js';
import { DeckEmptyException } from './DeckEmptyException.js';
export class PokerGameStateManager {
    mainDeck = new CardDeck();
    discards = new CardDeck();
    constructor() {
        this.initializeMainDeck();
    }
    initializeMainDeck() {
        const suits = [];
        for (const value of Object.values(CardSuit.PokerSuit)) {
            suits.push(value);
        }
        for (let i = 1; i <= 13; i += 1) {
            for (let j = 0; j < 4; j += 1) {
                this.mainDeck.push(new Card(i, suits[j]));
            }
        }
    }
    drawCard() {
        if (this.mainDeck.length === 0) {
            throw new DeckEmptyException();
            // this.sortDiscardsIntoMainDeck();
            // return this.mainDeck.pop();
        }
        return this.mainDeck.pop();
    }
    discardCard(card) {
        this.discards.push(card);
    }
    shuffleMainDeck(times = 5) {
        this.mainDeck.shuffle(times);
    }
    shuffleDiscards(times = 5) {
        this.discards.shuffle(times);
    }
    sortDiscardsIntoMainDeck() {
        const len = this.discards.length;
        for (let i = 0; i < len; i += 1) {
            this.mainDeck.push(this.discards.pop());
        }
        this.shuffleMainDeck();
    }
    getMainDeck() {
        return this.mainDeck;
    }
    getDiscards() {
        return this.discards;
    }
    toString() {
        let result = '';
        result += `${this.mainDeck.toString()}\n`;
        result += `${this.discards.toString()}\n`;
        return result;
    }
}

import { shuffle } from '../helpers/shuffle.js';
export class CardDeck extends Array {
    add(card) {
        this.push(card);
    }
    shuffle(times = 1) {
        for (let i = 0; i < times; i += 1) {
            shuffle(this);
        }
    }
    toString() {
        return `[${this.map(({ suit, rank }) => `${suit}${rank}`).join(', ')}]`;
    }
}

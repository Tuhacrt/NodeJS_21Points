import { shuffle } from '../helpers/shuffle.js';
import { Card } from './Card.js';

export class CardDeck extends Array<Card> {
  add(card: Card): void {
    this.push(card);
  }

  shuffle(times = 1): void {
    for (let i = 0; i < times; i += 1) {
      shuffle(this);
    }
  }

  toString(): string {
    return `[${this.map(({ suit, rank }) => `${suit}${rank}`).join(', ')}]`;
  }
}

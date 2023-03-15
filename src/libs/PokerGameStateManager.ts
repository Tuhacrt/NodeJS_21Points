import { Card } from './Card.js';
import { CardDeck } from './CardDeck.js';
import { CardSuit } from './CardSuit.js';
import { DeckEmptyException } from './DeckEmptyException.js';

export class PokerGameStateManager {
  private mainDeck: CardDeck = new CardDeck();

  private discards: CardDeck = new CardDeck();

  constructor() {
    this.initializeMainDeck();
  }

  private initializeMainDeck(): void {
    const suits = [];
    for (const value of Object.values(CardSuit.PokerSuit)) {
      suits.push(value);
    }
    for (let i = 1; i <= 13; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        this.mainDeck.push(new Card(i, suits[j] as CardSuit.PokerSuit));
      }
    }
  }

  public drawCard(): Card {
    if (this.mainDeck.length === 0) {
      throw new DeckEmptyException();
      // this.sortDiscardsIntoMainDeck();
      // return this.mainDeck.pop();
    }
    return this.mainDeck.pop();
  }

  public discardCard(card: Card): void {
    this.discards.push(card);
  }

  public shuffleMainDeck(times = 5): void {
    this.mainDeck.shuffle(times);
  }

  public shuffleDiscards(times = 5): void {
    this.discards.shuffle(times);
  }

  public sortDiscardsIntoMainDeck() {
    const len = this.discards.length;
    for (let i = 0; i < len; i += 1) {
      this.mainDeck.push(this.discards.pop());
    }
    this.shuffleMainDeck();
  }

  public getMainDeck(): CardDeck {
    return this.mainDeck;
  }

  public getDiscards(): CardDeck {
    return this.discards;
  }

  public toString(): string {
    let result = '';
    result += `${this.mainDeck.toString()}\n`;
    result += `${this.discards.toString()}\n`;
    return result;
  }
}

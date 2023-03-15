import inquirer from 'inquirer';
import { PokerGameStateManager } from './libs/PokerGameStateManager.js';
import { Card } from './libs/Card.js';
import { CardDeck } from './libs/CardDeck.js';

//  Create a new deck for player hand cards and a game state manager
const handCards = new CardDeck();
const pokerGameStateManager = new PokerGameStateManager();

//  Initialize scores to zero
let maxScore = 0;
let currentRoundScore = 0;

const resetGameStates = (): void => {
  handCards.length = 0;
  currentRoundScore = 0;
  pokerGameStateManager.sortDiscardsIntoMainDeck();
};

const askForConfirmation = async (message: string): Promise<boolean> => {
  const { confirmed } = await inquirer.prompt({
    name: 'confirmed',
    type: 'confirm',
    message,
  });
  return confirmed;
};

const drawNextCardFromMainDeck = (): Card => {
  let nextCard: Card;
  try {
    nextCard = pokerGameStateManager.drawCard();
  } catch (DeckEmptyException) {
    console.log('Reshuffle..');
    pokerGameStateManager.sortDiscardsIntoMainDeck();
    nextCard = pokerGameStateManager.drawCard();
  }
  return nextCard;
};

const countRoundScoreFromHandCards = (): number => {
  return handCards.reduce((sum, card) => sum + card.rank, 0);
};

const determineIfTheRoundKeeping = async (): Promise<boolean> => {
  console.log(`Current Score: ${currentRoundScore}`);
  if (currentRoundScore > 21) {
    console.log('Over 21!');
    resetGameStates();
    return false;
  }
  return askForConfirmation('One More card?');
};

const executeOneRoundGame = async (): Promise<void> => {
  while (await determineIfTheRoundKeeping()) {
    const nextCard: Card = drawNextCardFromMainDeck();

    console.log(`You got`, nextCard);
    handCards.add(nextCard);
    console.log(handCards.toString());

    currentRoundScore = countRoundScoreFromHandCards();
  };
};

const showAndUpdateMaxScore = async (): Promise<void> => {
  maxScore = Math.max(maxScore, currentRoundScore);
  console.log(`Get score: ${currentRoundScore}`);
};

export const game21Points = async () => {
  while (await askForConfirmation('One more round?')) {
    resetGameStates();
    await executeOneRoundGame();
    showAndUpdateMaxScore();
  } ;
  console.log(`Max score: ${maxScore}`);
};

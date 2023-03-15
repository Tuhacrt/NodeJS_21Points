// import inquirer from 'inquirer';
// import { syncBuiltinESMExports } from 'node:module';
// import { PokerGameStateManager } from './libs/PokerGameStateManager.js';
import { Card } from './libs/Card.js';
import { CardSuit } from './libs/CardSuit.js';
// import { CardDeck } from './libs/CardDeck.js';
// const handCards = new CardDeck();
let maxScore = 0;
let currentRoundScore = 0;
// const pokerGameStateManager = new PokerGameStateManager();
// function resetGameStates() {
//   handCards.length = 0;
//   currentRoundScore = 0;
//   pokerGameStateManager.sortDiscardsIntoMainDeck();
//   console.log(pokerGameStateManager.toString());
// }
// const askingFor = async (message: string): Promise<boolean> => {
//   // const { key: enterKey } = await inquirer.prompt({
//   //   name: 'key',
//   //   type: 'confirm',
//   //   message,
//   // });
//   // console.log(enterKey);
//   // return enterKey;
//   return false;
// };
// function drawNextCardFromMainDeck(): Card {
//   let nextCard: Card | null = null;
//   try {
//     nextCard = pokerGameStateManager.drawCard();
//   } catch (DeckEmptyException) {
//     console.log('reshuffle..');
//     pokerGameStateManager.sortDiscardsIntoMainDeck();
//     nextCard = pokerGameStateManager.drawCard();
//   }
//   return nextCard;
// }
// function countRoundScoreFromHandCards(): number {
//   currentRoundScore = 0;
//   for (const c of handCards) {
//     currentRoundScore += c.rank;
//   }
//   return currentRoundScore;
// }
// const determineIfTheRoundKeeping = async () => {
//   console.log(currentRoundScore);
//   if (currentRoundScore > 21) {
//     console.log('over 21!');
//     return false;
//   }
//   return askingFor('One More card?\n');
// };
// async function executeOneRoundGame() {
//   do {
//     const nextCard: Card | null = drawNextCardFromMainDeck();
//     console.log(`You got `, nextCard);
//     handCards.push(nextCard);
//     console.log(handCards.toString());
//     currentRoundScore = countRoundScoreFromHandCards();
//   } while (await determineIfTheRoundKeeping());
// }
// function showAndUpdateMaxScore(): void {
//   maxScore = Math.max(maxScore, currentRoundScore);
//   console.log(`Get score: ${currentRoundScore}`);
// }
const game21Points = () => {
    // do {
    //   resetGameStates();
    //   await executeOneRoundGame();
    //   showAndUpdateMaxScore();
    // } while (await askingFor('One more round? (y/n)\n'));
    console.log(new Card(1, CardSuit.PokerSuit.CLUB));
    console.log(`Max Score: ${maxScore}`);
};
game21Points();

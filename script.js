/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(score1, score2, score3);
const scoreKoalas = calcAverage(score1, score2, score3);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins < avgKoalas) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
  } else if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
  } else {
    console.log("No team wins...");
  }
}
scoreDolphins(44, 23, 71);
scoreKoalas(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);

const calcAverage = (score1, score2, score3) => {
  return score1 + score2 + score3;
};

const scoreDolphins = calcAverage(score1, score2, score3);
const scoreKoalas = calcAverage(score1, score2, score3);

checkWinner(avgDolphins, avgKoalas);
{
  if (avgDolphins < avgKoalas) {
    console.log(`Koalas win (${scoreDolphins} vs. ${scoreKoalas})`);
  } else if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${scoreKoalas} vs. ${scoreDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner((44, 23, 71), (85, 54, 41));

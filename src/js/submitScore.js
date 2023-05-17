import LeaderBoard from './leaderBoard.js';

const leaderboard = new LeaderBoard();
const submitBtn = document.querySelector('.btn-submit');

if (submitBtn) {
  const nameInput = document.querySelector('.name');
  const scoreInput = document.querySelector('.score');
  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const user = nameInput.value;
    const score = scoreInput.value;
    const body = {
      user,
      score,
    };
    if (user && score) {
      await leaderboard.addNewScores(body);
      nameInput.value = '';
      scoreInput.value = '';
    }
  });
}

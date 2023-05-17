import LeaderBoard from './leaderBoard.js';

const leaderboard = new LeaderBoard();
const submitBtn = document.querySelector('.btn-submit');

if (submitBtn) {
  const nameInput = document.querySelector('.name');
  const scoreInput = document.querySelector('.score');
  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const spinner = document.querySelector('.add-to-leaderboard .spinner');
    const user = nameInput.value;
    const score = scoreInput.value;
    const body = {
      user,
      score,
    };
    if (user && score) {
      spinner.style.display = 'block';
      await leaderboard.addNewScores(body);
      spinner.style.display = 'none';
      nameInput.value = '';
      scoreInput.value = '';
    }
  });
}

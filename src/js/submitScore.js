import LeaderBoard from './leaderBoard.js';
import showAlert from './showAlert.js';

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
    if (user === '' || score === '') {
      return showAlert('Fill both required input', 'failed');
    }
    spinner.style.display = 'block';
    const res = await leaderboard.addNewScores(body);
    spinner.style.display = 'none';
    nameInput.value = '';
    scoreInput.value = '';
    return showAlert(res.result, 'success');
  });
}

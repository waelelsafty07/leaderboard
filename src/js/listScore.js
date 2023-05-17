import LeaderBoard from './leaderBoard.js';

const listScore = document.querySelector('.list-score');

const leaderboard = new LeaderBoard();

const createElement = (tag, className) => {
  const el = document.createElement(tag);
  el.className = className;
  return el;
};

const createText = (el, text) => {
  const textEl = document.createTextNode(text);
  el.appendChild(textEl);
  return el;
};

const createScoreItem = (text) => {
  const el = createElement('li', 'score-item');
  const span = createElement('span', 'score-item-text');
  const spanEl = createText(span, text);
  el.appendChild(spanEl);
  return el;
};

const getScores = async () => {
  if (listScore) {
    const scores = await leaderboard.getScores();
    scores.result.forEach((score) => {
      const text = `${score.user}: ${score.score}`;
      listScore.appendChild(createScoreItem(text));
    });
  }
};
getScores();

const refreshBtn = document.querySelector('.btn-refresh');
if (refreshBtn) {
  refreshBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const scoreItem = document.querySelectorAll('.score-item');
    scoreItem.forEach((item) => {
      item.remove();
    });
    getScores();
  });
}

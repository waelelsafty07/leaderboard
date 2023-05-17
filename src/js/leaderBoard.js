import API from './api.js';
import LocalStorage from './localStorage.js';

class LeaderBoard {
  constructor() {
    this.LocalStorage = new LocalStorage();
    this.idGame = this.LocalStorage.getItem('id');
  }

  async getScores() {
    const fetchScores = new API().getScores(await this.idGame);
    return fetchScores;
  }

  async addNewScores(body) {
    const submitScore = new API().createScore(await this.idGame, body);
    return submitScore;
  }
}
export default LeaderBoard;

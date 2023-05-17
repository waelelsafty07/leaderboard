class API {
  api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

  constructor() {
    this.url = this.api;
  }

  fetchData = async (url, method, body) => {
    const settingRequest = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let request;
    if (method === 'GET') {
      request = new Request(url, settingRequest);
    } else if (method === 'POST') {
      settingRequest.body = JSON.stringify(body);
      request = new Request(url, settingRequest);
    }
    if (!request) throw new Error('request not available');
    const response = await fetch(request);
    const responseJson = await response.json();
    return responseJson;
  };

  createGame = async () => {
    const endPoint = 'games/';
    const url = this.url + endPoint;
    const body = {
      name: "wael's Game",
    };
    const responseJson = await this.fetchData(url, 'POST', body);
    const gameID = responseJson.result.split(' ')[3];
    return gameID;
  };

  createScore = async (idGame, body) => {
    const endPoint = `games/${idGame}/scores/`;
    const url = this.url + endPoint;
    const responseJson = await this.fetchData(url, 'POST', body);
    return responseJson;
  };

  getScores = async (idGame) => {
    const endPoint = `games/${idGame}/scores/`;
    const url = this.url + endPoint;
    const responseJson = await this.fetchData(url, 'GET');
    return responseJson;
  };
}

export default API;

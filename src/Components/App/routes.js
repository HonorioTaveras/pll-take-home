import axios from 'axios';

const playerOneId = '000354';
const playerTwoId = '000391';
const infoEndpoint = 'players';
const statsEndpoint = 'players-stats';

export const getPlayerOneInfo = async () => {
  const data = await axios.get(
    `https://api.stats.premierlacrosseleague.com/v1.00/${infoEndpoint}/${playerOneId}/2020`
  );

  return data;
};

export const getPlayerOneStats = async () => {
  const data = await axios.get(
    `https://api.stats.premierlacrosseleague.com/v1.00/${statsEndpoint}/${playerOneId}/2020`
  );

  return data;
};

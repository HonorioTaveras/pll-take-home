import axios from 'axios';

import { getPlayerTwoStats } from '../src/Components/App/routes';

const playerTwoId = '000391';
const statsEndpoint = 'players-stats';

jest.mock('axios');

describe('get player one stats', () => {
  it('fetches successfully player one stats data from the PLL API', async () => {
    const data = {
      GAA: 0,
      PIM: 0,
      assists: 14,
      causedTurnovers: 0,
      createdAt: '2020-07-24T11:55:15.221Z',
      faceoffPct: 0,
      faceoffs: 0,
      faceoffsLost: 0,
      faceoffsWon: 0,
      gamesPlayed: 6,
      gamesStarted: 6,
      goalieLosses: 0,
      goalieTies: 0,
      goalieWins: 0,
      goals: 6,
      goalsAgainst: 0,
      groundBalls: 11,
      numPenalties: 1,
      officialId: '000391',
      onePointGoals: 6,
      pim: 0.5,
      plusMinus: 0,
      points: 20,
      powerPlayGoals: 0,
      powerPlayGoalsAgainst: null,
      powerPlayShots: 0,
      saa: 0,
      savePct: 0,
      saves: 0,
      scoresAgainst: 0,
      shortHandedGoals: 0,
      shortHandedGoalsAgainst: null,
      shortHandedShots: 0,
      shotPct: 0.24,
      shots: 25,
      shotsOnGoal: 18,
      shotsOnGoalPct: 0.72,
      tof: 0,
      turnovers: 13,
      twoPointGoals: 0,
      twoPointGoalsAgainst: 0,
      twoPointShotPct: 0,
      twoPointShots: 1,
      twoPointShotsOnGoal: 1,
      twoPointShotsOnGoalPct: 1,
      twoPtGaa: 0,
      updatedAt: '2020-08-09T18:34:56.122Z',
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getPlayerTwoStats()).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.stats.premierlacrosseleague.com/v1.00/${statsEndpoint}/${playerTwoId}/2020`
    );
  });

  it('fetches erroneously player one info data from from the PLL API API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
  });
});

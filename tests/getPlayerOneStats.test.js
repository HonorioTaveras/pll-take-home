import axios from 'axios';

import { getPlayerOneStats } from '../src/Components/App/routes';

const playerOneId = '000354';
const statsEndpoint = 'players-stats';

jest.mock('axios');

describe('get player one stats', () => {
  it('fetches successfully player one stats data from the PLL API', async () => {
    const data = {
      GAA: 0,
      PIM: 0,
      assists: 18,
      causedTurnovers: 1,
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
      goals: 7,
      goalsAgainst: 0,
      groundBalls: 6,
      numPenalties: 0,
      officialId: '000354',
      onePointGoals: 7,
      pim: 0,
      plusMinus: 0,
      points: 25,
      powerPlayGoals: 0,
      powerPlayGoalsAgainst: null,
      powerPlayShots: 1,
      saa: 0,
      savePct: 0,
      saves: 0,
      scoresAgainst: 0,
      shortHandedGoals: 0,
      shortHandedGoalsAgainst: null,
      shortHandedShots: 0,
      shotPct: 0.3181818181818182,
      shots: 22,
      shotsOnGoal: 14,
      shotsOnGoalPct: 0.6363636363636364,
      tof: 0,
      turnovers: 15,
      twoPointGoals: 0,
      twoPointGoalsAgainst: 0,
      twoPointShotPct: null,
      twoPointShots: 0,
      twoPointShotsOnGoal: 0,
      twoPointShotsOnGoalPct: 0,
      twoPtGaa: 0,
      updatedAt: '2020-08-09T18:34:56.122Z',
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getPlayerOneStats()).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.stats.premierlacrosseleague.com/v1.00/${statsEndpoint}/${playerOneId}/2020`
    );
  });

  it('fetches erroneously player one stats data from from the PLL API API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
  });
});

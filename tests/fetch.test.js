import axios from 'axios';

import { getPlayerOneInfo } from '../src/Components/App/routes';

const playerOneId = '000354';
const playerTwoId = '000391';
const infoEndpoint = 'players';
const statsEndpoint = 'players-stats';

jest.mock('axios');

describe('get player one info', () => {
  it('fetches successfully player one info data from the PLL API', async () => {
    const data = {
      age: '25',
      clubTeam: null,
      college: 'Maryland',
      collegeYear: '2017',
      country: null,
      countryCode: 'USA',
      createdAt: '2020-07-24T11:55:15.347Z',
      dob: null,
      firstName: 'Matt',
      handedness: null,
      height: "5'10",
      highSchool: 'LaSalle College High School',
      hometown: 'Glenside, PA',
      igUrl: 'https://instagram.com/rattmambo',
      injuryDesc: null,
      injuryStatus: 'H',
      isCaptain: null,
      jerseyNum: '9',
      lastName: 'Rambo',
      lastNameSuffix: null,
      nickname: null,
      officialId: '000354',
      playerBio:
        "The winner of the inaugural PLL Jim Brown MVP Award at the close of the 2019 season, Matt Rambo led the Whipsnakes charge to the PLL Championship. Finishing the season with a league-high 49 points and 23 goals, Rambo was an unstoppable playmaker. Rambo's skillset was put on display in the biggest moment of the season when his game winning goal in overtime brought Whipsnakes LC the title. Rambo is a Glenside, Pennsylvania native where he attended LaSalle College High School. While playing at the University of Maryland, Rambo was a 3x First Team All-Big Ten selection, a 2x USILA All-American, the 2016 Big Ten Tournament Most Valuable Player, the 2017 Big Ten Offensive Player of the Year, the 2017 Enners Award recipient for the Nation’s Most Outstanding Player and the 2017 Tewaaraton Award Winner. Rambo was named to the 2019 PLL All-Star Game and took home the Eamon McEneaney Attackman of the Year. Rambo's favorite food is a hometown Philly cheesesteak and he is a big fan of the film, Law Abiding Citizen.",
      position: 'A',
      positionLongName: 'Attack',
      profileUrl:
        'https://premierlacrosseleague.com/wp-content/uploads/2020/07/Whipsnakes_Matt_Rambo.jpg',
      scratch: null,
      teamId: 'WHP',
      twUrl:
        'https://twitter.com/rattmambo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
      updatedAt: '2020-08-05T22:13:08.393Z',
      weight: '195',
      yearsExp: '2',
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getPlayerOneInfo()).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.stats.premierlacrosseleague.com/v1.00/${infoEndpoint}/${playerOneId}/2020`
    );
  });

  it('fetches erroneously player one info data from from the PLL API API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
  });
});

// describe('get player one stats', () => {
//   it('fetches successfully player one stats data from the PLL API', async () => {});

//   it('fetches erroneously player one stats data from from the PLL API API', async () => {});
// });

// describe('get player two info', () => {
//   it('fetches successfully player two info data from the PLL API', async () => {});

//   it('fetches erroneously player two info data from from the PLL API API', async () => {});
// });

// describe('get player two stats', () => {
//   it('fetches successfully player two stats data from the PLL API', async () => {});

//   it('fetches erroneously player two stats data from from the PLL API API', async () => {});
// });

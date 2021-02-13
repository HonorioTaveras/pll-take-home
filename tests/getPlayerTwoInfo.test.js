import axios from 'axios';

import { getPlayerTwoInfo } from '../src/Components/App/routes';

const playerTwoId = '000391';
const infoEndpoint = 'players';

jest.mock('axios');

describe('get player two info', () => {
  it('fetches successfully player two info data from the PLL API', async () => {
    const data = {
      age: '23',
      clubTeam: null,
      college: 'Penn State',
      collegeYear: '2020',
      country: null,
      countryCode: 'USA',
      createdAt: '2020-07-24T11:55:15.347Z',
      dob: null,
      firstName: 'Grant',
      handedness: null,
      height: "5'9",
      highSchool: 'Haverford School',
      hometown: 'Doylestown, PA',
      igUrl: 'https://www.instagram.com/grantament/?hl=en',
      injuryDesc: null,
      injuryStatus: 'H',
      isCaptain: null,
      jerseyNum: '16',
      lastName: 'Ament',
      lastNameSuffix: null,
      nickname: null,
      officialId: '000391',
      playerBio:
        'Selected first overall in the 2020 PLL College Draft by Archers LC, Ament enters the PLL on the back of a storied career at Penn State. Ament left the Nittany Lions as the school’s career leader in points (274) and assists (183), both also Big Ten records. Ament’s 2019 season saw him set the NCAA, Big Ten and program record for assists in a single season (98) while breaking the NCAA tournament record with 25 points. Ament is an avid golfer in his free time and regularly plays 18 holes when he can. He lists former Philadelphia Eagles legend Brian Dawkins as his childhood hero.',
      position: 'A',
      positionLongName: 'Attack',
      profileUrl:
        'https://premierlacrosseleague.com/wp-content/uploads/2020/07/Archers_Grant_Ament.jpg',
      scratch: null,
      teamId: 'ARC',
      twUrl: 'https://twitter.com/grantament?lang=en',
      updatedAt: '2020-08-05T22:13:08.393Z',
      weight: '165',
      yearsExp: '1',
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getPlayerTwoInfo()).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.stats.premierlacrosseleague.com/v1.00/${infoEndpoint}/${playerTwoId}/2020`
    );
  });

  it('fetches erroneously player two info data from from the PLL API API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
  });
});

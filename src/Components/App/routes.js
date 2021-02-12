import axios from 'axios';

const getPlayerInfoAndStats = (endpoint, playerId, setState, setLoaded, setError) => {
  axios
    .get(
      `https://api.stats.premierlacrosseleague.com/v1.00/${endpoint}/${playerId}/2020`
    )
    .then(
      (res) => {
        setLoaded(true);
        setState(res.data);
      },
      (err) => {
        setLoaded(true);
        setError(err);
      }
    );
};

export default getPlayerInfoAndStats;

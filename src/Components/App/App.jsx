import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from '../Spinner/Spinner';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import PlayerStats from '../PlayerStats/PlayerStats';

import './App.scss';

const App = () => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [playerOneInfo, setPlayerOneInfo] = useState({});
  const [playerTwoInfo, setPlayerTwoInfo] = useState({});
  const [playerOneStats, setPlayerOneStats] = useState({});
  const [playerTwoStats, setPlayerTwoStats] = useState({});

  const playerOneId = '000354';
  const playerTwoId = '000391';
  const infoEndpoint = 'players';
  const statsEndpoint = 'players-stats';

  const getPlayerInfoAndStats = (endpoint, playerId, setState) => {
    axios
      .get(
        `https://api.stats.premierlacrosseleague.com/v1.00/${endpoint}/${playerId}/2020`
      )
      .then(
        (res) => {
          setIsLoaded(true);
          setState(res.data);
          // console.log('data: ', res.data);
        },
        (err) => {
          setIsLoaded(true);
          setErr(err);
        }
      );
  };

  useEffect(() => {
    getPlayerInfoAndStats(infoEndpoint, playerOneId, setPlayerOneInfo);
    getPlayerInfoAndStats(infoEndpoint, playerTwoId, setPlayerTwoInfo);
    getPlayerInfoAndStats(statsEndpoint, playerOneId, setPlayerOneStats);
    getPlayerInfoAndStats(statsEndpoint, playerTwoId, setPlayerTwoStats);
  }, []);

  if (err) {
    return (
      <div>
        Error:
        {err.message}
      </div>
    );
  }
  if (!isLoaded) {
    return <Spinner />;
  }
  return (
    <div>
      <PlayerInfo playerInfo={playerOneInfo} />
      <PlayerStats playerStats={playerOneStats} />
      <PlayerInfo playerInfo={playerTwoInfo} />
      <PlayerStats playerStats={playerTwoStats} />
    </div>
  );
};

export default App;

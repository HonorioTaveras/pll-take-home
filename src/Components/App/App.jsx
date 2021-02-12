import React, { useState, useEffect } from 'react';
import axios from 'axios';

import getPlayerInfoAndStats from './routes';

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

  useEffect(() => {
    getPlayerInfoAndStats(
      infoEndpoint,
      playerOneId,
      setPlayerOneInfo,
      setIsLoaded,
      setErr
    );
    getPlayerInfoAndStats(
      infoEndpoint,
      playerTwoId,
      setPlayerTwoInfo,
      setIsLoaded,
      setErr
    );
    getPlayerInfoAndStats(
      statsEndpoint,
      playerOneId,
      setPlayerOneStats,
      setIsLoaded,
      setErr
    );
    getPlayerInfoAndStats(
      statsEndpoint,
      playerTwoId,
      setPlayerTwoStats,
      setIsLoaded,
      setErr
    );
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
    <div className='app-container'>
      <PlayerInfo playerInfo={playerOneInfo} />
      <PlayerStats PlayerStats={playerOneStats} />
      <div className='player-divider' />
      <PlayerInfo playerInfo={playerTwoInfo} />
      <PlayerStats PlayerStats={playerTwoStats} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';

import {
  getPlayerOneInfo,
  getPlayerOneStats,
  getPlayerTwoInfo,
  getPlayerTwoStats,
} from './routes';

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

  useEffect(() => {
    getPlayerOneInfo().then(
      (res) => {
        setIsLoaded(true);
        setPlayerOneInfo(res.data);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      }
    );
    getPlayerOneStats().then(
      (res) => {
        setIsLoaded(true);
        setPlayerOneStats(res.data);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      }
    );
    getPlayerTwoInfo().then(
      (res) => {
        setIsLoaded(true);
        setPlayerTwoInfo(res.data);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      }
    );
    getPlayerTwoStats().then(
      (res) => {
        setIsLoaded(true);
        setPlayerTwoStats(res.data);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      }
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

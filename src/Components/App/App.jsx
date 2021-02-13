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
    const fetchPlayerOneInfo = async () => {
      setIsLoaded(true);
      setErr(err);

      try {
        const result = await getPlayerOneInfo();

        setPlayerOneInfo(result.data);
      } catch (err) {
        setErr(err);
      }

      setIsLoaded(true);
    };

    const fetchPlayerOneStats = async () => {
      setIsLoaded(true);
      setErr(err);

      try {
        const result = await getPlayerOneStats();

        setPlayerOneStats(result.data);
      } catch (err) {
        setErr(err);
      }

      setIsLoaded(true);
    };

    const fetchPlayerTwoInfo = async () => {
      setIsLoaded(true);
      setErr(err);

      try {
        const result = await getPlayerTwoInfo();

        setPlayerTwoInfo(result.data);
      } catch (err) {
        setErr(err);
      }

      setIsLoaded(true);
    };

    const fetchPlayerTwoStats = async () => {
      setIsLoaded(true);
      setErr(err);

      try {
        const result = await getPlayerTwoStats();

        setPlayerTwoStats(result.data);
      } catch (err) {
        setErr(err);
      }

      setIsLoaded(true);
    };

    fetchPlayerOneInfo();
    fetchPlayerOneStats();
    fetchPlayerTwoInfo();
    fetchPlayerTwoStats();
  }, [err]);

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

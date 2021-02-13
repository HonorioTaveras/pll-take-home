import React, { useState, useEffect } from 'react';

import { getPlayerOneInfo } from './routes';

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
        console.log('DATA1: ', res.data);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      }
    );
    // getPlayerInfoAndStats(statsEndpoint, playerOneId).then(
    //   (res) => {
    //     setIsLoaded(true);
    //     setPlayerOneInfo(res.data);
    //     console.log('DATA2: ', res.data);
    //   },
    //   (err) => {
    //     setIsLoaded(true);
    //     setErr(err);
    //   }
    // );
    // getPlayerInfoAndStats(infoEndpoint, playerTwoId).then(
    //   (res) => {
    //     setIsLoaded(true);
    //     setPlayerOneInfo(res.data);
    //     console.log('DATA3: ', res.data);
    //   },
    //   (err) => {
    //     setIsLoaded(true);
    //     setErr(err);
    //   }
    // );
    // getPlayerInfoAndStats(statsEndpoint, playerTwoId).then(
    //   (res) => {
    //     setIsLoaded(true);
    //     setPlayerOneInfo(res.data);
    //     console.log('DATA4: ', res.data);
    //   },
    //   (err) => {
    //     setIsLoaded(true);
    //     setErr(err);
    //   }
    // );
    // getPlayerInfoAndStats(
    //   infoEndpoint,
    //   playerOneId,
    //   setPlayerOneInfo,
    //   setIsLoaded,
    //   setErr
    // );
    // getPlayerInfoAndStats(
    //   infoEndpoint,
    //   playerTwoId,
    //   setPlayerTwoInfo,
    //   setIsLoaded,
    //   setErr
    // );
    // getPlayerInfoAndStats(
    //   statsEndpoint,
    //   playerOneId,
    //   setPlayerOneStats,
    //   setIsLoaded,
    //   setErr
    // );
    // getPlayerInfoAndStats(
    //   statsEndpoint,
    //   playerTwoId,
    //   setPlayerTwoStats,
    //   setIsLoaded,
    //   setErr
    // );
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

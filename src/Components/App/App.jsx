import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';

const App = () => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const getPlayerOneInfo = () => {
    axios
      .get(
        'https://api.stats.premierlacrosseleague.com/v1.00/players/000354/2020'
      )
      .then(
        (res) => {
          setIsLoaded(true);
          console.log('player 1 info: ', res.data);
        },
        (err) => {
          setIsLoaded(true);
          setErr(err);
        }
      );
  };

  const getPlayerTwoInfo = () => {
    axios
    .get(
      'https://api.stats.premierlacrosseleague.com/v1.00/players/000391/2020'
    )
    .then(
      (res) => {
        setIsLoaded(true);
        console.log('player 2 info: ', res.data);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      }
    );
  }

  useEffect(() => {
    getPlayerOneInfo();
    getPlayerTwoInfo();
  }, []);

  return <div className='App'>Sup dirtbag.</div>;
};

export default App;

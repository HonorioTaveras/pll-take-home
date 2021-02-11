import React from 'react';

import './PlayerStats.scss';

const PlayerStats = ({
  PlayerStats: {
    points,
    onePointGoals,
    twoPointGoals,
    assists,
    turnovers,
    shots,
    shotPct,
    shotsOnGoal,
    shotsOnGoalPct,
    twoPointShots,
    twoPointShotsOnGoal,
    twoPointShotsOnGoalPct,
    groundBalls,
    causedTurnovers,
    numPenalties,
    PIM,
  },
}) => (
  <div className='player-stats-container'>
    <div className='row-1'>
      <div className='row-1-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
      <div className='row-1-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
      <div className='row-1-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
      <div className='row-1-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
      <div className='row-1-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
    </div>
    <div className='row-2'>
      <div className='row-2-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
      <div className='row-2-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
      <div className='row-2-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
      <div className='row-2-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
      <div className='row-2-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
      <div className='row-2-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
      <div className='row-2-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
    </div>
    <div className='row-3'>
      <div className='row-3-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
      <div className='row-3-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
      <div className='row-3-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
      <div className='row-3-col'>
        <div className='title'></div>
        <div className='content'></div>
      </div>
    </div>
  </div>
);

export default PlayerStats;

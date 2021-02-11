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
        <div className='title'>Points</div>
        <div className='content'>{points}</div>
      </div>
      <div className='row-1-col'>
        <div className='title'>1 Pt Goals</div>
        <div className='content'>{onePointGoals}</div>
      </div>
      <div className='row-1-col'>
        <div className='title'>2 Pt Goals</div>
        <div className='content'>{twoPointGoals}</div>
      </div>
      <div className='row-1-col'>
        <div className='title'>Assists</div>
        <div className='content'>{assists}</div>
      </div>
      <div className='row-1-col'>
        <div className='title'>Turnovers</div>
        <div className='content'>{turnovers}</div>
      </div>
    </div>
    <div className='row-2'>
      <div className='row-2-col'>
        <div className='title'>Shots</div>
        <div className='content'>{shots}</div>
      </div>
      <div className='row-2-col'>
        <div className='title'>Shot %</div>
        <div className='content'>{Math.round(shotPct * 100)}</div>
      </div>
      <div className='row-2-col'>
        <div className='title'>SOG</div>
        <div className='content'>{shotsOnGoal}</div>
      </div>
      <div className='row-2-col'>
        <div className='title'>SOG %</div>
        <div className='content'>{Math.round(shotsOnGoalPct * 100)}</div>
      </div>
      <div className='row-2-col'>
        <div className='title'>2 PT Sh</div>
        <div className='content'>{twoPointShots}</div>
      </div>
      <div className='row-2-col'>
        <div className='title'>2 Pt SOG</div>
        <div className='content'>{twoPointShotsOnGoal}</div>
      </div>
      <div className='row-2-col'>
        <div className='title'>2 Pt SOG %</div>
        <div className='content'>{Math.round(twoPointShotsOnGoalPct * 100)}</div>
      </div>
    </div>
    <div className='row-3'>
      <div className='row-3-col'>
        <div className='title'>GB</div>
        <div className='content'>{groundBalls}</div>
      </div>
      <div className='row-3-col'>
        <div className='title'>CT</div>
        <div className='content'>{causedTurnovers}</div>
      </div>
      <div className='row-3-col'>
        <div className='title'>Pen</div>
        <div className='content'>{numPenalties}</div>
      </div>
      <div className='row-3-col'>
        <div className='title'>PIM</div>
        <div className='content'>{PIM}</div>
      </div>
    </div>
  </div>
);

export default PlayerStats;

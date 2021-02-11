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
}) => {
  console.log('playerStats from playerStats component: ', PlayerStats);
  return <div>Sup from PlayerStats component!</div>;
};

export default PlayerStats;

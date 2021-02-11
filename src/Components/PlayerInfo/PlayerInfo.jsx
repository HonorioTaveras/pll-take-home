import React from 'react';

import './PlayerInfo.scss';

const PlayerInfo = ({
  playerInfo: {
    firstName,
    lastName,
    profileUrl,
    position,
    jerseyNum,
    height,
    weight,
    college,
    hometown,
    highSchool,
    playerBio,
  },
  playerInfo,
}) => {
  console.log('playerInfo from PlayerInfo component: ', playerInfo);
  return (
    <div className='player-info-container'>
      <div className='row-1'>
        <div className='player-name'>
          {firstName} {lastName}
        </div>
        <div className='player-image'>
          <img src={profileUrl} alt={`${firstName} ${lastName}`} />
        </div>
        <div className='player-jersey-and-position'>
          <span className='jersey-num'>{jerseyNum}</span>{' '}
          <span className='position'>{position}</span>
        </div>
      </div>
      <div className='row-2'>
        <div className='height'>{height}</div>
        <div className='weight'>{weight}</div>
        <div className='college'>{college}</div>
        <div className='hometown'>{hometown}</div>
        <div className='highSchool'>{highSchool}</div>
      </div>
      <div className='player-bio'>{playerBio}</div>
    </div>
  );
};

export default PlayerInfo;

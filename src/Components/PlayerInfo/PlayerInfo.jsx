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
  // console.log('playerInfo from PlayerInfo component: ', playerInfo);
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
        <div className='row-2-col'>
          <div className='title'>Height</div>
          <div className='content'>{height}</div>
        </div>
        <div className='row-2-col'>
          <div className='title'>Weight</div>
          <div className='content'>{weight}</div>
        </div>
        <div className='row-2-col'>
          <div className='title'>College</div>
          <div className='content'>{college}</div>
        </div>
        <div className='row-2-col'>
          <div className='title'>Hometown</div>
          <div className='content'>{hometown}</div>
        </div>
        <div className='row-2-col'>
          <div className='title'>High School</div>
          <div className='content'>{highSchool}</div>
        </div>
      </div>
      <div className='player-bio'>
        <p className='title'>PlayerBio: </p>
        <p className='content'>{playerBio}</p>
      </div>
    </div>
  );
};

export default PlayerInfo;

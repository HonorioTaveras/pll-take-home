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
        <div className='height-container'>
          <p className='title'>Height</p>
          <p className='content'>{height}</p>
        </div>
        <div className='weight-container'>
          <p className='title'>Weight</p>
          <p className='content'>{weight}</p>
        </div>
        <div className='college-container'>
          <p className='title'>College</p>
          <p className='content'>{college}</p>
        </div>
        <div className='hometown-container'>
          <p className='title'>Hometown</p>
          <p className='content'>{hometown}</p>
        </div>
        <div className='highSchool-container'>
          <p className='title'>High School</p>
          <p className='content'>{highSchool}</p>
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

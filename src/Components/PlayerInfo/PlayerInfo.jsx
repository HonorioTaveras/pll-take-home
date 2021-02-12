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
}) => (
  <div className='player-info-container'>
    <div className='row-1'>
      <div className='player-name header'>
        {firstName} {lastName}
      </div>
      <div className='player-image'>
        <img src={profileUrl} alt={`${firstName} ${lastName}`} />
      </div>
      <div className='player-jersey-and-position'>
        <span className='jersey-and-position header'>{jerseyNum}</span>
        <span className='divider' />
        <span className='jersey-and-position header'>{position}</span>
      </div>
    </div>
    <div className='row-divider' />
    <div className='row-2'>
      <div className='row-2-col'>
        <div className='title header'>Height</div>
        <div className='content'>{height}</div>
      </div>
      <div className='row-2-col'>
        <div className='title header'>Weight</div>
        <div className='content'>{weight}</div>
      </div>
      <div className='row-2-col'>
        <div className='title header'>College</div>
        <div className='content'>{college}</div>
      </div>
      <div className='row-2-col'>
        <div className='title header'>Hometown</div>
        <div className='content'>{hometown}</div>
      </div>
      <div className='row-2-col'>
        <div className='title header'>High School</div>
        <div className='content'>{highSchool}</div>
      </div>
    </div>
    <div className='row-divider row-bottom' />
    <div className='row-divider' />
    <div className='player-bio'>
      <p className='title header'>PlayerBio</p>
      <p className='content'>{playerBio}</p>
    </div>
    <div className='row-divider row-bottom' />
  </div>
);

export default PlayerInfo;

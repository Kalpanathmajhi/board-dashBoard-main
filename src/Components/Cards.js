import React from 'react';
import './Cards.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card" id='card1'>
        <div className="card-icon">
          <AttachMoneyIcon />
        </div>
        <div className="card-content">
          <h3>Total Revenue</h3>
          <h4>$ 2,129,430</h4>
        </div>
      </div>
      <div className="card" id='card2'>
        <div className="card-icon">
          <LocalOfferIcon/>
        </div>
        <div className="card-content">
          <h3>Total Transactions</h3>
          <h4>1,520</h4>
        </div>
      </div>
      <div className="card" id='card3'>
        <div className="card-icon">
          <ThumbUpIcon/>
        </div>
        <div className="card-content">
          <h3>Total Likes</h3>
          <h4>9,721</h4>
        </div>
      </div>
      <div className="card" id='card4'>
        <div className="card-icon">
          <GroupAddIcon/>
        </div>
        <div className="card-content">
          <h3>Total Users</h3>
          <h4>892</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from 'react'
import Caro from './Caro';

function CriticCard() {
  return (
  <div>
    <h1 className = "bg-gray-600 font-bold text-center text-4xl py-5 lg:text-6xl text-gray-100">Recent Critic Reviews</h1>
    <Caro />
  </div>
  );
}

export default CriticCard;

import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import userData from './Profile/user.json';
import statisticalData from './Statistics/data.json';
import friends from './FriendsList/friends.json';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transaction from './TransactionHistory/transaction.json';

const App = () => {
  return (
    <>
      <Profile data={userData} />
      <Statistics title="File upload" stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
};

export default App;

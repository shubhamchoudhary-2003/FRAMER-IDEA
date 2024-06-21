"use client"
import React, { useState } from 'react';

import CountryList from '../CountriesList';
import RegionsPage from '../RegionsPage';

const MainPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('local');

  return (
    <div className="p-4  align-middle  pt-10">
      <div className="flex space-x-4 mb-4 align-middle justify-center">
        <button
          className={`px-4 py-2 rounded ${selectedTab === 'local' ? 'bg-blue-200' : 'bg-blue-100'}`}
          onClick={() => setSelectedTab('local')}
        >
          Local eSIMs
        </button>
        <button
          className={`px-4 py-2 rounded ${selectedTab === 'regional' ? 'bg-blue-200' : 'bg-blue-100'}`}
          onClick={() => setSelectedTab('regional')}
        >
          Regional and Global eSIMs
        </button>
      </div>
      <div>
        {selectedTab === 'local' ? <CountryList /> : <RegionsPage/> }
      </div>
    </div>
  );
};

export default MainPage;

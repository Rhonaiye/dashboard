'use client'
import React, { useState } from 'react';
import { FaUniversity, FaCog, FaTag } from 'react-icons/fa';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const navigationItems = [
    { label: 'Piggybank', active: false },
    { label: 'Safelock', active: false },
    { label: 'Targets', active: false },
    { label: 'Flex Naira', active: true },
    { label: 'Flex Dollar', active: false },
  ];

  const transactions = [
    {
      type: 'debit',
      description: 'Withdrawal Made',
      date: 'Sat, 14 Sep 2024 10:52:26 GMT',
      amount: '₦-27,500.00'
    },
    {
      type: 'debit',
      description: 'Dollar purchase Ref ID: DLFLX140824t5a23f362304',
      date: 'Sat, 14 Sep 2024 10:50:53 GMT',
      amount: '₦-1,715.00'
    },
    {
      type: 'credit',
      description: 'Transfer from OLADOKUN SAMUEL TOBI********',
      date: 'Sat, 14 Sep 2024 10:42:41 GMT',
      amount: '₦30,000.00'
    },
    {
      type: 'debit',
      description: 'Withdrawal Made',
      date: 'Tue, 10 Sep 2024 10:37:38 GMT',
      amount: '₦-249,000.00'
    },
    {
      type: 'credit',
      description: 'Transfer from Paystack',
      date: 'Tue, 10 Sep 2024 07:46:43 GMT',
      amount: '₦100,000.00'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Top Navigation */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-pink-500 mb-4">Flex Naira</h1>
        <div className="flex space-x-6 border-b border-gray-200 overflow-x-auto">
            
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className={`pb-2 px-1 ${
                item.active 
                  ? 'border-b-2 border-pink-500 text-pink-500' 
                  : 'text-gray-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2">

          {/* Account Balance */}
          <div className="bg-white rounded-lg border-[1px] p-6 shadow-sm mb-6">
            <div className="mb-4">
                <p className="text-sm text-gray-500">FLEX ACCOUNT (12%)</p>
                <h2 className="text-3xl font-bold text-[#DC4798]">₦1,085.38</h2>
                <p className="text-sm text-gray-500">Available Balance: <span className="text-pink-500">₦85.38</span></p>
            </div>
            
            <div className="flex justify-between border-t pt-4 text-black ">
              <button className="flex items-center text-sm ">
                <span className="mr-2 text-[#DC4798]">  <FaTag/> </span>
                New Label
              </button>

              <button className="flex items-center text-sm ">
                <span className="mr-2 text-[#DC4798]"> <FaUniversity/> </span>
                Withdraw
              </button>

              <button className="flex items-center text-sm ">
                <span className="mr-2 text-[#DC4798]"> <FaCog/>  </span>
                Settings
              </button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border-[1px]">
              <p className="text-sm text-gray-500">Interest in 4 days</p>
              <p className="font-bold">₦215.44 <span className="text-sm text-gray-500">at (12% p.a)</span></p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-[1px]">
              <p className="text-sm text-gray-500">Withdrawals</p>
              <p className="font-bold">2 <span className="text-sm text-gray-500">this month</span></p>
            </div>
          </div>



          {/* Transactions */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-[1px]">
            <div className="flex space-x-4 mb-6">
              {['All', 'Credit', 'Debit'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1 rounded-full text-sm  ${
                    activeTab === tab 
                      ? 'bg-pink-500 text-white' 
                      : 'text-gray-500'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {transactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      transaction.type === 'credit' ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                    <div>
                      <p className="text-sm font-medium">{transaction.description}</p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <p className={`font-medium ${
                    transaction.type === 'credit' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {transaction.amount}
                  </p>
                </div>
              ))}
            </div>

            <button className="w-full text-center text-sm font-bold text-blue-600 mt-4">
              VIEW MORE TRANSACTIONS
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-1">
          <div className="rounded-lg p-6 mb-6">
            <button className="w-full bg-pink-500 text-white py-3 text-sm rounded-lg font-bold">
              GET ACCOUNT NUMBER
            </button>
          </div>

          {/* Flex Labels Chart */}
          <div className="bg-white border-[1px] rounded-lg p-6 shadow-sm max-sm:mb-10">
              <h3 className="text-center mb-6 text-sm border-b-[1px] font-bold pb-2">MY FLEX LABELS</h3>

              <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 rounded-full border-8 border-gray-600" style={{ borderLeftColor: 'transparent', transform: 'rotate(45deg)' }} />
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                   <p className="text-sm">Resavil</p>
                   <p className="font-bold">₦1,000.00</p>
              </div>
            </div>




            <div className="mt-6 space-y-2">
               <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Resavil</span>
                  <span className="text-sm font-medium">₦1,000.00</span>
                  <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded">92%</span>
               </div>

              <div className="flex justify-between items-center p-2 bg-pink-50 rounded">
                  <span className="text-sm">Available Flex Balance</span>
                  <span className="text-sm font-medium">₦85.38</span>
                  <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded">8%</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
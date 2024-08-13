import React, { useState, useEffect } from 'react';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import Header from './Header';
import Sidebar from './Sidebar';
import './Asserts/admin.css';
import axios from 'axios';

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const fetchPaymentDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/payment/all');
      setPaymentDetails(response.data);
      setShowPaymentDetails(true);
    } catch (error) {
      console.error('Failed to fetch payment details', error);
    }
  };

  const data = [
    {
      name: 'Educational Toys',
      23: 4000,
      24: 2400,
      amt: 2500,
    },
    {
      name: 'Board Games',
      23: 3000,
      24: 4398,
      amt: 2210,
    },
    {
      name: 'Action Figures',
      23: 2000,
      24: 9800,
      amt: 2290,
    },
    {
      name: 'Puzzles',
      B: 2780,
      23: 3908,
      24: 2000,
    },
    {
      name: 'Dolls',
      B: 1890,
      23: 4800,
      24: 6181,
    },
  ];

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} toggleProfile={toggleProfile} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <main className='main-container'>
        <div className='main-title'>
          <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
          <div className='card'>
            <div className='card-inner'>
              <h3>PRODUCTS</h3>
              <BsFillArchiveFill className='card_icon' />
            </div>
            <h1>300</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>CATEGORIES</h3>
              <BsFillGrid3X3GapFill className='card_icon' />
            </div>
            <h1>12</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>CUSTOMERS</h3>
              <BsPeopleFill className='card_icon' />
            </div>
            <h1>33000</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>ALERTS</h3>
              <BsFillBellFill className='card_icon' />
            </div>
            <h1>42</h1>
          </div>
        </div>

        <div className='charts'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='23' fill='#8884d8' />
              <Bar dataKey='24' fill='#82ca9d' />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='23'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
              <Line type='monotone' dataKey='24' stroke='#82ca9d' />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Payment Details Table */}
        {showPaymentDetails && (
          <div className='payment-details'>
            <h3>Payment Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Card Number</th>
                  <th>Name on Card</th>
                  <th>Expiry Date</th>
                  <th>CVV</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {paymentDetails.length > 0 ? (
                  paymentDetails.map((detail, index) => (
                    <tr key={index}>
                      <td>{detail.cardNumber}</td>
                      <td>{detail.nameOnCard}</td>
                      <td>{detail.expiryDate}</td>
                      <td>{detail.cvv}</td>
                      <td>{detail.ph}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No payment details available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        <button onClick={fetchPaymentDetails}>Show Payment</button>
      </main>

      {/* Profile Popup */}
      {showProfile && user && (
        <div className='profile-popup'>
          <h3>User Profile</h3>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {/* Additional details can be added here */}
          <button onClick={toggleProfile}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Admin;

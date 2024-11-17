import React, { useState } from 'react';
import axios from 'axios';

const NewCampaign = () => {
  const [campaignData, setCampaignData] = useState({
    name: '',
    totalSpend: '',
    visitCount: '',
    lastVisit: '',
    logic: 'AND', // Default logic
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/campaigns', {
        name: campaignData.name,
        audienceFilter: {
          totalSpend: campaignData.totalSpend || undefined,
          visitCount: campaignData.visitCount || undefined,
          lastVisit: campaignData.lastVisit || undefined,
          logic: campaignData.logic,
        },
      });
      setMessage(response.data.message);
      setCampaignData({
        name: '',
        totalSpend: '',
        visitCount: '',
        lastVisit: '',
        logic: 'AND',
      });
    } catch (error) {
      console.error('Error creating campaign:', error);
      setMessage('Failed to create campaign.');
    }
  };

  return (
    <div>
      <h2>Create New Campaign</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Campaign Name:
          <input
            type="text"
            name="name"
            value={campaignData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Minimum Total Spend:
          <input
            type="number"
            name="totalSpend"
            value={campaignData.totalSpend}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Maximum Visit Count:
          <input
            type="number"
            name="visitCount"
            value={campaignData.visitCount}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Visit Before:
          <input
            type="date"
            name="lastVisit"
            value={campaignData.lastVisit}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Logic:
          <select
            name="logic"
            value={campaignData.logic}
            onChange={handleChange}
          >
            <option value="AND">AND</option>
            <option value="OR">OR</option>
          </select>
        </label>
        <br />
        <button type="submit">Create Campaign</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default NewCampaign;

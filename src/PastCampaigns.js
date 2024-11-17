import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PastCampaigns = ({ onSelectCampaign }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/campaigns');
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, []);

  if (loading) return <p>Loading campaigns...</p>;

  return (
    <div className="container my-4">
      <h2 className="text-center text-primary">Past Campaigns</h2>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Audience Size</th>
            <th>Messages Sent</th>
            <th>Messages Failed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign._id}>
              <td>{campaign.name}</td>
              <td>{campaign.audienceSize}</td>
              <td>{campaign.messagesSent}</td>
              <td>{campaign.messagesFailed}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => onSelectCampaign(campaign._id)}
                >
                  Select Campaign
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PastCampaigns;

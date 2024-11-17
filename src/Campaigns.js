import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null); // Track selected campaign
  const [customerIds, setCustomerIds] = useState('');
  const [messageTemplate, setMessageTemplate] = useState('');

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/campaigns');
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };
    fetchCampaigns();
  }, []);

  const handleAddAudience = async () => {
    if (!selectedCampaign || !customerIds) {
      alert('Please select a campaign and provide customer IDs.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3000/api/campaigns/${selectedCampaign._id}/audience`,
        { customerIds: customerIds.split(',').map((id) => id.trim()) }
      );
      alert(response.data.message);
    } catch (error) {
      console.error('Error adding audience:', error);
      alert('Failed to add audience.');
    }
  };

  const handleSendMessages = async () => {
    if (!selectedCampaign || !messageTemplate) {
      alert('Please select a campaign and provide a message template.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3000/api/campaigns/${selectedCampaign._id}/send`,
        { messageTemplate }
      );
      alert(response.data.message);
    } catch (error) {
      console.error('Error sending messages:', error);
      alert('Failed to send messages.');
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center text-primary">All Campaigns</h2>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Audience Size</th>
            <th>Messages Sent</th>
            <th>Messages Failed</th>
            <th>Select</th>
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
                  className={`btn ${selectedCampaign?._id === campaign._id ? 'btn-success' : 'btn-primary'}`}
                  onClick={() => setSelectedCampaign(campaign)}
                >
                  {selectedCampaign?._id === campaign._id ? 'Selected' : 'Select'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCampaign && (
        <div className="mt-4">
          <h4>Selected Campaign: {selectedCampaign.name}</h4>
          <div>
            <h5>Add Audience</h5>
            <input
              type="text"
              className="form-control"
              placeholder="Enter customer IDs separated by commas"
              value={customerIds}
              onChange={(e) => setCustomerIds(e.target.value)}
            />
            <button className="btn btn-success mt-2" onClick={handleAddAudience}>
              Add Audience
            </button>
          </div>
          <div className="mt-4">
            <h5>Send Messages</h5>
            <input
              type="text"
              className="form-control"
              placeholder="Enter message template (e.g., 'Hello {{name}}')"
              value={messageTemplate}
              onChange={(e) => setMessageTemplate(e.target.value)}
            />
            <button className="btn btn-success mt-2" onClick={handleSendMessages}>
              Send Messages
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaigns;

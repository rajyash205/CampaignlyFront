import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CampaignDetails = ({ campaignId }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/campaigns/${campaignId}/logs`);
        setLogs(response.data);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };
    fetchLogs();
  }, [campaignId]);

  if (!campaignId) return <p>Please select a campaign to view its details.</p>;

  return (
    <div className="container my-4">
      <h2 className="text-center text-primary">Campaign Details</h2>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Delivery Status</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log._id}>
              <td>{log.audienceId.name}</td>
              <td>{log.audienceId.email}</td>
              <td>{log.status}</td>
              <td>{log.deliveryStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunicationLogs = ({ campaignId }) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/campaigns/${campaignId}/logs`);
        setLogs(response.data);
      } catch (error) {
        console.error('Error fetching logs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLogs();
  }, [campaignId]);

  if (loading) return <p>Loading communication logs...</p>;

  return (
    <div className="container my-4">
      <h2 className="text-center text-primary">Communication Logs</h2>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Audience Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Sent At</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log._id}>
              <td>{log.audienceId.name}</td>
              <td>{log.audienceId.email}</td>
              <td>{log.status}</td>
              <td>{new Date(log.sentAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommunicationLogs;

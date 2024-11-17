import React from 'react';

const Navigation = ({ onSelectSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Campaignly</span>
        <div className="navbar-nav">
          <button
            className="btn btn-link nav-link text-light"
            onClick={() => onSelectSection('dashboard')}
          >
            Dashboard
          </button>
          <button
            className="btn btn-link nav-link text-light"
            onClick={() => onSelectSection('newCustomer')}
          >
            Add Customer
          </button>
          <button
            className="btn btn-link nav-link text-light"
            onClick={() => onSelectSection('orders')}
          >
            Orders
          </button>
          <button
            className="btn btn-link nav-link text-light"
            onClick={() => onSelectSection('newCampaign')}
          >
            Create Campaign
          </button>
          <button
            className="btn btn-link nav-link text-light"
            onClick={() => onSelectSection('campaigns')}
          >
            Campaigns
          </button>
          <button
            className="btn btn-link nav-link text-light"
            onClick={() => onSelectSection('pastCampaigns')}
          >
            Past Campaigns
          </button>
          <button
            className="btn btn-link nav-link text-light"
            onClick={() => onSelectSection('CampaignDetails')}
          >
            CampaignDetails
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

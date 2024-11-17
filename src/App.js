import React, { useState } from 'react';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import NewCustomer from './NewCustomer';
import Orders from './Orders';
import NewCampaign from './NewCampaign';
import Campaigns from './Campaigns';
import PastCampaigns from './PastCampaigns';
import CampaignDetails from './CampaignDetails';

const App = () => {
  const [currentSection, setCurrentSection] = useState('dashboard'); // Manage the current section
  const [selectedCampaignId, setSelectedCampaignId] = useState(null); // Track the selected campaign ID

  const handleSelectCampaign = (campaignId) => {
    setSelectedCampaignId(campaignId); // Update the selected campaign ID
    setCurrentSection('campaignDetails'); // Navigate to the Campaign Details page
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'newCustomer':
        return <NewCustomer />;
      case 'orders':
        return <Orders />;
      case 'newCampaign':
        return <NewCampaign />;
      case 'campaigns':
        return <Campaigns onSelectCampaign={handleSelectCampaign} />;
      case 'pastCampaigns':
        return <PastCampaigns onSelectCampaign={handleSelectCampaign} />;
      case 'campaignDetails':
        return <CampaignDetails campaignId={selectedCampaignId} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      {/* Navigation bar */}
      <Navigation onSelectSection={setCurrentSection} />
      {/* Render the current section */}
      {renderSection()}
    </div>
  );
};

export default App;

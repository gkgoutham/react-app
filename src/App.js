import React from 'react';
import { Container } from 'react-bootstrap'; 
import PriceApproval from './components/PriceApprovals/PriceApprovals';
import PriceApprovalDetails from './components/PriceApprovalDetails/PriceApprovalDetails';

const App = () => {
  return (
    <Container> 
      <PriceApproval title="Pending Price Approvals"></PriceApproval>
    </Container>
  );
};

export default App;

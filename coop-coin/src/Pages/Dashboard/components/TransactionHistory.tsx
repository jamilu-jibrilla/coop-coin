import React from 'react';
import styled from 'styled-components';
import { DropdownIcon } from '../../../Icons';



const TransactionHistory: React.FC = () => {
  return (
    <TransactionContainer>
      <TransactionHeader>
        <TransactionTitle>Transaction History</TransactionTitle>
        <TransactionControls>
          <TransactionLegend>
            <LegendItem color="#485FE6" label="Withdrawals" />
            <LegendItem color="#9747FF" label="Deposits" />
          </TransactionLegend>
          <TransactionFilter>
            <FilterButton>
              <StatusIcon color='#485FE6' />
              <FilterText>This Month</FilterText>
              <DropdownIcon />
            </FilterButton>
          </TransactionFilter>
        </TransactionControls>
      </TransactionHeader>

      <TransactionGraph>
        <GraphImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/5693687d5031ded74d60659354a5c997cbd7d16c09f648aa7640dc66ba9a76d4?placeholderIfAbsent=true&apiKey=98de8e5d671344c7a27d95c80aa249d2" alt="Transaction history graph" />
      </TransactionGraph>
   
    </TransactionContainer>
  );
};

 const StatusIcon = styled.span<{ color: string }>`
  background-color: ${props => props.color};
  border-radius: 50%;
  align-self: stretch;
  display: flex;
  width: 16px;
  height: 16px;
  margin: auto 0;
`;

const TransactionContainer = styled.section`
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 4px 4px 40px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: Hind, sans-serif;
  color: #1b1b1b;
  justify-content: center;
  padding: 20px;
`;

const TransactionHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 40px 100px;
  overflow: hidden;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TransactionTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  align-self: stretch;
  margin: auto 0;
`;

const TransactionControls = styled.div`
  display: flex;
  min-width: 240px;
  align-items: center;
  gap: 16px;
  overflow: hidden;
  font-size: 14px;
  line-height: 1;
  justify-content: start;
  margin: auto 0;
`;

const TransactionLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 500;
  white-space: nowrap;
  justify-content: start;
  margin: auto 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

interface LegendItemProps {
  color: string;
  label: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => (
  <LegendItemWrapper>
    <LegendIcon color={color} />
    <LegendLabel>{label}</LegendLabel>
  </LegendItemWrapper>
);

const LegendItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  justify-content: start;
  margin: auto 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const LegendIcon = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  border-radius: 50%;
  width: 16px;
  height: 16px;
`;

const LegendLabel = styled.span`
  align-self: stretch;
  margin: auto 0;
`;

const TransactionFilter = styled.div``;

const FilterButton = styled.button`
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 400;
  justify-content: start;
  margin: auto 0;
  padding: 12px 16px;
  border: 1px solid #C9C8C8;
  cursor: pointer;
`;



const FilterText = styled.span`
  align-self: stretch;
  margin: auto 0;
`;


const TransactionGraph = styled.div`
  margin-top: 24px;
`;

const GraphImage = styled.img`
  aspect-ratio: 2.49;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 8px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default TransactionHistory;
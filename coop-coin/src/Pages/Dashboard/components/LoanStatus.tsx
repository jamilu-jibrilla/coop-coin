import React from 'react';
import styled from 'styled-components';
import RadialChart from './RadialChart';
import { DropdownIcon, MonthIcon } from '../../../Icons';

const LoanStatusCard: React.FC = () => {
  const pageData = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const chartArgs = {
    data: pageData,
    activeShape: {
      fill: 'red',
    },
    activeIndex: undefined,
  };

  return (
    <StyledCard>
      <HeaderWrapper>
        <HeaderTitle>Loan Status</HeaderTitle>
        <StatusButton>
          <MonthIcon />
          <StatusText>monthly</StatusText>
          <DropdownIcon />
        </StatusButton>
      </HeaderWrapper>
      
      {/* hide for now */}
      <span style={{display: 'none'}}> 
        <RadialChart {...chartArgs} />
      </span>
      
      <ChartImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/dde476f48ff10a567aea8fff5fe5d46c7e7e285d9afdb5e5e475922dda1b05a6?placeholderIfAbsent=true&apiKey=98de8e5d671344c7a27d95c80aa249d2" alt="Loan status chart" />
      
      <StatusListWrapper>
        {statusItems.map((item, index) => (
          <StatusItem key={index} isLast={index === statusItems.length - 1}>
            <StatusIcon color={item.color} />
            <StatusLabel>{item.label}</StatusLabel>
            <StatusPercentage>{item.percentage}</StatusPercentage>
          </StatusItem>
        ))}
      </StatusListWrapper>

    </StyledCard>
  );
};

const StyledCard = styled.section`
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  box-shadow: 4px 4px 40px -5px rgba(0, 0, 0, 0.05);
  max-width: 552px;
  flex-direction: column;
  font-family: Hind, sans-serif;
  color: #1b1b1b;
  padding: 20px;
  background: white;
`;

const HeaderWrapper = styled.header`
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

const HeaderTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  align-self: stretch;
  margin: auto 0;
`;

const StatusButton = styled.button`
  border-radius: 4px;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  line-height: 1;
  justify-content: start;
  margin: auto 0;
  padding: 12px 16px;
  border: 1px solid #c9c8c8;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;


const StatusText = styled.span`
  align-self: stretch;
  margin: auto 0;
`;

const ChartImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 240px;
  border-radius: 0;
  align-self: center;
  margin-top: 24px;
  max-width: 100%;
`;

interface StatusItem {
  color: string;
  label: string;
  percentage: string;
}

const statusItems: StatusItem[] = [
  { color: '#485FE6', label: 'Active', percentage: '60%' },
  { color: '#9747FF', label: 'Overdue', percentage: '30%' },
  { color: '#F7931A', label: 'Paid', percentage: '10%' },
];

const StatusListWrapper = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 14px;
  white-space: nowrap;
  line-height: 1;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const StatusItem = styled.li<{ isLast: boolean }>`
  border-bottom: ${props => props.isLast ? 'none' : '1px solid #c9c8c8'};
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  justify-content: start;
  flex-wrap: wrap;
  padding: 12px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const StatusIcon = styled.span<{ color: string }>`
  background-color: ${props => props.color};
  border-radius: 50%;
  align-self: stretch;
  display: flex;
  width: 16px;
  height: 16px;
  margin: auto 0;
`;

const StatusLabel = styled.span`
  font-weight: 400;
  align-self: stretch;
  flex: 1;
  flex-basis: 0%;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const StatusPercentage = styled.span`
  font-weight: 500;
  align-self: stretch;
  margin: auto 0;
`;

export default LoanStatusCard;
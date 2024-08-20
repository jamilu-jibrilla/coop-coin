import React from 'react';
import styled from 'styled-components';
import { Union1, Union2 } from '../../../Icons';

interface CardProps {
  icon: string;
  title: string;
  value: string | number;
  trend: string;
  backgroundColor: string;
  backgroundImage?: string;
}

const DashboardCard: React.FC<CardProps> = ({ icon, title, value, trend, backgroundColor }) => {
  return (
    <CardWrapper style={{ backgroundColor }}>
      <CardHeader>
        <IconWrapper>
          <img src={icon} alt="" />
        </IconWrapper>
        <TrendIndicator>
          <span className="trend-value">{trend}</span>
          <span className="trend-text">vs last month</span>
        </TrendIndicator>
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardValue>{value}</CardValue>
      </CardContent>
      <UnionContainter1>
        <Union2 />
      </UnionContainter1>

      <UnionContainter2>
        <Union1 />
      </UnionContainter2>
    </CardWrapper>
  );
};

const CardWrapper = styled.section`
  border-radius: 8px;
  position: relative;
  display: flex;
  min-width: 240px;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  flex: 1;
  flex-basis: 0%;
  padding: 16px;
`;

const CardHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 12px;
  position: relative;
  z-index: 4;
  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

const TrendIndicator = styled.div`
  color: #ffffff;
  font: 300 12px/2 Outfit, sans-serif;

  .trend-value {
    font-weight: 500;
  }
`;

const CardContent = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
  flex-direction: column;
  font-family: Hind, sans-serif;
  color: #ffffff;
  font-weight: 500;
`;

const CardTitle = styled.h2`
  font-size: 14px;
  line-height: 1;
  margin: 0;
`;

const CardValue = styled.p`
  font-size: 36px;
  line-height: 1;
  margin: 8px 0 0;
`;

const UnionContainter1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hiddden;
  z-index: 1;
  svg {
    width: 150px;
  }
`;

const UnionContainter2 = styled.div`
  position: absolute;
  bottom: -40px;
  right: 0;
  overflow: hiddden;
  z-index: 1;
  svg {
  width: 150px;
  }
`;


export default DashboardCard;
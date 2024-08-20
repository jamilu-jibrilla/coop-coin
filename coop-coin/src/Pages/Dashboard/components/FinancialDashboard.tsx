import React from 'react';
import styled from 'styled-components';
import { DropdownIcon, MonthIcon } from '../../../Icons';

interface BalanceItemProps {
  name: string;
  balance: string;
  color: string;
  width: string;
}

const FinancialDashboard: React.FC = () => {
  const data: BalanceItemProps[] = [
    {name: "Savings", balance: "₦100,500,000", color: "rgba(12, 92, 49, 1)", width: "100%"},
    {name: "Bond Investment", balance: "₦60,000,000",  color: "rgba(12, 92, 49, 1)", width: "80%"},
    {name: "E-mail Shopping", balance: "₦32,300,000", color: "rgba(12, 92, 49, 1)", width: "30%"},
    {name: "Coop-Ease Savings", balance: "₦40,000,000",  color: "rgba(12, 92, 49, 1)", width: "50%"},
    {name: "Project Loans", balance: "₦60,000,000",  color: "rgba(12, 92, 49, 1)", width: "90%"},
  ];

  return (
    <section>
      <Card>
        <AccountMenuItem />
        <Balances>
          {data.map((item, index) => (
            <BalanceItem key={index} item={item} />
          ))}
        </Balances>
      </Card>
    </section>
  );
}

const AccountMenuItem: React.FC = () => {
  return (
    <Menuitem>
      <AccountBalances>Account Balances</AccountBalances>
      <Button>
        <MonthIcon />     
        <Text>monthly</Text>
        <DropdownIcon />
      </Button>
    </Menuitem>
  );
};

const BalanceItem: React.FC<{ item: BalanceItemProps }> = ({ item }) => {
  return (
    <BalanceContainer>
      <BalanceHeader>
        <BalanceName>{item.name}</BalanceName>
        <BalanceAmount>{item.balance}</BalanceAmount>
      </BalanceHeader>
      <ProgressBar>
        <ProgressFill style={{ backgroundColor: item.color, width: item.width }} />
      </ProgressBar>
    </BalanceContainer>
  );
};

const Card = styled.div`
  border-radius: 8px;
  box-shadow: 4px 4px 40px -5px rgba(0, 0, 0, 0.05);
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  max-width: 837px;
  flex-direction: column;
  overflow: hidden;
  justify-content: start;
  padding: 20px;
`;

const Balances = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Menuitem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 40px 100px;
  overflow: hidden;
  font-family: Hind, sans-serif;
  color: rgba(27, 27, 27, 1);
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AccountBalances = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  align-self: stretch;
  margin: auto 0;
`;

const Button = styled.button`
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 1);
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
  border: 1px solid rgba(201, 200, 200, 1);
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Text = styled.div`
  align-self: stretch;
  margin: auto 0;
`;

const BalanceContainer = styled.article`
  display: flex;
  margin-top: 22px;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BalanceHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 40px 100px;
  font-family: Hind, sans-serif;
  font-weight: 400;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BalanceName = styled.h2`
  color: rgba(85, 85, 85, 1);
  font-size: 16px;
  align-self: stretch;
  margin: auto 0;
`;

const BalanceAmount = styled.div`
  color: rgba(27, 27, 27, 1);
  font-size: 18px;
  line-height: 1;
  align-self: stretch;
  margin: auto 0;
`;

const ProgressBar = styled.div`
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 12px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ProgressFill = styled.div`
  border-radius: 2px;
  display: flex;
  height: 28px;
`;

export default FinancialDashboard;
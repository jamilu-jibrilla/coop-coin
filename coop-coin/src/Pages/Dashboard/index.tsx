import styled from "styled-components"
import DashboardCard from "./components/DashboardCard";
import { DropdownIcon, DropdownIconWhite, MonthIcon } from "../../Icons";
import LoanStatusCard from "./components/LoanStatus";
import FinancialDashboard from "./components/FinancialDashboard";
import TransactionHistory from "./components/TransactionHistory";
import RecentActivitiesCard from "./components/RecentActivitiesCard";

const Dashboard: React.FC = () => {
    const cardData = [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/604b90d4e0762bed05cd69e555953909fdd9dfc4c158ef4f4ce7845a7b89aada?placeholderIfAbsent=true&apiKey=98de8e5d671344c7a27d95c80aa249d2",
          title: "Total Members",
          value: 1500,
          trend: "+10%",
          backgroundColor: "rgba(72, 95, 230, 1)",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/98031dcbb38a4ee30dfb6c3d02580dcb2ab7faec31b6dca292e7382bcb7632e7?placeholderIfAbsent=true&apiKey=98de8e5d671344c7a27d95c80aa249d2",
          title: "Total Savings Balance",
          value: "₦300,076,098.09",
          trend: "+10%",
          backgroundColor: "rgba(151, 71, 255, 1)",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aca03f481a8fa3163580d67036dc49209c487392fb572ac3365300aa1eefd072?placeholderIfAbsent=true&apiKey=98de8e5d671344c7a27d95c80aa249d2",
          title: "Active Loans",
          value: 25,
          trend: "+10%",
          backgroundColor: "rgba(12, 92, 49, 1)"
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/336b3b5aae083d797d929e5408e31e952667ce3a52f4db95e105281054323433?placeholderIfAbsent=true&apiKey=98de8e5d671344c7a27d95c80aa249d2",
          title: "Pending Transactions",
          value: 400,
          trend: "+10%",
          backgroundColor: "rgba(224, 123, 2, 1)",
        }
    ];

    const sampleActivities = [
      {
        name: 'John Doe',
        avatarSrc: 'https://randomuser.me/api/portraits/men/1.jpg',
        activity: 'Login',
        dateTime: '2024-08-20 10:30 AM',
      },
      {
        name: 'Jane Smith',
        avatarSrc: 'https://randomuser.me/api/portraits/women/2.jpg',
        activity: 'Login',
        dateTime: '2024-08-19 02:15 PM',
      },
      {
        name: 'Robert Brown',
        avatarSrc: 'https://randomuser.me/api/portraits/men/3.jpg',
        activity: 'Login',
        dateTime: '2024-08-18 11:45 AM',
      },
      {
        name: 'Emily White',
        avatarSrc: 'https://randomuser.me/api/portraits/women/4.jpg',
        activity: 'Login',
        dateTime: '2024-08-17 04:10 PM',
      },
    ];
    
    return ( 
      <DashboardWrapper>
        <Top>
          <Title>Overview</Title>
          <ButtonsContainer>
              <Button>
                <MonthIcon />
                <Text>monthly</Text>
                <DropdownIcon />
              </Button>
              
              <Button>View Member List</Button>
              
              <Button>Approve Transactions</Button>
              
              <Button2>
                <Text>Generate report</Text>
                <DropdownIconWhite />
              </Button2>
          </ButtonsContainer>
        </Top>
    
        <Container>
            <DashboardGrid>
                {cardData.map((card, index) => (
                <DashboardCard key={index} {...card} />
                ))}
            </DashboardGrid>
        </Container>
        
        <GridSection>
          <LoanStatusCard />
          <FinancialDashboard />
        </GridSection>

        <GridSection>
          <TransactionHistory />
          <RecentActivitiesCard activities={sampleActivities} />
        </GridSection>

      </DashboardWrapper>
    )
}

export default Dashboard

const DashboardWrapper = styled.div`
    width: 100%;
    height: 100%;
`


const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 40px 100px;
  font-family: Hind, sans-serif;
  color: rgba(27, 27, 27, 1);
  font-weight: 400;
  justify-content: space-between;
  flex-wrap: wrap;
`;


const Title = styled.div`
  align-self: stretch;
  gap: 8px;
  font-size: 24px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  min-width: 240px;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  line-height: 1;
  justify-content: start;
  flex-wrap: wrap;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Button = styled.div`
  border-radius: 4px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 1);
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
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


const Button2 = styled.div`
  border-radius: 4px;
  background-color: rgba(12, 92, 49, 1);
  cursor: pointer;
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 1);
  justify-content: start;
  margin: auto 0;
  padding: 12px 16px;
`;


const Container = styled.main`
  margin: 23px 0;
  @media (max-width: 991px) {
  }
`;

const GridSection = styled.main`
  display: grid;
  gap: 20px;
  margin-bottom: 25px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 991px) {
  }
`;


const DashboardGrid = styled.div`
  gap: 20px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 991px) {
    grid-template-columns: 1fr ;
  }
`;

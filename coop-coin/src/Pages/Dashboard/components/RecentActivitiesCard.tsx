import React from 'react';
import styled from 'styled-components';

interface ActivityData {
  name: string;
  avatarSrc: string;
  activity: string;
  dateTime: string;
}

interface RecentActivitiesCardProps {
  activities: ActivityData[];
}

const RecentActivitiesCard: React.FC<RecentActivitiesCardProps> = ({ activities }) => {
  return (
    <Card>
      <Header>
        <Title>Recent Activities</Title>
        <ViewButton>View activities</ViewButton>
      </Header>
      <ActivityList activities={activities} />
    </Card>
  );
};

const Card = styled.section`
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 4px 4px 40px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  max-width: 552px;
  flex-direction: column;
  overflow: hidden;
  font-family: Hind, sans-serif;
  color: #1b1b1b;
  justify-content: center;
  padding: 20px;
`;

const Header = styled.header`
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

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  align-self: stretch;
  margin: auto 0;
`;

const ViewButton = styled.button`
  align-self: stretch;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  margin: auto 0;
  padding: 12px 16px;
  border: 1px solid #c9c8c8;
  cursor: pointer;
`;






interface ActivityListProps {
  activities: ActivityData[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <ListContainer>
      <ListHeader>
        <HeaderItem>Member Name</HeaderItem>
        <HeaderItem>Activity</HeaderItem>
        <HeaderItem>Date & Time</HeaderItem>
      </ListHeader>
      <List>
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </List>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  justify-content: start;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ListHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  overflow: hidden;
  justify-content: start;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const HeaderItem = styled.div`
  align-self: stretch;
  flex: 1;
  border-color: #c9c8c8;
  border-bottom-width: 1px;
  overflow: hidden;
  padding: 16px;
  &:nth-child(2) {
    white-space: nowrap;
    @media (max-width: 991px) {
      white-space: initial;
    }
  }
`;

const List = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  justify-content: start;
  list-style-type: none;
  padding: 0;
  margin: 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;





const ActivityItem: React.FC<ActivityData> = ({ name, avatarSrc, activity, dateTime }) => {
  return (
    <ListItem>
      <MemberInfo>
        <Avatar src={avatarSrc} alt={`${name}'s avatar`} />
        <MemberName>{name}</MemberName>
      </MemberInfo>
      <ActivityInfo>{activity}</ActivityInfo>
      <DateTimeInfo>{dateTime}</DateTimeInfo>
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  overflow: hidden;
  justify-content: start;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MemberInfo = styled.div`
  background-color: #fff;
  border-color: #c9c8c8;
  border-bottom-width: 1px;
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  justify-content: start;
  flex: 1;
  flex-basis: 0%;
  margin: auto 0;
  padding: 11px 16px;
`;

const Avatar = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  border-radius: 24px;
  align-self: stretch;
  margin: auto 0;
`;

const MemberName = styled.span`
  align-self: stretch;
  flex: 1;
  flex-basis: 0%;
  margin: auto 0;
`;

const ActivityInfo = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: #fff;
  border-color: #c9c8c8;
  border-bottom-width: 1px;
  overflow: hidden;
  white-space: nowrap;
  margin: auto 0;
  padding: 18px 16px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const DateTimeInfo = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: #fff;
  border-color: #c9c8c8;
  border-bottom-width: 1px;
  overflow: hidden;
  margin: auto 0;
  padding: 18px 16px;
`;

export default RecentActivitiesCard;
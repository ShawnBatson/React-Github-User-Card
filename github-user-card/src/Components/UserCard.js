import React from "react";
import "../App.css";
import styled from "styled-components";

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  passing: 2%;
  border: 1px solid black;
`;
const Card = styled.div`
  display: flex;
  width: 25%;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  background: #59405e;
  box-shadow: 10px 20px #474447;

  margin: 2%;
`;

const Image = styled.img`
  display: flex;
  margin-left: 20%;
  width: 60%;
  align-items: center;
  border: 1px solid green;
`;

const UserCard = props => {
  console.log("this is userCard props", props);

  const Click = {};

  return (
    <CardBox>
      {props.followers.map(follower => {
        return (
          <Card className="follower-card" key={follower.id}>
            <h4>{follower.login}</h4>
            <Image src={follower.avatar_url} />
            <p>words go here</p>
            <h4>{follower.html_url}</h4>
          </Card>
        );
      })}
    </CardBox>
  );
};

export default UserCard;

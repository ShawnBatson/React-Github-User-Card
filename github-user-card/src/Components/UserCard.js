import React from "react";
import "../App.css";

const UserCard = props => {
  console.log("this is userCard props", props);

  return (
    <div>
      <h2>Followers</h2>
      {props.followers.map(follower => {
        return (
          <div className="follower-card">
            <img src={follower.avatar_url} />
            <h4>{follower.login}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;

import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import {
  Avatar,
  AvatarFrame,
  Body,
  Border,
  Button,
  Card,
  Header,
  Stats,
} from "./UserCard.styled";

export default function UserCard({ user, handleFollow, followings }) {
  const { id, user: userName, tweets, followers, avatar } = user;
  const [isLoading, setIsLoading] = useState(false);
  const isFollowed = followings.find((user) => user === id);

  async function handleClick() {
    try {
      setIsLoading(true);
      await handleFollow(id);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <Header />
      <Border />
      <Body>
        <AvatarFrame>
          <Avatar src={avatar} />
        </AvatarFrame>
        {/* <h2>{userName}</h2> */}
        <Stats>
          {tweets.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Tweets
        </Stats>
        <Stats>
          {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Followers
        </Stats>
        <Button
          type="button"
          onClick={handleClick}
          disabled={isLoading}
          followed={isFollowed}>
          {isLoading ? (
            <ThreeDots height="10" color="#5736a3" />
          ) : isFollowed ? (
            "Following"
          ) : (
            "Follow"
          )}
        </Button>
      </Body>
    </Card>
  );
}

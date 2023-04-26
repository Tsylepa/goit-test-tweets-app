import { useState, useEffect, memo } from "react";
import { getUsers, followersUpdate } from "../../API";
import { Container, CardGrid, Back, NoResults } from "./TweetsPage.styled";
import { BsArrowBarLeft } from "react-icons/bs";
import { Rings } from "react-loader-spinner";
import Filter from "../../components/Filter";
import UserCard from "../../components/UserCard/UserCard";
import LoadMore from "../../components/LoadMore";

function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [followings, setFollowings] = useState(
    JSON.parse(localStorage.getItem("followings")) ?? []
  );
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function filterUsers() {
      let response = [];
      switch (filter) {
        case "all":
          response = users;
          break;
        case "follow":
          response = users.filter((user) => !followings.includes(user.id));
          break;
        case "followings":
          response = users.filter((user) => followings.includes(user.id));
          break;
        default:
          response = users;
      }
      setFilteredUsers(response);
    }
    filterUsers();
  }, [filter]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  useEffect(() => {
    function updateFollowings() {
      localStorage.setItem("followings", JSON.stringify(followings));
    }
    updateFollowings();
  }, [followings]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchUsers() {
      try {
        const response = await getUsers(page);

        setUsers([...users, ...response]);
        body.scrollTop(body.scrollHeight);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, [page]);

  async function handleFollow(id) {
    const userIdx = followings.indexOf(id);

    return userIdx === -1
      ? updateFollowers({ id, modificator: 1 })
      : updateFollowers({ id, modificator: -1 });
  }

  function handleFilter(value) {
    setFilter(value);
  }

  function handleLoadMore() {
    setPage(page + 1);
  }

  async function updateFollowers({ id, modificator }) {
    try {
      const updatedUser = await followersUpdate({ id, modificator });
      const updatedUserIdx = users.indexOf(
        users.find((user) => user.id === updatedUser.id)
      );

      users.splice(updatedUserIdx, 1, updatedUser);

      modificator === -1
        ? setFollowings(followings.filter((user) => user !== id))
        : setFollowings([...followings, id]);
    } catch (error) {}
  }

  return (
    <Container>
      <Back to="/">
        <BsArrowBarLeft />
        Back to Home page
      </Back>
      {users.length > 0 ? (
        <>
          <Filter filter={filter} handleFilter={handleFilter} />
          {filteredUsers.length > 0 ? (
            <>
              <CardGrid>
                {filteredUsers.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    handleFollow={handleFollow}
                    followings={followings}
                  />
                ))}
              </CardGrid>
              {filter === "all" && (
                <LoadMore
                  handleLoadMore={handleLoadMore}
                  disabled={isLoading}
                />
              )}
            </>
          ) : (
            <NoResults>No results</NoResults>
          )}
        </>
      ) : (
        <Rings
          height="80"
          width="80"
          color="#5cd3a8"
          radius="6"
          ariaLabel="rings-loading"
          wrapperStyle={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            top: 50,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999,
          }}
        />
      )}
    </Container>
  );
}

export default memo(TweetsPage);

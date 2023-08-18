import { useEffect, useState } from "react";

// Tối ưu đoạn code này -> Dung customHook
const ActiveUsersList = () => {
  const { users } = useUser();

  return (
    <ul>
      {getActiveUsers(users).map((user) => (
        <UserItem key={user.id} user={user}></UserItem>
      ))}
    </ul>
  );
};
function getActiveUsers(users) {
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  if (!Array.isArray(users)) return [];
  const filterUsers = users.filter(
    (user) => !user.isBanned && user.lastActivityAt >= weekAgo
  );
  return filterUsers;
}
function UserItem(props) {
  const { user } = props;
  return (
    <li>
      <img src={user.avatarUrl} />
      <p>{user.fullName}</p>
      <small>{user.role}</small>
    </li>
  );
}
function useUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("/some-api");
      const data = await response.json();
      setUsers(data);
    };

    loadUsers();
  }, []);
}

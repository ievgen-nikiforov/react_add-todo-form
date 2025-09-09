import usersFromServer from '../../api/users';
type UserInfoProps = {
  userID: number;
};
export const UserInfo = ({ userID }: UserInfoProps) => {
  const user = usersFromServer.find(user => user.id === userID);
  return (
    <a className="UserInfo" href={`mailto:${user?.email}`}>
      {user?.name}
    </a>
  );
};

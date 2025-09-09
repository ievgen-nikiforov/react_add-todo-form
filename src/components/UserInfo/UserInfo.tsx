import usersFromServer from '../../api/users';
type UserInfoProps = {
  userID: number;
};
export const UserInfo = ({ userID }: UserInfoProps) => {
  const userData = usersFromServer.find(user => user.id === userID);
  return (
    <a className="UserInfo" href={`mailto:${userData?.email}`}>
      {userData?.name}
    </a>
  );
};

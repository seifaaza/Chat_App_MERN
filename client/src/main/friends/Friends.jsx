import MyFriends from "./MyFriends";
import Notification from "./Notifications";
const Friends = () => {
  return (
    <div className="p-5 w-full h-full flex gap-6">
      <MyFriends />
      <Notification />
    </div>
  );
};

export default Friends;

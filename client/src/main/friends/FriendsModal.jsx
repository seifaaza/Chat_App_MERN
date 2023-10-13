import Friends from "./Friends";
import AddFriend from "./AddFriend";
import mainStore from "../../store/mainStore";
import secStore from "../../store/userStore";

const FriendsModal = () => {
  const store = mainStore();
  const userStore = secStore();
  const emptyFriend = (
    <div className="h-full flex flex-col justify-center items-center text-white">
      No friend
    </div>
  );
  return (
    <div style={{ height: "75vh" }} className=" overflow-scroll">
      {userStore.emptyFriend ? (
        emptyFriend
      ) : store.addFriend ? (
        <AddFriend click={store.switchAddFriend} />
      ) : (
        <Friends click={store.switchAddFriend} />
      )}
    </div>
  );
};

export default FriendsModal;

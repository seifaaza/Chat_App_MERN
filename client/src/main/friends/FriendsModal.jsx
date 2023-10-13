import Friends from "./Friends";
import AddFriend from "./AddFriend";
import mainStore from "../../store/mainStore";

const FriendsModal = () => {
  const store = mainStore();
  return (
    <div style={{ height: "75vh" }} className=" overflow-scroll">
      {store.addFriend ? (
        <AddFriend click={store.switchAddFriend} />
      ) : (
        <Friends click={store.switchAddFriend} />
      )}
    </div>
  );
};

export default FriendsModal;

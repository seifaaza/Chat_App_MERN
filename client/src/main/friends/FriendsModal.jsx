import Friends from "./Friends";
import AddFriend from "./AddFriend";
import mainStore from "../../store/mainStore";
import userData from "../../store/userStore";

export default function FriendsModal() {
  const store = mainStore();
  const userDataStore = userData();
  const emptyFriend = (
    <div className="flex-grow flex flex-col gap-5 justify-center items-center h-full">
      <img src="/images/friend.svg" className="w-44" alt="" />
      <h1 className="text-2xl text-sky-700 ">Your Friends List Is Empty</h1>
    </div>
  );

  return (
    <div style={{ height: "75vh" }} className=" overflow-scroll">
      {userDataStore.emptyFriend ? (
        emptyFriend
      ) : store.addFriend ? (
        <AddFriend click={store.switchAddFriend} />
      ) : (
        <Friends click={store.switchAddFriend} />
      )}
    </div>
  );
}

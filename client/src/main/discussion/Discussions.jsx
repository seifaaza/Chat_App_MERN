import DiscussionItems from "./DiscussionItems";
import Search from "./Search";
import userStore from "../../store/userStore";

export default function Discussions() {
  const store = userStore();
  const emptyChat = (
    <div className="h-full flex flex-col justify-center items-center text-white">
      <h1>You don&apos;t have any discussion</h1>
    </div>
  );
  return (
    <div className="flex flex-col gap-5 ">
      <Search />
      <div className="pr-8 overflow-scroll w-80 md:max-w-xs h-full">
        {store.emptyChat ? emptyChat : <DiscussionItems />}
      </div>
    </div>
  );
}

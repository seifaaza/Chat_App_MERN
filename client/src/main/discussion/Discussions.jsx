import DiscussionItems from "./DiscussionItems";
import Search from "./Search";
import userData from "../../store/userStore";

export default function Discussions() {
  const userDataStore = userData();
  const emptyChat = (
    <div className="h-full flex flex-col gap-5 justify-center items-center">
      <img src="/images/discussion.svg" className="w-32 opacity-30" alt="" />
      <h1 className="text-lg text-sky-800 brightness-90">
        You don&apos;t have any discussion
      </h1>
    </div>
  );
  return (
    <div className="flex flex-col gap-5 ">
      <Search />
      <div className="pr-8 overflow-scroll w-80 md:max-w-xs h-full">
        {userDataStore.emptyChat ? emptyChat : <DiscussionItems />}
      </div>
    </div>
  );
}

import DiscussionItems from "./DiscussionItems";
import Search from "./Search";

const Discussions = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <Search />
      <DiscussionItems />
    </div>
  );
};

export default Discussions;

import MainInterface from "../MainInterface";
import Discussions from "../discussion/Discussions";
import Conversation from "./Conversation";
import mainStore from "../../store/mainStore";

export default function AllChat() {
  const store = mainStore();
  return (
    <div className="p-5 w-full h-full flex gap-5">
      <Discussions />
      {store.chatInterface ? <Conversation /> : <MainInterface />}
    </div>
  );
}

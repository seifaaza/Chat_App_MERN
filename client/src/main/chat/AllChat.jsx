import MainInterface from "../MainInterface";
import Discussions from "../discussion/Discussions";
import Chat from "./Chat";
import mainStore from "../../store/mainStore";

export default function AllChat() {
  const store = mainStore();
  return (
    <div className="p-5 w-full h-full flex gap-5">
      <Discussions />
      {store.chatInterface ? <Chat /> : <MainInterface />}
    </div>
  );
}

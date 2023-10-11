import MainInterface from "../MainInterface";
import Discussion from "../discussion/Discussions";
import Chat from "./Chat";

export default function AllChat() {
  return (
    <div className="p-5 w-full h-full flex gap-6">
      <Discussion />
      <Chat />
    </div>
  );
}

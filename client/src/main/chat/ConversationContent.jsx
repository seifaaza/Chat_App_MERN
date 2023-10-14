import userStore from "../../store/userStore";
import UserBar from "./UserBar";

export default function ConversationContent() {
  const store = userStore();
  const emptyConversation = (
    <div className=" flex-grow flex flex-col gap-5 justify-center items-center">
      <img src="/images/message.svg" className="w-44 opacity-40" alt="" />
      <h1 className="text-2xl text-mainLight brightness-125 ">
        Nothing Here !
      </h1>
    </div>
  );
  return (
    <>
      {store.emptyConversation ? (
        ""
      ) : (
        <UserBar username={"Jaafar"} img={"https://picsum.photos/200/300"} />
      )}
      <div
        // style={{ backgroundImage: "url('/images/chat_default_bg.png')" }}
        className="p-5 pt-10 pr-8 text-white bg-mainDark bg-cover bg-center rounded-b-lg flex-grow flex flex-col justify-center
      items-center overflow-y-scroll"
      >
        {store.emptyConversation ? emptyConversation : "conversation not empty"}
      </div>
    </>
  );
}

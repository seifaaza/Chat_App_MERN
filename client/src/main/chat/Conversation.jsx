import userStore from "../../store/userStore";
import UserBar from "./UserBar";

export default function Conversation() {
  const store = userStore();
  const emtyConversation = (
    <div className=" flex-grow flex flex-col gap-3 justify-center items-center">
      <img src="/images/message.svg" className="w-44 opacity-30" alt="" />
      <h1 className="text-2xl text-mainLight ">Nothing Here !</h1>
    </div>
  );
  return (
    <>
      <UserBar username={"Jaafar"} img={"https://picsum.photos/200/300"} />
      <div
        // style={{ backgroundImage: "url('/images/chat_default_bg.png')" }}
        className="p-5 pt-10 pr-8 text-white bg-mainDark bg-cover bg-center rounded-b-lg flex-grow flex flex-col justify-center
      items-center overflow-y-scroll"
      >
        {!store.conversation ? emtyConversation : store.conversation}
      </div>
    </>
  );
}

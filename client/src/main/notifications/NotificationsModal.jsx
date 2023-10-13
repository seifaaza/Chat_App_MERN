import UserStore from "../../store/userStore";
import Notifications from "./Notifications";

export default function NotificationsModal() {
  const store = UserStore();
  const emptyNotification = (
    <div className="flex-grow flex flex-col gap-5 justify-center items-center h-full">
      <img src="/images/notification.svg" className="w-44 opacity-5" alt="" />
      <h1 className="text-2xl text-cyan-800 ">Nothing Here !</h1>
    </div>
  );
  return (
    <div style={{ height: "75vh" }} className=" overflow-scroll">
      {store.emptyNotification ? emptyNotification : <Notifications />}
    </div>
  );
}

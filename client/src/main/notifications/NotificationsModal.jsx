import userData from "../../store/userStore";
import Notifications from "./Notifications";

export default function NotificationsModal() {
  const userDataStore = userData();
  const emptyNotification = (
    <div className="flex-grow flex flex-col gap-5 justify-center items-center h-full">
      <img src="/images/notification.svg" className="w-44" alt="" />
      <h1 className="text-2xl text-sky-700 ">Your Friends List Is Empty</h1>
    </div>
  );
  return (
    <div style={{ height: "75vh" }} className=" overflow-scroll">
      {userDataStore.emptyNotification ? emptyNotification : <Notifications />}
    </div>
  );
}

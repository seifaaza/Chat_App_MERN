import NotificationItems from "./NotificationItems";

export default function Notifications() {
  return (
    <div className="flex flex-col gap-3 p-4 ">
      <h1 className="text-lg text-sec font-light">Your Notifications</h1>
      <NotificationItems />
    </div>
  );
}

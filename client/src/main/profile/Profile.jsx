import secStore from "../../store/userStore";

export default function Profile() {
  const userStore = secStore();
  return (
    <div className="p-5 w-full h-full flex justify-center items-center">
      Profile
    </div>
  );
}

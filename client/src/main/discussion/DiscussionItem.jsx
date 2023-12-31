import PropTypes from "prop-types";
import mainStore from "../../store/mainStore";

export default function DiscussionItem(props) {
  const store = mainStore();
  return (
    <li
      className="flex justify-between gap-x-6 py-5 hover:brightness-150 duration-300
      cursor-pointer"
      onClick={store.switchChatInterface}
    >
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={props.imageUrl}
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="text-md font-semibold leading-6 text-white">
            {props.username}
          </p>
          <p className="mt-1 truncate text-sm leading-5 text-gray-500">
            {props.message}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col ">
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
          {props.lastMessageTime}
        </p>
      </div>
    </li>
  );
}
DiscussionItem.propTypes = {
  key: PropTypes.string,
  imageUrl: PropTypes.string,
  username: PropTypes.string,
  message: PropTypes.string,
  lastMessageTime: PropTypes.string,
};

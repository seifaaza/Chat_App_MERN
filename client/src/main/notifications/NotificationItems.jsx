import NotificationItem from "./NotificationItem";

export default function NotificationItems() {
  const people = [
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      time: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      time: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      time: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      time: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      time: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      time: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      time: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      time: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      time: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      time: "3h",
    },
  ];

  const usernameCapitalize = (username) =>
    username.charAt(0).toUpperCase() + username.slice(1);

  const acceptClick = () => console.log("accept");
  const refuseClick = () => console.log("refuse");

  return (
    <ul role="list" className="w-full divide-y divide-gray-100">
      {people.map((person, index) => (
        <div key={index}>
          <NotificationItem
            imageUrl={person.imageUrl}
            username={usernameCapitalize(person.username)}
            time={person.time}
            acceptClick={acceptClick}
            refuseClick={refuseClick}
          />
        </div>
      ))}
    </ul>
  );
}

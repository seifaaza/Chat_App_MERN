import React from "react";
import DiscussionItem from "./DiscussionItem";

export default function DiscussionItems() {
  const people = [
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
    {
      username: "jaafar",
      imageUrl: "https://picsum.photos/200/300",
      role: "Co-Founder / CEO",
      message: "lorem ipsum dolor sit amet, consectetur",
      lastMessageTime: "3h",
    },
  ];

  const usernameCapitalize = (username) =>
    username.charAt(0).toUpperCase() + username.slice(1);

  return (
    <ul
      role="list"
      className=" divide-y divide-gray-100 w-full overflow-x-hidden"
    >
      {people.map((person, index) => (
        <React.Fragment key={index}>
          <DiscussionItem
            imageUrl={person.imageUrl}
            username={usernameCapitalize(person.username)}
            message={person.message}
            lastMessageTime={person.lastMessageTime}
          />
          <hr className="line" />
        </React.Fragment>
      ))}
    </ul>
  );
}

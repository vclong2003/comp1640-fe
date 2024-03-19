import React from "react";
import {
  AdminAction,
  AdminProfile,
  AvatarImage,
  ChangeAvatarButton,
  Headline,
} from "./Account.styled";
import { FaRegEdit } from "react-icons/fa";

export const AdminAccount = () => {
  return (
    <>
      <Headline>Your Profile</Headline>
      <AdminProfile>
        <div>
          <AvatarImage></AvatarImage>
          <ChangeAvatarButton>Change</ChangeAvatarButton>
        </div>
        <AdminAction>
          <p>Full name</p>
          <input type="text" placeholder="Full name" readOnly />
          <button>
            <FaRegEdit /> Edit
          </button>
          <p>Gmail</p>
          <input type="email" placeholder="Gmail" readOnly />
          <button>
            <FaRegEdit /> Edit
          </button>
        </AdminAction>
      </AdminProfile>
    </>
  );
};

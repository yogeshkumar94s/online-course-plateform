"use client";

import { FaUser } from "react-icons/fa";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import SignOutButton from "./SignOutButton";

const UserButton = () => {
  const user = useCurrentUser();

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar>
            <AvatarImage src={user?.image || ""} />
            <FaUser className='text-white' />
          </Avatar>
        </PopoverTrigger>

        <PopoverContent className='w-80 h-[200px]'>
          <div className='flex flex-col gap-2 items-center'>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
          <div className='mt-[90px] ml-28'>
            <SignOutButton>Logout</SignOutButton>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default UserButton;

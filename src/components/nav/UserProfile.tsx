"use client";
import { useMemo } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
const UserProfile = () => {
  const { isLoading, user } = useKindeBrowserClient();
  console.log(isLoading, user);
  const userProfileImage = useMemo(
    () => user?.picture || "/svgs/noPictureIcon.svg",
    [user?.picture]
  );
  const UserProfileImage_alt = useMemo(
    () => user?.given_name || "current_user",
    [user?.given_name]
  );
  return (
    <div className="w-[52px] h-[52px]">
      {isLoading ? (
        "loading"
      ) : (
        <Image
          className="rounded-full w-[52px] h-[52px]"
          src={userProfileImage}
          alt={UserProfileImage_alt}
          width={52}
          height={52}
        />
      )}
    </div>
  );
};

export default UserProfile;

import Logo from "../logo";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import UserProfile from "./UserProfile";
import Link from "next/link";

const linksData = [
  { href: "/", text: "Home" },
  { href: "/dashboard/1", text: "dashboard" },
];

const DesktopNav = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isLoggedIn = await isAuthenticated();
  return (
    <div className="flex justify-between items-center md:w-[90%] lg::w-[80%] w-[90%]">
      <Logo />
      {isLoggedIn ? (
        <div className="flex gap-2 items-center">
          <>
            {linksData.map(({ href, text }, index) => (
              <Link
                key={index}
                href={href}
                className="underline underline-offset-[5px] text-black px-2 py-1 rounded-md hover:bg-black/10"
              >
                {text}
              </Link>
            ))}
          </>
          <LogoutLink className="w-fit text-white px-[1rem] text-sm bg-red-500 hover:bg-red-700 py-1 rounded-md h-fit">
            Log out
          </LogoutLink>
          <UserProfile />
        </div>
      ) : (
        <div className="flex gap-3">
          <LoginLink className="w-fit text-white px-[2rem] bg-blue-500 hover:bg-blue-700 py-1 rounded-md h-fit">
            Sign in
          </LoginLink>
          <RegisterLink className="w-fit text-black px-[2rem] border-blue-500 hover:bg-blue-700/10 border py-1 rounded-md h-fit">
            Sign up
          </RegisterLink>
        </div>
      )}
    </div>
  );
};

export default DesktopNav;

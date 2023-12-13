import DesktopNav from "./DesktopNav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "next/prisma-client";
const Nav = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log("server user", user);

  async function main() {
    // ... you will write your Prisma Client queries here
    const currentUser = await prisma.user.findUnique({
      where: {
        email: user?.email as string,
      },
      select: {
        email: true,
        name: true,
      },
    });
    if (currentUser === null) {
      try {
        const thisUser = await prisma.user.create({
          data: {
            name: `${user?.family_name}+${user?.given_name}`,
            email: user?.email,
          },
        });
        console.log("thisUser :", thisUser);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("user exists in data base");
    }
  }
  main()
    .catch(async (e) => {
      console.error(e);

      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  return (
    <nav className="py-[0.5rem] w-full h-fit flex justify-center absolute top-0 z-60 bg-white/90 shadow-lg">
      <DesktopNav />
    </nav>
  );
};

export default Nav;

import { authOptions } from "@/lib/nextauth/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

const DynamicSidebar = dynamic(() => import("@/components/sidebar/Sidebar"));
const DynamicNavbar = dynamic(() => import("@/components/navbar/Navbar"));

export default async function IdkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  return (
    <>
      <DynamicNavbar />
      <DynamicSidebar />
      <main className="ml-[17.5rem] flex pt-[4rem]">{children}</main>
    </>
  );
}

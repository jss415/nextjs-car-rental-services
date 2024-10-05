import { fetchUserIcon } from "@/lib/actions/fetchUserIcon";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
  const userIcon = await fetchUserIcon();

  return userIcon ? (
    <img src={userIcon} className="w-6 h-6 rounded-full object-cover" />
  ) : (
    <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />
  );
}

export default UserIcon;

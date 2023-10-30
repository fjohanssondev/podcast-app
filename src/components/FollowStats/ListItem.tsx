import { Avatar } from "@radix-ui/themes";
import Link from "next/link";

interface ListItemProps {
  id: string;
  name: string;
  email: string;
  image: string;
}

const ListItem = ({ id, name, email, image }: ListItemProps) => {
  return (
    <Link href={`/profile/${id}`} key={id} className="py-4 flex">
      <Avatar radius="full" size="3" src={image} fallback={name.charAt(0)} />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">{email}</p>
      </div>
    </Link>
  )
}

export default ListItem
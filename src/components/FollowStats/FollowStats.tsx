import { Dialog } from "@components/Dialog"
import { User } from "../Profile/ProfileDetails"
import ListItem from "./ListItem"
import EmptyList from "./EmptyList"

interface FollowStatsProps {
  following: User[]
  followers: User[]
}

const FollowStats = ({ following, followers }: FollowStatsProps) => {

  return (
    <div className="flex mt-4 gap-4">
      <Dialog.Root>
        <Dialog.Trigger>
          <button className="text-sm font-semibold">{following.length} Following</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Content title="Following" description="A list of people you're following">
            {following.length === 0 ? (
              <EmptyList message={"people you're following"} />
            ) : (
              <ul className="divide-y divide-gray-200">
              {following.map((user) => (
                <li key={user.id}>
                  <ListItem key={user.id} {...user} />
                </li>
              ))}
            </ul>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Dialog.Root>
        <Dialog.Trigger>
          <button className="text-sm font-semibold">{followers.length} Followers</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Content title="Followers" description='This is a list of all your current followers'>
          {followers.length === 0 ? (
            <EmptyList message={'followers'} />
          ) : (
            <ul className="divide-y divide-gray-200">
            {followers.map((user) => (
              <li key={user.id}>
                <ListItem {...user} />
              </li>
            ))}
          </ul>
          )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default FollowStats
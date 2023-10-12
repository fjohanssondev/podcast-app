import { Dialog } from "@components/Dialog"

interface FollowStatsProps {}

const FollowStats = (props: FollowStatsProps) => {

  return (
    <div className="flex mt-4 gap-4">
      <Dialog.Root>
        <Dialog.Trigger>
          <button className="text-sm font-semibold">12 Following</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Content title="Following" description="A list of people you're following">
                
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Dialog.Root>
        <Dialog.Trigger>
          <button className="text-sm font-semibold">1402 Followers</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Content title="Followers" description='This is a list of all your current followers'>
                
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default FollowStats
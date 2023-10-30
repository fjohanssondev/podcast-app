import { Text } from "@radix-ui/themes"

const Sidebar = () => {
  return (
    <aside className='fixed bg-gray-100 dark:bg-dark-primary w-64 h-full py-6 px-12'>
      <div className="flex flex-col">
        <div className="text-center">
          <Text weight={"bold"} size={"6"}><span className="text-orange-800">Son</span>are</Text>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
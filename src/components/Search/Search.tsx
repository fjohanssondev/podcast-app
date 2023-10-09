import { MagnifyingGlass } from "@/icons/MagnifyingGlass"

const Search = () => {
  return (
    <div className="inline-flex items-center w-96">
      <div>
        <MagnifyingGlass />
      </div>
      <input className="flex-1 font-sans text-sm p-4 rounded bg-transparent border border-black dark:border-gray-800" type="search" placeholder="Search for podcasts, episodes, creators..." />
    </div>
  )
}

export default Search
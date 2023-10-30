"use client"

import { TextField } from "@radix-ui/themes"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

const Search = () => {
  return (
    <TextField.Root className="mr-8">
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
      <TextField.Input placeholder="Search users, podcasts and episodes..." />
    </TextField.Root>
  )
}

export default Search
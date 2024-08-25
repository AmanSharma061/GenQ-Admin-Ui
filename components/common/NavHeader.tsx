import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const NavHeader = () => {
  return (
    <div className="h-20 border-b border-b-[#E6EFF5] relative bg-[#FFFFFF] flex items-center ">

<div className='absolute right-8' >
<Avatar className='h-12 w-12'>

  <AvatarImage src="https://github.com/shadcn.png"  />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
</div>

    </div>
  )
}

export default NavHeader

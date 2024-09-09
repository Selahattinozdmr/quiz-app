"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({item}:{item:any}) => {
    const pathName=usePathname();
    
    return (
        <Link href={item.path} className={`${pathName==item.path&& " bg-accent   text-base-100" } border-2 border-black m-2 p-3 rounded-md hover:bg-warning hover:text-base-100 duration-150`}>{item.title}</Link>
        
      )
}

export default NavLink
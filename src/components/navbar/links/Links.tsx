"use client"
import React from 'react'
import NavLink from './navlink/NavLink'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const links=[
    {
        title:"Home",
        path:"/"
    },
]
const Links = ({session}:{session:any}) => {
    return (
        <div className=' my-5 flex'>
            {links.map(link=>(
                <NavLink key={link.title} item={link}/>
            ))}

            {session?(
                <>
                    {session.user.isAdmin &&<NavLink item={{title:"Account",path:"/teacher-page"}}/>}
                    {!session.user.isAdmin &&<NavLink item={{title:"Account",path:"/ogrenci-sayfa"}}/>}
                    <form action={()=>signOut()} className=''>
                        <button className='btn btn-warning m-2 p-4 rounded-md '>Logout</button>
                    </form>
                </>
        
            ):(
            <NavLink item={{title:"Login",path:"/login"}}/>
        )}

          
        </div>
  )
}

export default Links
import NextAuth from "next-auth"
import credentials from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import {authConfig} from "@/auth.config"
import {compare} from "bcrypt-ts"
import prisma from "@/lib/db"



const userLogin=async (credentials:any)=>{
  try{
    const user=await prisma.user.findUnique({where:{username:credentials.username}})
    if(!user){
      throw new Error("No user found")
    }
    const isPasswordCorrect=await compare(credentials.password,user.password)
  
    if(!isPasswordCorrect){
      throw new Error("Invalid password")
    }
    return user
    
  }
  catch(error){
    throw new Error("Invalid credentials")
  }
}

export const { handlers, auth,signIn,signOut } = NextAuth({
    ...authConfig,
  providers:[
    credentials({
      async authorize(credentials, request){
        try{
          const user =await userLogin(credentials)
          return user
        }
        catch(err){
          console.log(err)  
          return null
        }
      }
    }), 
   
    
    
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user)
        return true
  },
 
  ...authConfig.callbacks


}
})
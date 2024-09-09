import type { NextAuthConfig } from "next-auth"
import { PrismaClient } from "@prisma/client"
import { NextURL } from "next/dist/server/web/next-url"
import { NextResponse } from 'next/server'

export const authConfig:any ={
  pages: {signIn:"/login"},

  providers: [],
  secret:"LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
  
  callbacks: {
    async jwt({token, user}:{token:any, user:any}) {
      
      if(user){
        token.id=user.id
        token.isAdmin=user.isAdmin

      }
      return token
    },
    async session({session, token}:{session:any, token:any}) {
      if(token){
        session.user.id=token.id
        session.user.isAdmin=token.isAdmin

      }
      return session
    },
    async authorized({auth,request}:{auth:any,request:any}) {
      const user=auth?.user
      const {pathname}=request.nextUrl;
      const isOnAdminPanel=pathname.startsWith("/teacher-page")
      const isStudentPage=pathname.startsWith("/ogrenci-sayfa")
      const isOnLoginPage=pathname.startsWith("/login")

      if(isOnAdminPanel && !user?.isAdmin){
          return Response.redirect(new URL('/login', request.nextUrl))
      }
      if(isStudentPage && user?.isAdmin){
        return Response.redirect(new URL('/login', request.nextUrl))
    }
      if(isStudentPage && !user){
          return false
      }
      if(isOnAdminPanel && !user){
        return false
    }
      if(user && isOnLoginPage){
        return Response.redirect(new URL('/', request.nextUrl))
      }
      return true
    },
  }
} 
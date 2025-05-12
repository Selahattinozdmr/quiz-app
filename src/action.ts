import { signIn } from "@/auth"
import {genSalt,hash} from "bcrypt-ts"
import { revalidatePath } from "next/cache"
import _ from "lodash"
import moment from "moment-timezone"
import prisma from "./lib/db"
import fs from "node:fs/promises";
import path from "path";


export const loginAction=async (prevState:any,formData:any)=>{
    "use server"
    const {username,password}=Object.fromEntries(formData)
    try{
        await signIn("credentials",{username,password})
    }
    
    catch(error){
        console.log(error)
        if(error.code=="credentials"){
            return{error:"Invalid username or password"}
        }
        throw error
    }
}

export const register=async (prevState:any,formData:any)=>{
    "use server"
    const {name,surname,username,sinif,email,password,isAdmin,repeatPassword}=Object.fromEntries(formData)
    
    if(password!==repeatPassword){
        return {error:"Passwords do not match"}
    }
    if(isAdmin=="on"){
        try{
            const user = await prisma.user.findUnique({where:{username:username}})
            if(user){
                return {error:"teacher already exists"}
                
            }
            
            const salt=await genSalt(10)
            const hashedPassword=await hash(password,salt)
            const sinifId=await prisma.class.findMany({where:{class:sinif}})
            const sinif1={sinifId}
            console.log(sinif1)        
            const user1= await prisma.user.create({data:{username,email,password:hashedPassword,isAdmin:true,name,surname,classId:sinifId[0]?.id}})
            await prisma.teacher.create({data:{userId:user1.id}})
            return {success:true}
    
        }
        catch(error){
            console.log(error)
            throw error
    
        }
    }
    else{

        try{
            const user = await prisma.user.findUnique({where:{username:username}})
            if(user){
                return {error:"user already exists"}
                
            }
            
            const salt=await genSalt(10)
            const hashedPassword=await hash(password,salt)
            const sinifId=await prisma.class.findUnique({where:{class:sinif}})
            await prisma.user.create({data:{username,email,password:hashedPassword,isAdmin:false,name,surname,classId:sinifId?.id}})
            return {success:true}
    
        }
        catch(error){
            console.log(error)
            throw error
    
        }
    }
    
}

export const getTodos=async(session:any)=>{
"use server"
try{
    const id=parseInt(session.user.id)
    const todos= await prisma.todo.findMany({where:{userId:id}})
    console.log(session.user.id)
    return todos
}
catch(error){
    console.log(error)
    throw error
}
 
}
export const addTodo=async(formData:any)=>{
    "use server"
    try{
        const {todo,userId}=Object.fromEntries(formData)
        const userId1=parseInt(userId)
        await prisma.todo.create({data:{todo,userId:userId1}})
        revalidatePath("/ogrenci-sayfa")
    }
    catch(error){
        console.log(error)
        throw error
    }
}

export const deleteTodo=async(formState:any)=>{
    "use server"
    const {id}=Object.fromEntries(formState)
    const id1=parseInt(id)
    try{
        await prisma.todo.delete({where:{id:id1}})
        revalidatePath("/ogrenci-sayfa")
    }
    catch(err){
        console.log(err)
    }
}

export const addHomework=async(formData:any)=>{
    "use server"
    const {sinif,odev,tarih,teacherId}=Object.fromEntries(formData)
    const tarih1=tarih+"T00:00:00.000Z"
    try{
        const teacherId1=parseInt(teacherId)
        const sinifId=await prisma.class.findUnique({where:{class:sinif}})  
        const users=await prisma.user.findMany({where:{classId:sinifId?.id}})
        users.map(async(user)=>(
            await prisma.homeWork.create({data:{userId:user.id,teacherId:teacherId1,isCompleted:false,date:tarih1,title:odev}})

        ))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    }
    catch(err){
        console.log(err)
    }
}   
export const getClasses=async()=>{
    "use server"
    try{
       return await prisma.class.findMany()
    }
    catch(err){
        console.log(err)
    }
}
export const getHomework=async(session:any)=>{
    "use server"
    console.log(session)
    
    try{  
        const userId=parseInt(session?.user.id)
        const homework= await prisma.homeWork.findMany({where:{userId}})
        return homework
    }
    catch(err){
        console.log(err)
    }

}
export const isCompletedHomeWork=async(id:number,toggle:boolean)=>{
    "use server"
    await prisma.homeWork.update({where:{id:id},data:{isCompleted:toggle}})
    revalidatePath("/ogrenci-sayfa")

}

export const createQuestion=async(formData:any)=>{
    "use server"
    const {question,optionA,optionB,optionC,optionD,correctAnswer,content,subcategory,category}=Object.fromEntries(formData)
    const file = formData.get("file") as File;
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename =  file.name.replaceAll(" ", "_");
  
    try{
        await fs.writeFile(
            path.join(process.cwd(), "public/" + filename),
            buffer
          );
         await prisma.question.create({data:{question,answerA:optionA,answerB:optionB,answerC:optionC,answerD:optionD,correctAnswer,file1:filename,content,subCategoryId:parseInt(subcategory),categoryId:parseInt(category)}})
        
    }
    catch(err){
        console.log(err)
    }
}
export const updateQuestion=async(formData)=>{
    "use server"
    const {id,question,optionA,optionB,optionC,optionD,correctAnswer,content,subcategory,category}=Object.fromEntries(formData)
    const file = formData.get("file") as File;
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename =  file.name.replaceAll(" ", "_");
  
    try{
        await fs.writeFile(
            path.join(process.cwd(), "public/" + filename),
            buffer
          );
         await prisma.question.update({where:{id:parseInt(id)},data:{question,answerA:optionA,answerB:optionB,answerC:optionC,answerD:optionD,correctAnswer,file1:filename,content,subCategoryId:parseInt(subcategory),categoryId:parseInt(category)}})
        
    }
    catch(err){
        console.log(err)
    }
}
export const getQuestionById=async(id)=>{
    return await prisma.question.findUnique({where:{id:parseInt(id)}})
}

export const getRandomQuiz=async(formData:any)=>{
    "use server"
    var arr = [];
    const {mat,fen,turkce,din,inkilap,ingilizce}=Object.fromEntries(formData)
    console.log(mat,fen,turkce,din,inkilap,ingilizce)
    
    try{
        const question=await prisma.question.findMany()
        while(arr.length !== 10){
            var r = Math.floor(Math.random() * question.length) + 1;
            if(arr.indexOf(r) === -1) arr.push(r);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        }  
        console.log(arr)
        
        
        return await prisma.question.findMany({where:{id:{in:[...arr]}}})
    }
    catch(err){
        console.log(err)
    }
}
export const getCategory=async()=>{
    "use server"
    try{
        return await prisma.category.findMany()
    }
    catch(err){
        console.log(err)
    }
}
export const getSubCategory=async()=>{
    "use server"
    try{
        return await prisma.subCategory.findMany()
    }
    catch(err){
        console.log(err)
    }
}
export const getCheckedSubCategory=async(formData:any)=>{
    "use server"
    const {date,classes,math,mati,relegion,dini,science,feni,english,ingilizcei,turkish,turkcei,history,inkilapi,teacherId,}=Object.fromEntries(formData)
    if(!math && !relegion && !science && !english && !turkish && !history || (!mati && !feni && !ingilizcei && !dini && !inkilapi && !turkcei)){
        return {error:"Please select at least one subcategory"}
    }
    //Toplam soru yapılacak
    const top=parseInt(mati)+parseInt(feni)+parseInt(ingilizcei)+parseInt(dini)+parseInt(inkilapi)+parseInt(turkcei)
    console.log(top)
    const date1= moment.utc(date)
    const teacherId1=parseInt(teacherId)
    const arr=[]
    const arr1=[]
    const math2=[]
    const relegion2=[]
    const science2=[]
    const english2=[]
    const turkish2=[]
    const history2=[]
    if(math){
        const math1=math.split(",")
        math1.map((item:any)=>(
            arr.push(item)
        ))
    }
    if(relegion){
        const relegion1=relegion.split(",")
        relegion1.map((item:any)=>(
            arr.push(item)
        ))
    }
    if(science){
        const science1=science.split(",")
        science1.map((item:any)=>(
            arr.push(item)
        ))
    }
    if(english){
        const english1=english.split(",")
        english1.map((item:any)=>(
            arr.push(item)
        ))
    }
    if(turkish){
        const turkish1=turkish.split(",")
        turkish1.map((item:any)=>(
            arr.push(item)
        ))
    }
    if(history){
        const history1=history.split(",")
        history1.map((item:any)=>(
            arr.push(item)
        ))
    }
    try{
        const subCategory=await prisma.subCategory.findMany({where:{title:{in:[...arr]}}})
        const subCategory1=subCategory.map((item:any)=>(
            arr1.push(item.id)
        ))
        const question=await prisma.question.findMany({where:{subCategoryId:{in:[...arr1]}}})
        question.map((item)=>{
            item.categoryId==1 && math2.push(item)
            item.categoryId==2 && science2.push(item)
            item.categoryId==3 && turkish2.push(item)
            item.categoryId==4 && relegion2.push(item)
            item.categoryId==5 && history2.push(item)
            item.categoryId==6 && english2.push(item)
        })
        const a= _.sampleSize(english2,ingilizcei) 
        const b= _.sampleSize(math2,mati)
        const c= _.sampleSize(relegion2,dini)
        const d= _.sampleSize(science2,feni)
        const e= _.sampleSize(turkish2,turkcei)
        const f= _.sampleSize(history2,inkilapi)       
        const question1=[]
        const result=[...a,...b,...c,...d,...e,...f]
        result.map((item:any)=>(
            question1.push(item.id)
        ))
        await prisma.quiz.create({data:{
            questionId:[...question1],
            TeacherId:teacherId1,
            className1:classes,
            dedline:date1.toISOString(),
            sumQuestion:top
        }})
    }   
    catch(err){
        console.log(err)
    }
}
export const getQuiz=async(teacherId)=>{
    const id=parseInt(teacherId)
    try{
        return await prisma.quiz.findMany({where:{TeacherId:id}})
    }
    catch(err){
        console.log(err)
    }
}

export const getQuestion=async(id)=>{
    "use server"

    try{
        const quiz=await prisma.quiz.findMany({where:{id}})
        const a=JSON.stringify(quiz[0].questionId)
        const b=a.split("[")
        const c=b[1].split("]")
        const e=[]
        c[0].split(",").map((item:any)=>
            {
                const d=parseInt(item)
                e.push(d)
            }
        )
        return await prisma.question.findMany({where:{id:{in:[...e]}}})
     
    }
    catch(err){
        console.log(err)
    }
}
export const getAllQuestons=async()=>{
    "use server"
    try{
        return await prisma.question.findMany()

    }catch(err){
        console.log(err)
    }
}

export const deleteQuizById=async(formData)=>{
    "use server"
    const {id}=Object.fromEntries(formData)
    try{
        await prisma.quiz.delete({where:{id:parseInt(id)}})
        await prisma.quizUser.deleteMany({where:{quizId:parseInt(id)}})
        revalidatePath("/teacher-page/quiz-list")
    }
    catch(err){
        console.log(err)
    }

}

export const approveQuiz=async(formData)=>{
    "use server"
    const {id,className1,date}=Object.fromEntries(formData)

    
    
    try{
        const classId=await prisma.class.findUnique({where:{class:className1}})
        
        await prisma.quiz.update({where:{id:parseInt(id)},data:{isApproved:true,dedline:new Date(date).toISOString()}})
        const users=await prisma.user.findMany({where:{classId:classId?.id}})
        const b=await prisma.quiz.findUnique({where:{id:parseInt(id)}})
        console.log(b?.isApproved)
        users.map(async(user)=>(
            await prisma.quizUser.create({data:{userId:user.id,quizId:parseInt(id)}})
        ))
    
    }
    catch(err){
        console.log(err)
    }
}
export const getQuizforStudent=async(session)=>{
    "use server"
    try{
        const a= await prisma.quizUser.findMany({where:{userId:parseInt(session.user.id)},include:{quiz:true}})        
        return a
    }
    catch(err){
        console.log(err)
    }
}
export const getQuizesforStudend1=async(id)=>{
    "use server"
    try{
        const a=await prisma.quizUser.findMany({where:{id:parseInt(id)},include:{quiz:true}})
        const b=await prisma.question.findMany({where:{id:{in:[...a[0].quiz.questionId]}}}) 
        return b

    }
    catch(err){
        console.log(err)
    }
}
export const editScore=async(formData)=>{
    "use server"
    const {id,score}=Object.fromEntries(formData)
    
    try{
        const a=await prisma.quizUser.findUnique({where:{id:parseInt(id)},include:{quiz:true}})
        const sumQ=a?.quiz.sumQuestion
        const falseA=parseInt(sumQ)-parseInt(score)
        await prisma.quizUser.update({where:{id:parseInt(id)},data:{trueAnswer:parseInt(score),falseAnswer:falseA}})
        console.log(score)

    }
    catch(err){
        console.log(err)
    }
    
}
export const updateIsCompleted=async(formData)=>{
    "use server"
    const {id}=Object.fromEntries(formData)
    await prisma.quizUser.update({where:{id:parseInt(id)},data:{isCompleted:true}})

}
export const getClassCount=async()=>{
    "use server"
    const a= await prisma.class.findMany()
    return a.length
}
export const getLessonCount=async()=>{
    "use server"
    const a=await prisma.category.findMany()
    return a.length
}
export const getQuestionCount=async()=>{
    "use server"
    const a=await prisma.question.findMany()
    return a.length
}
export const getStudentCount=async()=>{
    "use server"
    const a=await prisma.user.findMany({where:{isAdmin:false}})
    return a.length
}
export const getQuizCount=async()=>{
    "use server"
    const a=await prisma.quiz.findMany()
    return a.length
}
export const getApprovedUser=async()=>{
    "use server"
    const arr=[]
    const a=await prisma.quizUser.findMany({where:{isCompleted:true}})
    const b=await prisma.quizUser.findMany({where:{isCompleted:false}})
    arr.push(a.length)
    arr.push(b.length)
    return arr
}

export async function uploadFile(formData: FormData) {
    "use server"
    
  
    
  }
// export const getCheckedSubCategory=async(formData:any)=>{
//     "use server"
//     const {math,relegion,science,english,turkish,history,mati,feni,turkcei,inkilapi,ingilizcei}=Object.fromEntries(formData)
//     console.log(math,relegion,science,english,turkish,history,mati,feni,turkcei,inkilapi,ingilizcei)
//     const a=math.split(",")
//     console.log(a)


//     try{
    
//     }   
//     catch(err){
//         console.log(err)
//     }
// }
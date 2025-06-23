import { Suspense } from "react"
import { Post } from "@/app/post/page"
import PostPages from "../page"

type PostPageProps = {
  params: Promise<{
    id: string
  }>
}

async function findPost(searchParam:string){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${searchParam}`)
    const data:Post = await res.json()

    await new Promise((resolve)=>(setTimeout(resolve,5000)))
    return data
}   

export default async function PostPage({params}:PostPageProps){
     const { id } = await params
    const data = await findPost(id)
    return (
       (<>
        <div key={data.id}>
            <h3>{id}. {data.title}</h3>
            <p>{data.body}</p>
        </div>

        <hr />
        <h3>Otras publicaciones</h3>
        <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <PostPages/>
        </Suspense>
        
        </>
    ))}
    

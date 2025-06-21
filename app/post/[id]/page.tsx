import { Post } from "../page"

type PostPageProps = {
  params: Promise<{
    id: string
  }>
}

async function findPost(searchParam:string){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${searchParam}`)
    const data:Post = await res.json()
    return data
}   

export default async function PostPage({params}:PostPageProps){
     const { id } = await params
    const data = await findPost(id)
    return (
       (
        <div key={data.id}>
            <h3>{id}. {data.title}</h3>
            <p>{data.body}</p>
        </div>
    ))}
    

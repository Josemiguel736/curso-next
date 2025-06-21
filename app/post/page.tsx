export interface Post {

    id:number
    userId:number
    title:string
    body: string
}

async function LoadPost(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data:Post[] = await res.json()

    await new Promise((resolve)=> setTimeout(resolve,3000))
    return data
}

async function PostPages(){

    const data = await LoadPost()
    return (<div> {data.map(p=>(
        <div key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
        </div>
    ))}
    </div>)

}

export default PostPages
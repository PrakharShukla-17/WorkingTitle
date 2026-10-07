interface Card{
    userId: number,
    id:number,
    title:string,
    body:string
}

export const Card=(props:Card)=>{



    return(
        <div className="w-full h-64 bg-blue-300 border rounded-lg flex flex-col">
            <div>{props.id}</div>
            <div>{props.userId}</div>
            <h3>{props.title}</h3>
            <div>{props.body}</div>
        </div>
    )
}
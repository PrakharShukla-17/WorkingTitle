
interface videoProps{
    url:string
}





export const VideoBox=(props:videoProps)=>{
    return(
        <div className="w-full h-full min-h-0">
            <iframe className="w-full h-full" src={props.url} ></iframe>
        </div>
    )
}
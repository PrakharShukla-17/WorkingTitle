interface postProps{
    type: 'img'|'video'|'gif'
    url: string
}



export const Post=(props: postProps)=>{

    if(props.type==='video'){
        return(
            <div>
                <video src="props.url"></video>
            </div>
        )
    }
    return(
        <div>
            <img src="props.url" alt="" />
        </div>
    )
}
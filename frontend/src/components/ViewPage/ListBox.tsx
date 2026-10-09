import { useRef, useState } from "react"

interface ListBoxProps{
    title:string
}

export const ListBox=(props:ListBoxProps)=>{
    const inputRef=useRef<HTMLInputElement | null>(null);
    const [comments,setComments]=useState<string[]>([]);

    function handleOnClick(){
        if(inputRef.current){
        const input=inputRef.current;
        if(!input)return;

        setComments((c)=>[...c,input.value]);
        inputRef.current.value="";
        }
    }

    return (
      <div className="flex h-full w-full min-h-0 flex-col p-2">
        <h3>{props.title}</h3>
        
        <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="type away amigo"
        />

        <button type="button" onClick={handleOnClick}>
          Post
        </button>
      </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="flex flex-col ">
            {comments.map((comment, i) => (
              <div key={i}>{comment}</div>
            ))}
          </div>
        </div>
      </div>
    );
}
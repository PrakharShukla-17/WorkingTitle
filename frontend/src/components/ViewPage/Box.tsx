


interface BoxProps{
    title:string,
    descp:string,
}



export const Box = (props: BoxProps) => {
  return (
    <div
      className="bg-blue-300  w-full h-full "
    >


      <h2>{props.title}</h2>
      <p>{props.descp}</p>
      
    </div>
  );
};
import ResponsiveAppBar from './components/AppBar.tsx'
import {Card} from './components/Card.tsx'
import './App.css'
import { useEffect, useRef, useState } from 'react'

interface Posts{
  id: number,
  userId: number,
  title: string,
  body: string
}

function App() {
 const [posts,setPosts]=useState<Posts[]>([]);
 const [loading,setLoading]=useState(false);
 const [page,setPage]=useState(1);
 const Observer=useRef<IntersectionObserver|null>(null);

 //this is a callback ref:
 const lastPostRef=(node:HTMLDivElement | null)=>{
  if(loading)return;

  if(Observer.current){
    Observer.current.disconnect();
  }

  Observer.current=new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
      setPage((p)=>p+1);
    }
  })

  if(node){
    Observer.current.observe(node);
  }
 }


 useEffect(()=>{

  //https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10   BE routeSyntax

  const fetchPosts=async()=>{
    setLoading(true);
    const res=await fetch(`http://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    const data=await res.json();
    
    setPosts((prev)=>[...prev,...data]);

    setLoading(false);
  }


  fetchPosts();



 },[page]);

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
    
      <div className='flex items-center justify-center mt-20'>
      <div className='flex flex-col items-center p-2  w-112 h-screen gap-10'>
        {posts.map((p,i)=>(
             <div key={i}  ref={i===posts.length-1?lastPostRef:null}>
               <Card id={p.id} userId={p.userId} title={p.title} body={p.body} ></Card>
             </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
      </div>
    </>
  )
}

export default App

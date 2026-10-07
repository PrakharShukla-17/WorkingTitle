import { Login } from "../components/Login"
import { Signup } from "../components/Signup"


export const PostBar=()=>{
    return(
        <div className="h-32 w-screen rounded-xl bg-blue-300 flex space-evenly">
            <div>
                EXPLORE SECTION 
            </div>
             <div className="flex space-evenly">
                <Signup></Signup>
                <Login></Login>
            </div>
        </div>
    )
}
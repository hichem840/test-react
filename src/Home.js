import { useState } from "react"

const Home = () => {
    const [name,setName]=useState("hichem")
    const [age,setAge]=useState(19)
   const handelclick =()=>{
      setName("Moh")
      setAge(8)
   }
   const handelclikagain=(name,e) =>{
      console.log("hello " + name , e.target)
   }
    return (
        <div>
             <p>{ name } is {age} years old </p>
            <button onClick={handelclick} >click me </button>
            <button onClick={ (e)=>{ handelclikagain("hichem", e)} }>click me again</button>
        </div>
    )
}

export default Home
import { useState } from "react";


function Home() {

    const [count, setcount] = useState(0)

    const [email,setEmail] = useState("")

    const [password,setPassword] = useState("")

    function addhendel (){

        setcount(count+1)

    }
    
    function removehendel (){

        setcount(count+1)

    }

    let submitData = (e)=>{
        e.preventDefault()
        console.log(email)
        console.log(password)
    }


    return (
        <>
        <h1>{count}</h1>
          <button onClick={addhendel}>add</button>
          <button onClick={removehendel}>remove</button>
          
          <br /><br /><br /><br />

          <form  onSubmit={(e)=>submitData(e)}>
            <label>enter your email</label>
            <input type="text" placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <label>enter your password</label>
            <input type="text" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <br />

            <button type="submit"> Login</button>
          </form>
        </>
    )
}
export default Home;
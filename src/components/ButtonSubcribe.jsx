import {useState} from 'react'
import {  toast } from "react-toastify";

function Botton () {

    const [subcribe , setSubcribe] = useState(false)

    return ( 
        <>   
        <button
           onClick = {() => {  
           toast.success('Felicidades , ya estas suscripto')
           
           setSubcribe(!subcribe)
           
           }}
           >
            
             {
                subcribe ? 'ya estas subscrito' : 'subcribete '
             }
            
        </button>
        <ToastContainer />
        </>
            )


} export default Botton 
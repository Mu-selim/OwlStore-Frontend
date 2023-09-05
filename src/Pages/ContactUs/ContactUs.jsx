import "../../assets/ContactUs.css";
import { Footer } from "../../components/Footer"
import { Input } from "../../components/txtInput";
import { InputArea } from "../../components/textarea";
export let ContactUs=()=>{
    return(
        <div className="bg-secondary">
        <div id="main" className="borderr w-7/12 mx-auto flex overflow-hidden rounded-lg" >
            <img
            className="h-full w-5/12"
             src="../../../public/images/ContactUS.jpg" alt="" />
             <div className="w-7/12 bg-secondary text-2xl h-full font-bold p-10 flex flex-col justify-center">
                <h3>Leave us a message</h3>
                <form action="">
                <Input name="Name"/>
                <Input name="Mail"/>
                <Input name="Subject"/>
                <InputArea name="Tell us about it..."/>
                <div className=" w-full flex justify-center">
                <button className="bg-yellow-light hover:bg-amber-300
                 text-white font-bold py-2 px-4 rounded-md w-3/6">
                    Send
                </button>
                </div>
                </form>
                
             </div>
        </div>
        <Footer/>
        </div>
    )
}
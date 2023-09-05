import "../../assets/ContactUs.css";
import { Footer } from "../../components/Footer"
import { Input } from "../../components/txtInput";
import { InputArea } from "../../components/textarea";
import { useEffect, useState } from "react";



export let ContactUs=()=>{
    let [state,Setstate]=useState({
        Name:false,
        Mail:false,
        Subject: false,
        Description:false,
        send: false,
    })
    const validateEmail = (event) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let error=document.getElementById(`warn${event.target.id}`);
        if (event.target.value == "") {
            error.innerText="Email cannot be empty"
            Setstate({
                ...state,
                Mail:false
            })
        }
        else if(emailRegex.test(event.target.value)){
            error.innerText="";
            Setstate({
                ...state,
                Mail:true
            })
        }
        else 
        {
            error.innerText="Email is not valid";
            Setstate({
                ...state,
                Mail:false
            })
        }
    };
    const validateWords =(event)=>{
        let error=document.getElementById(`warn${event.target.id}`);
        const regex=/^[A-Za-z\s]*$/;
        if (event.target.value == "") {
            error.innerText=`${event.target.id} cannot be empty`
            Setstate({
                ...state,
                [event.target.id]:false
            })
        }
        else if(regex.test(event.target.value)){
            error.innerText="";
            Setstate({
                ...state,
                [event.target.id]:true
            })
        }
        else
        {
            error.innerText=`${event.target.id} can only contain letters`;
            Setstate({
                ...state,
                [event.target.id]:false
            })
        }
    }
    const validateTextArea=(event)=>{
        let error=document.getElementById(`warn${event.target.id}`);
        if (event.target.value.length<100) {
            error.innerText=`Description has to be at least 100 characters`;
            Setstate({
                ...state,
                Description:false
            })
        }
        else
        {
            error.innerText="";
            Setstate({
                ...state,
                Description:true
            })
        }
    }
    useEffect(()=>{
            if(state.Name&&state.Mail&&state.Subject&&state.Description)
            {
                Setstate({
                    ...state,
                    send:true
                })
            }
            else
            {
                Setstate({
                    ...state,
                    send:false
                })
            }
        },[state.Name,state.Mail,state.Subject,state.Description])
    return(
        <div className="bg-secondary">
        <div id="main" className="borderr w-7/12 mx-auto flex overflow-hidden rounded-lg" >
            <img
            className="h-full w-5/12"
             src="../../../public/images/ContactUS.jpg" alt="" />
             <div className="w-7/12 bg-secondary text-2xl h-full font-bold p-10 flex flex-col justify-center">
                <h3>Leave us a message</h3>
                <form action="">
                <Input name="Name"  change={validateWords} />
                <Input name="Mail" change={validateEmail}/>
                <Input name="Subject"change={validateWords}  />
                <InputArea name="Tell us about it..." change={validateTextArea}/>
                <div className=" w-full flex justify-center">
                <button
                type="button"
                 disabled={!state.send} className="bg-yellow-light hover:bg-amber-300
                 text-white font-bold mt-2 py-2 px-4 rounded-md w-3/6 disabled:bg-gray-300">
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
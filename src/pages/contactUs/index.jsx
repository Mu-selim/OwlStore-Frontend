import { Input } from "../../components/textInput";
import { InputArea } from "../../components/textArea";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "../../components/icons/whatsAppIcon";
import { FaceBookIcon } from "../../components/icons/facebookIcon";
import { TwitterIcon  } from "../../components/icons/twitterIcon";
import { InstagramIcon } from "../../components/icons/instgramIcon";
import emailjs from '@emailjs/browser';

export let ContactUs=()=>{
    let [state,Setstate]=useState({
        Name:false,
        Mail:false,
        Subject: false,
        Description:false,
        send: false,
    })
    const clear=()=>{
        document.querySelectorAll("input[type=text]").forEach((e)=>e.value="");
        document.getElementById("Tell us about it...").value="";
        Setstate({
            ...state,
            send:false
        })
    }
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
        if (event.target.value=="") {
            error.innerText=`Description can't be empty`;
            Setstate({
                ...state,
                Description:false
            })
        }
        else if (event.target.value.length<100) {
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
     const sendEmail = () => {
        let emailTemplate={
            name:document.getElementById("Name").value,
            email:document.getElementById("Mail").value
        }
        emailjs.send('service_taq14kj', 'template_4umap5i', emailTemplate, 'WtKR9EeJOp1BnzwIz')
          clear();
        alert("Email received");
    }; 

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
        
        <div className="h-[calc(100vh-66px)] w-full flex flex-col lg:flex-row " >
            <img
            className="h-full hidden lg:inline"
             src="/images/ContactUS.jpg" alt="" />
             <div className="w-full text-2xl h-full font-bold p-16 flex flex-col justify-center lg:w-1/2 ">
                <h1 className=" text-4xl">Leave us a message</h1>
                <form action="">
                <Input name="Name"  change={validateWords} />
                <Input name="Mail" change={validateEmail}/>
                <Input name="Subject"change={validateWords}  />
                <InputArea name="Tell us about it..." change={validateTextArea}/>
                <div className=" w-full flex justify-center">
                <button
                id="sendbtn"
                onClick={sendEmail}
                type="button"
                 disabled={!state.send} className="bg-yellow-light hover:bg-amber-300
                 text-white font-bold mt-2 py-2 px-4 rounded-md w-full disabled:bg-gray-300">
                    Send
                </button>
                </div>
                </form>
        </div>
        <div className="text-2xl w-full lg:w-3/12 h-full font-bold px-16  lg:pt-16 flex flex-col justify-start">
                <h1 className=" text-xl mt-24">You can also connect to us on our <br /> social media accounts below.</h1>
                <div className="social-media flex gap-3">
                    <ul className="mt-10">
                        <li className="flex">
                        <div className="w-8 hover:cursor-pointer">
                            <FaceBookIcon color={"#edcf5d"} secondaryColor={"#010101"}/>
                        </div>
                        <span  className="ml-2 hover:cursor-pointer">FaceBook</span>
                        </li>
                        <li className="mt-3 flex">
                        <div className="w-8 hover:cursor-pointer">
                            <TwitterIcon color={"#edcf5d"} secondaryColor={"#010101"}/>
                        </div>
                        <span  className="ml-2 hover:cursor-pointer">Twitter</span>
                        </li>
                        <li className="mt-3 flex">
                        <div className="w-8 hover:cursor-pointer">
                            <InstagramIcon color={"#edcf5d"} secondaryColor={"#010101"}/>
                        </div>
                        <span  className="ml-2 hover:cursor-pointer">Instagram</span>
                        </li>
                        <li className="mt-3 flex">
                        <div className="w-8 hover:cursor-pointer">
                            <WhatsAppIcon color={"#edcf5d"} secondaryColor={"#010101"}/>
                        </div>
                        <span  className="ml-2 hover:cursor-pointer">WhatsApp</span>
                        </li>
                    </ul>
                    </div>
        </div>
        </div>
    )
}
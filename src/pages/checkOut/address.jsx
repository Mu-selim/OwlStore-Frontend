import { Input } from "../../components/textInput"
import { useState } from "react";
export const Address = ({changeStage})=>{

    const [address, setAddress] = useState({
        city : "",
        street : "",
        building : "",
        apartment : "",
        cityError : "",
        streetError : "",
        buildingError : "",
        apartmentError : "",
    });
    const cityChange = (event)=>{
        setAddress({
            ...address,
            city: event.target.value
        })
    }

    const stChange = (event)=>{
        setAddress({
            ...address,
            street: event.target.value,
        })

    }

    const buildingChange = (event)=>{
        setAddress({
            ...address,
            building: event.target.value,
        })

    }

    const apartmentChange = (event)=>{
        setAddress({
            ...address,
            apartment: event.target.value
        })
    }

    const nextStage= ()=>{
        console.log(address);
        let addressInfo = {
            city : address.city,
            street : address.street,
            building : address.building,
            apartment : address.apartment,
        }
        changeStage(addressInfo)
    }

    return(
        <>
            <div className="address px-7">
                <p className=" font-semibold mt-1">Delivery Address:</p>
                <form className="px-3">
                    <Input name={"City"} change={cityChange}/>
                    <span className={address.cityError==="" ? "hidden":"text-xs ml-1 font-bold"}>
                    {address.cityError}</span>

                    <Input name={"Street"} change={stChange}/>
                    <span className={address.streetError==="" ? "hidden":"text-xs ml-1 font-bold"}>
                        {address.streetError}</span>

                    <Input name={"Building no."} change={buildingChange}/>
                    <span className={address.buildingError==="" ? "hidden":"text-xs ml-1 font-bold"}>
                        {address.buildingError}</span>

                    <Input name={"Apartment no."} change={apartmentChange}/>
                    <span className={address.apartmentError==="" ? "hidden":"text-xs ml-1 font-bold"}>
                        {address.apartmentError}</span>

                </form>
            </div>
            <div className="flex justify-end px-7 my-5">
                <input type="button" 
                    className="bg-yellow-light p-2 w-2/6 rounded-lg font-bold hover:cursor-pointer hover:scale-95 transition-transform" 
                    value={"Next"}
                    onClick={nextStage}
                />
            </div>
        </>
    )
}
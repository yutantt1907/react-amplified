import React,{useState} from "react";
import Resources from "./Resources";
import awsAutocallUi from "../apis/awsAutocallUi"; 
import ReloadButton from "./CustomButton";

const ShelterTab=()=>{
    const [Shelter,setShelters]= useState([]);
    const onReloadSubmit = async()=>{
    try{
        const params = {
          //   ui_flg : "call_target",//"call_target",
              id: 1,
          };
        console.log(params)
        const response =await awsAutocallUi.get("/posts",{params})
        console.log(response)
        setShelters(response.data);
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className="ui container" style={{marginTop:"30px"}}>
           <ReloadButton onClick={onReloadSubmit} color="primary" text="posts"/>
        <Resources resources={Shelter}/>
        </div>
    )
}

// 25694200-bda65bedea42d6095e2cd38ef
export default ShelterTab;
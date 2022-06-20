import React,{useState} from "react";
import awsAutocallUi from "../apis/awsAutocallUi"; 
import './styles/NumberTab.css'
import RegistForm from "../components/RegistForm"
import DeleteForm from "../components/DeleteForm"
const UserRegistTab=()=>{
    const [UserRegist,setUserReginsts]= useState([]);
    const onRegistUser =async(term)=>{
        try{
            const params = {
                ui_flg:"script_reg",
                script_data:term,
            };
            const response =await awsAutocallUi.get("/ui",{params})
            console.log(response)
        }catch{
            window.alert("失敗")
        }
    }
    const onDeleteUser =async(
        term
            )=>{
        try{
            const params = {
                ui_flg:"script_del",
                version:term,
            };
            console.log(params)
            const response =await awsAutocallUi.get("/ui",{params})
            console.log(response)
        }catch{
            window.alert("失敗")
        }
    }
    const onRegistSubmit =async(
        userNumberRegist,userLevelRegist,userNameRegist,
        userAdressRegist,userLangRegist,userScriptRegist,userNotificationWayRegist,
        userSensorRegist,supportRegist,supportNumberRegist
            )=>{
        try{
            const params = {
                // key : ApiKey,
                key :"25694200-bda65bedea42d6095e2cd38ef",
                ui_flg:"number_reg",
                // q:term,
                number:userNumberRegist,
                contact:userLevelRegist,
                lang_pt:userLangRegist,
                name:userNameRegist,
                town:userAdressRegist,
                script_ver:userScriptRegist,
                turn:userNotificationWayRegist,
                sensor_id:userSensorRegist,
                helper_name:supportRegist,
                helper_number:supportNumberRegist,
            };
            console.log(params)
            const response =await awsAutocallUi.get("/ui",{params})
            console.log(response)
            // setImages(respose.data.hits);
            // if(respose.data.hits.total === 0 ){
            //     window.alert("ヒットなし")
            // }
        }catch{
            window.alert("失敗")
        }
    }
    const onDeleteSubmit =async(
        userNumberDelete
            )=>{
        try{
            const params = {
                ui_flg:"number_del",
                number:userNumberDelete,
            };
            console.log(params)
            const response =await awsAutocallUi.get("/ui",{params})
            console.log(response)

        }catch{
            window.alert("失敗")
        }
    }    
    return(
        <div className="ui container" style={{marginTop:"30px"}}>
            <RegistForm onSubmit={onRegistSubmit}/>
            <DeleteForm onSubmit={onDeleteSubmit}/>  
        </div>
    )
}



// 25694200-bda65bedea42d6095e2cd38ef
export default UserRegistTab;
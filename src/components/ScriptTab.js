import React,{useState} from "react";
import ScriptResources from "./ScriptResource";
import awsAutocallUi from "../apis/awsAutocallUi"; 
import ReloadButton from "./CustomButton";
import comingsoon from "../img/comingsoon.jpg";
import ScriptDeleteForm from "./ScriptDeleteForm";
import ScriptRegistForm from "./ScriptRegistForm"
const ScriptTab=()=>{
    const [Script,setScripts]= useState([]);
    const onReloadSubmit = async()=>{
        try{
            const params = {
                ui_flg : "script_reload",//"call_target",
                level: 1,
                call_area:"HICITY",
            };
            const response =await awsAutocallUi.get("/ui",{params})
            console.log(response.data.body_data)
            setScripts(response.data.body_data);
        }catch(err){
                console.log(err)
        }
    }
    const onRegistScript =async(term)=>{
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
    const onDeleteScript =async(
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
    return(
        <div className="ui container number_tab" style={{marginTop:"30px"}}>
            <div className="ui segment">
                <ReloadButton className="reload_button" onClick={onReloadSubmit} color="primary" text="登録情報表示"/>
                <table class="ui basic table">
                    <thead>
                        <tr className="teltab_result_col">
                        <th className="teltab_td_name">バージョン</th>
                            <th className="teltab_td_telNo">テキスト1</th>
                            <th className="teltab_td_answer">テキスト2</th>
                            <th className="teltab_td_turn">テキスト3</th>                          
                            <th className="teltab_td_town">テキスト4</th>
                            <th className="teltab_td_shelter">SMS発信元名</th>
                            <th className="teltab_td_sensor">SMSテキスト</th>
                        </tr>
                    </thead>
                    <ScriptResources resources={Script}/>
                </table>    
            </div>
            <ScriptRegistForm onSubmit={onRegistScript}/>
            <ScriptDeleteForm onSubmit={onDeleteScript}/> 
        </div>
    )
}
export default ScriptTab;
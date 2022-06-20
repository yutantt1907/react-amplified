import React,{useState} from "react";
import "./styles/searchbar.css"

const RegistForm=({onSubmit})=>{
    const [userNumberRegist,setUserNumberRegist]= useState('');
    const [userLevelRegist,setUserLevelRegist]= useState('');
    const [userNameRegist,setUserNameRegist]= useState('');
    const [userAdressRegist,setUserAdressRegist]= useState('');
    const [userLangRegist,setUserLangRegist]= useState('');
    const [userScriptRegist,setScriptRegist]= useState('');
    const [userNotificationWayRegist,setUserNotificationWayRegist]= useState('');
    const [userSensorRegist,setUserSensorRegist]= useState('');
    const [supportRegist,setSupportRegist]= useState('');
    const [supportNumberRegist,setSupportNumberRegist]= useState('');

    const onFormSubmit=(event)=>{

        event.preventDefault();
        // onSubmit(term);        
        onSubmit(userNumberRegist,userLevelRegist,userNameRegist,
            userAdressRegist,userLangRegist,userScriptRegist,userNotificationWayRegist,
            userSensorRegist,supportRegist,supportNumberRegist)
    };
    return(
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <div className="input_field">
                        <label>バージョン</label>
                        <input type="text" name="userNameRegist" placeholder="バージョン" required value={userNameRegist}
                            onChange = {(event)=>{
                            setUserNameRegist(event.target.value)
                        }} /> 
　                  </div>
                    <div className="input_field">
                        <label>テキスト1</label>
                        <input type="text" name="userAdressRegist" placeholder="テキスト1" required value={userAdressRegist}
                            onChange = {(event)=>{
                            setUserAdressRegist(event.target.value)
                        }} />
                    </div>
                    <div className="input_field">
                        <label>テキスト2</label>
                        <input type="text" name="supportRegist" placeholder="テキスト2" value={supportRegist}
                            onChange = {(event)=>{
                            setSupportRegist(event.target.value)
                        }} />
                    </div>
                    <div className="input_field">
                        <label>テキスト3</label>
                        <input type="text" name="supportNumberRegist" placeholder="テキスト3" value={supportNumberRegist}
                            onChange = {(event)=>{
                            setSupportNumberRegist(event.target.value)
                        }} />
                    </div>
                    <div className="input_field">
                        <label>テキスト4</label>
                        <input type="text" name="userNumberRegist" placeholder="テキスト4" required value={userNumberRegist}
                            onChange = {(event)=>{
                            setUserNumberRegist(event.target.value)
                        }} />
                    </div>
                    <div className="input_field">
                    <label>SMS発信元名</label>
                        <input type="text" name="userSensorRegist" placeholder="SMS発信元名" value={userSensorRegist}
                            onChange = {(event)=>{
                            setUserSensorRegist(event.target.value)
                        }} />
                    </div>
                    <div className="input_field">
                    <label>SMSテキスト</label>
                        <input type="text" name="userSensorRegist" placeholder="SMSテキスト" value={userSensorRegist}
                            onChange = {(event)=>{
                            setUserSensorRegist(event.target.value)
                        }} />
                    </div>

                </div>
                
        
                <button className="ui button" type="submit">登録</button>
            </form>
        </div>

    )
}
// 25694200-bda65bedea42d6095e2cd38ef
export default RegistForm;
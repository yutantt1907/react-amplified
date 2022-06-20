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
                        <label>電話番号</label>
                        <input type="text" name="userNumberRegist" placeholder="電話番号" required value={userNumberRegist}
                            onChange = {(event)=>{
                            setUserNumberRegist(event.target.value)
                        }} />
                    </div>
                    <div className="input_field">
                        <label>優先度</label>
                        <select name="userLevelRegist" id="pet-select" placeholder="優先度" required 
                        onChange = {(event)=>{
                            setUserLevelRegist(event.target.value)
                        }}>
                            <option value="">選択してください</option>
                            <option value="1">要支援者</option>
                            <option value="2">一般者</option>
                            <option value="3">職員</option>
                            <option value="4">協力者</option>    
                        </select>
                    </div>
                    <div className="input_field">
                        <label>氏名</label>
                        <input type="text" name="userNameRegist" placeholder="名前" required value={userNameRegist}
                            onChange = {(event)=>{
                            setUserNameRegist(event.target.value)
                        }} /> 
　                  </div>
                    <div className="input_field">
                        <label>住所</label>
                        <input type="text" name="userAdressRegist" placeholder="住所" required value={userAdressRegist}
                            onChange = {(event)=>{
                            setUserAdressRegist(event.target.value)
                        }} />
                    </div>
                    <div className="input_field">
                        <label>言語</label>
                        <select name="userLangRegist" id="userLangRegist" placeholder="言語" required 
                        onChange = {(event)=>{
                            setUserLangRegist(event.target.value)
                        }}>
                            <option value="">選択してください</option>
                            <option value="1">日本語</option>
                            <option value="2">英語</option>
                            <option value="3">その他言語</option>
                        </select>
                     
                    </div>
                    <div className="input_field">
                        <label>スクリプトVer</label>
                        <select name="userScriptRegist" id="userScriptRegist" placeholder="スクリプト" required 
                        onChange = {(event)=>{
                            setScriptRegist(event.target.value)
                        }}>
                            <option value="">選択してください</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        
                    </div>
                    <div className="input_field">
                        <label>通知方法</label>
                        <select name="userNotificationWayRegist" id="userNotificationWayRegist" placeholder="連絡手段" required 
                        onChange = {(event)=>{
                            setUserNotificationWayRegist(event.target.value)
                        }}>
                            <option value="">選択してください</option>
                            <option value="1">電話</option>
                            <option value="2">SMS</option>
                            <option value="3">両方</option>
                        </select>
                        
                    </div>
                    <div className="input_field">
                    <label>センサーID</label>
                        <input type="text" name="userSensorRegist" placeholder="センサー" value={userSensorRegist}
                            onChange = {(event)=>{
                            setUserSensorRegist(event.target.value)
                        }} />
                    </div>
                    <div className="input_field">
                        <label>支援者氏名</label>
                        <input type="text" name="supportRegist" placeholder="支援者氏名" value={supportRegist}
                            onChange = {(event)=>{
                            setSupportRegist(event.target.value)
                        }} />
                    </div>
                    <div className="input_field">
                        <label>支援者電話番号</label>
                        <input type="text" name="supportNumberRegist" placeholder="支援者電話番号" value={supportNumberRegist}
                            onChange = {(event)=>{
                            setSupportNumberRegist(event.target.value)
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
import React,{useState} from "react";
import "./styles/searchbar.css"

const ScriptDeleteForm=({onSubmit})=>{
    const [userNumberDelete,setUserNumberDelete]= useState('');
    
    const onFormSubmit=(event)=>{

        event.preventDefault();
        // onSubmit(term);        
        onSubmit(userNumberDelete)
    };
    return(
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <div className="input_field">
                        <label>スクリプトVer</label>
                        <input type="text" name="userNumberDelete" placeholder="スクリプトver" required value={userNumberDelete}
                            onChange = {(event)=>{
                            setUserNumberDelete(event.target.value)
                        }} />
                    </div>
                </div>
                <button className="ui button" type="submit">削除</button>
            </form>
        </div>

    )
}
// 25694200-bda65bedea42d6095e2cd38ef
export default ScriptDeleteForm;
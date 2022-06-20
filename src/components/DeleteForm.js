import React,{useState} from "react";
import "./styles/searchbar.css"

const DeleteForm=({onSubmit})=>{
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
                        <label>電話番号</label>
                        <input type="text" name="userNumberDelete" placeholder="電話番号" required value={userNumberDelete}
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
export default DeleteForm;
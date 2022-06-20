import React,{useState} from "react";

const Checkfield=({onSubmit})=>{
    const [call_area,setCall_area]= useState('');
    const [call_role,setCall_role]= useState('');
    const [target_level,setTarget_level]= useState('');
    const [ui_flg,setui_flg]= useState("call_start");
    // const disableSubmit=(form)=> {
    //     var elements = form.elements;
    //     for (var i = 0; i < elements.length; i++) {
    //       if (elements[i].type == 'submit') {
    //         elements[i].disabled = true;
    //       }
    //     }
    //   }
    // window.onload = () => {

    //     frm.onsubmit = () => {
    //       console.log('1度しか実行されません');
    //       btn.disabled = true;
    //       return false; // 処理確認用
    //     }
    // }
      
    const onFormSubmit=(event)=>{
        event.preventDefault();
        // disableSubmit(this);
        onSubmit(ui_flg,call_area,call_role,target_level)
    };

    return(
        <div>
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    {/* <div className="input_field">
                        <label for="call" >
                            <p>発呼確認</p>
                            <select name={ui_flg} placeholder="発呼確認" id="call"   
                                onChange = {(event)=>{
                                    setui_flg(event.target.value)}}>
                                    <option value="">選択してください</option>
                                    <option value="call_start">発呼許可を確認しました</option> 
                            </select>
                        </label>
                    </div> */}
                    <div className="input_field">
                        <label for="HICITY" >
                        <p>エリア選択</p>
                            <select name={call_area} placeholder="" id="HICITY"  
                                onChange = {(event)=>{
                                    setCall_area(event.target.value)}}>
                                    <option value="">選択してください</option>
                                    <option value="HICITY">HICITY</option>
                                    <option value="エリア1">エリア1</option>
                                    <option value="エリア2">エリア2</option>
                                    <option value="エリア3">エリア3</option>    
                            </select>
                            {/* <input type="checkbox" name={call_area} placeholder="" id="HICITY" value="HICITY"
                            onChange = {(event)=>{
                                setCall_area(event.target.value)
                                }}
                            />HICITY */}
                        </label>
                    </div>
                    <div className="input_field">
                        <label for="role" >
                        <p>優先度</p>
                        <select name={call_role} placeholder="優先度" id="role"   
                                onChange = {(event)=>{
                                    setCall_role(event.target.value)}}>
                                    <option value="">選択してください</option>
                                    <option value="1">避難行動要支援者</option>
                                    <option value="2">一般避難者</option>
                                    <option value="3">避難所職員</option>
                                    <option value="4">避難所協力者</option>    
                            </select>
                            {/* <input type="checkbox" name={call_role} placeholder="" id="role"value="1"
                            onChange = {(event)=>{
                                setCall_role(event.target.value)
                                }}/>role */}
                        </label>
                    </div>
                    {/* <label for="level" >
                        <input type="checkbox" name={target_level} placeholder="" id="level"value="1"onChange = {(event)=>{
                            setTarget_level(event.target.value)}}/>level
                    </label> */}

                </div>
                <button id="call-btn" className="ui button preventBoubleClick" type="submit">Submit</button>
            </form>
            
        </div>

    )
}

// 25694200-bda65bedea42d6095e2cd38ef
export default Checkfield;
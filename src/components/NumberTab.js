import React,{useState} from "react";
import Resources from "./Resources";
import awsAutocallUi from "../apis/awsAutocallUi"
import ReloadButton from "./CustomButton";
import ImgNoAnwer from "../img/NoAnwer.png"

const NumberTab=()=>{
    const [TelTab,setTelTabs]= useState([]);
    const onReloadSubmit = async()=>{
        try{
            const params = {
                ui_flg : "number_reload",//"call_target",
                id: 1,

            };
            console.log(params)
            const response =await awsAutocallUi.get("/ui",{params})
            console.log(response.data.body_data)
            setTelTabs(response.data.body_data);
        }catch(err){
                console.log(err)
        }
    }
    // const [images,setImages] = useState([]);
    
    return(
        <div className="ui container number_tab" style={{marginTop:"30px"}}>
            <div className="ui segment result_data">
                <ReloadButton idType="reload_button" className="reload_button" onClick={onReloadSubmit} color="primary" text="登録情報表示" buttonType="reloadbutton"/>
                <div className="result">
                    
                    {/* <div className="member">
                        <div className ="img_answer">
                            <img  src={ImgNoAnwer} height={"150px"} width={"150px"}/>
                            <p>避難状況</p>
                        </div>
                        <div className="text_answer">
                            <table>
                                <tr>
                                    <th>名前:</th>
                                    <td>井上裕太</td>
                                </tr>
                                <tr>
                                    <th>電話番号:</th>
                                    <td>00000000</td>
                                </tr>
                                <tr>
                                    <th>電話番号:</th>
                                    <td>00000000</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="member">
                        <div className ="img_answer">
                            <img  src={ImgNoAnwer} height={"150px"} width={"150px"}/>
                            <p>避難状況</p>
                        </div>
                        <div className="text_answer">
                            <table>
                                <tr>
                                    <th>名前:</th>
                                    <td>井上裕太</td>
                                </tr>
                                <tr>
                                    <th>電話番号:</th>
                                    <td>00000000</td>
                                </tr>
                                <tr>
                                    <th>電話番号:</th>
                                    <td>00000000</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="member">
                        <div className ="img_answer">
                            <img  src={ImgNoAnwer} height={"150px"} width={"150px"}/>
                            <p>避難状況</p>
                        </div>
                        <div className="text_answer">
                            <table>
                                <tr>
                                    <th>名前:</th>
                                    <td>井上裕太</td>
                                </tr>
                                <tr>
                                    <th>電話番号:</th>
                                    <td>00000000</td>
                                </tr>
                                <tr>
                                    <th>電話番号:</th>
                                    <td>00000000</td>
                                </tr>
                            </table>
                        </div>
                    </div> */}

                    <Resources resources={TelTab}/>
                </div>
                {/* <table class="ui basic table">
                    <thead>
                        <tr className="teltab_result_col">
                            <th className="teltab_td_answer">避難状況</th>  
                            <th className="teltab_td_name">氏名</th>
                            <th className="teltab_td_telNo">電話番号</th>
                            <th className="teltab_td_turn">避難者種別</th>                          
                            <th className="teltab_td_town">避難者住所</th>
                            <th className="teltab_td_shelter">避難先</th>
                            <th className="teltab_td_sensor">センサーID</th>
                        </tr>
                    </thead> */}
                {/* </table>     */}
            </div>
        </div>
    )
}

// 25694200-bda65bedea42d6095e2cd38ef
export default NumberTab;
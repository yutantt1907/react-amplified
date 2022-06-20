import React from "react";
import ImgNoAnwer from "../img/NoAnwer.png"
import ImgStayHome from "../img/StayHome.png"
import ImgArrived from "../img/arrived.png"
import requestSOS from "../img/requestSOS.png"
import ImgKeepWaiting from "../img/KeepWaiting.png"
import ImgRefuging from "../img/Refuging.png"
const Resources =({resources})=>{
  
  return(
    <React.Fragment>
          {resources.map((resource)=>{
            if(resource.evacuated!="yes" ){
              console.log(typeof resource.answer)
              console.log(resource.answer)
              if(resource.answer=="answered_1"){
                resource.set_answer="避難所へ避難中" 
                resource.set_answer_img = ImgRefuging
              }else if(resource.answer=="answered_2"){
                resource.set_answer="自主避難" 
                resource.set_answer_img = ImgStayHome
              }else if(resource.answer=="answered_3"||resource.answer=="answered_helper_2"){
                resource.set_answer="避難支援要求" 
                resource.set_answer_img = requestSOS
              }else if(resource.answer=="answered_helper_1"){
                resource.set_answer="支援者が向かっています" 
                resource.set_answer_img = ImgKeepWaiting
              }else{
                resource.set_answer="避難通知の応答なし" ;
                resource.set_answer_img = ImgNoAnwer
              }
            }else{
              resource.set_answer="避難完了"
              resource.set_answer_img = ImgArrived
            }
            switch(resource.turn){
              case '1':
                resource.set_turn  ="要支援者"
              break;
              case '2':
                resource.set_turn  ="一般者"
              break
            }
            resource.numberid = "0"+resource.number.slice(3);
            return(
              <div className="member">
                        <div className ="img_answer">
                            <img  src={resource.set_answer_img } height={"150px"} width={"150px"}/>
                            <p>{resource.set_answer}</p>
                        </div>
                        <div className="text_answer">
                            <table>
                                <tr>
                                    <th>名前:</th>
                                    <td>{resource.name}</td>
                                </tr>
                                <tr>
                                    <th>電話番号:</th>
                                    <td>{ resource.numberid}</td>
                                </tr>
                                <tr>
                                    <th>避難先:</th>
                                    <td>{resource.shelter}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
              // <tbody>
              //   <tr key={resource.number}>
              //   <th className="teltab_td_answer">
              //                   <div className ="img_answer">
              //                   <img  src={resource.set_answer_img } height={"50px"} width={"50px"}/>
              //                   <p>{resource.set_answer}</p>
              //                   </div>
                                
              //               </th>
              //     <td className="teltab_td_name">{resource.name}</td>
              //     <td className="teltab_td_telNo" >{ resource.numberid}</td>
              //     <td className="teltab_td_turn">{resource.set_turn}</td>
              //     <td className="teltab_td_town">{resource.town}</td>
              //     <td className="teltab_td_shelter">{resource.shelter}</td>
              //     <td className="teltab_td_sensor">{resource.sensor_id}</td>
              //   </tr>
              // </tbody>
            
          )})}
      {/*
      <p key={resource.id} className={resource.id} >{resource.title}</p>
      */}
    </React.Fragment>
  );
};
export default Resources;

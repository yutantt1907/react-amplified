import React from "react";

const Resources =({resources})=>{
  
  return(
    <React.Fragment>
          {resources.map((resource)=>{
            if(resource.evacuated=="no" ){
              console.log(typeof resource.answer)
              console.log(resource.answer)
              if(resource.answer=="answered_1"){
                resource.set_answer="避難所へ避難" 
              }else if(resource.answer=="answered_2"){
                resource.set_answer="自主避難" 
              }else if(resource.answer=="answered_3"){
               resource.set_answer="避難援護要求" 
              }else(
                resource.set_answer="避難通知応答なし" 
              )
            }else{
              resource.set_answer="避難登録済み"
            }
            resource.numberid = "0"+resource.number.slice(3);
            return(
              <tbody>
                <tr key={resource.number}>
              <td className="teltab_td_name">{resource.name}</td>
              <td className="teltab_td_telNo" >{ resource.numberid}</td>
              <td className="teltab_td_answer">{resource.set_answer}</td>
              <td className="teltab_td_turn">{resource.turn}</td>
              {/* <td className="teltab_td_evacuated">{resource.evacuated}</td> */}
              
              <td className="teltab_td_town">{resource.town}</td>
              {/* <td className="teltab_td_lang">{resource.lamg_pt}</td> */}
              {/* <td className="teltab_td_script">{resource.script_ver}</td> */}
              {/* <td className="teltab_td_contact">{resource.contact}</td> */}
              <td className="teltab_td_shelter">{resource.shelter}</td>
              {/* <td className="teltab_td_callback">{resource.callback}</td> */}
              <td className="teltab_td_sensor">{resource.sensor_id}</td>
              {/* <td className="teltab_td_helperName">{resource.helper_name}</td>
              <td className="teltab_td_helperNum">{resource.helper_number}</td> */}
                </tr>
              </tbody>
            
          )})}
      {/*
      <p key={resource.id} className={resource.id} >{resource.title}</p>
      */}
    </React.Fragment>
  );
};
export default Resources;

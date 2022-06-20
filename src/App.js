/* eslint-disable import/first */

/* src/App.js */
import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
import awsExports from "./aws-exports.js";
// conponent
import Button from "./components/CallingButton"
import awsAutocallUi from "./apis/awsAutocallUi"; 


Amplify.configure(awsExports);

// react-tabs
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import NumberTab from './components/NumberTab';
import ScriptTab from './components/ScriptTab';
import UseRegistTab from './components/UserRegistTab';
import ResultTab from './components/ResultTab';
import ShelterTab from './components/ShelterTab';
import SensorResultTab from './components/SensorResultTab';
// react-modal popup
import Popup from "./components/Popup" ;
// icon
import iconImage from "./img/autocalllogo_bl.png"


const initialState = { name: '', description: '' }
const server = 'https://9kwveffawh.execute-api.ap-northeast-1.amazonaws.com/default/iot_autocall_OutboundStart'


const App = () => {
  const onResetDemo =()=>{
    try{
      const params = {
          ui_flg : "demo_reset",//"call_target",
      }
      console.log(params)
      const response = awsAutocallUi.get("/ui",{params})
      console.log(response.data.body_data)
      
    }catch(err){
          console.log(err)
    }
  }

// // popup
  const style = {
    width :'50%',
    margin :'0 auto',
    marginTop: '150'
  };
  

  return (
    <div  >
       <div id='header' className='header'>
         <div className='iconImg'><img className='autocallIcon' src={iconImage} style ={{width:'100%',height:"100%"}}/></div>
          <h2 className='header_name' style ={{padding:'auto 20px'}}>オートコール for デモ</h2>
       </div>
       <div id='main' className='ui container'>
       <Popup/>
       {/* <Button variant="success" className="mr-2 ui button" onClick={onResetDemo} style={{width:"200px",backgroundColor:"#FF0000",color:"#FFFFFF"}}>デモクリア</Button> */}
       <Tabs >
        <TabList className={"ui top attached tabular menu"}>
          <Tab>電話番号</Tab>
          {/* <Tab>スクリプト</Tab> */}
          <Tab>避難登録</Tab>
          {/* <Tab>結果</Tab>
          <Tab>避難所</Tab>
          <Tab>センサー</Tab> */}
        </TabList>
        <TabPanel className={"ui bottom attached active tab segment"}>
          <NumberTab/>
        </TabPanel >
        <TabPanel >
          <UseRegistTab/>          
        </TabPanel>
        {/* <TabPanel >
          <ScriptTab/>
        </TabPanel>
        <TabPanel >
          <ResultTab/>
        </TabPanel>
        <TabPanel >
          <ShelterTab/>
        </TabPanel>
        <TabPanel>
          <SensorResultTab/>
        </TabPanel> */}
      </Tabs>
      <div style={style}>  {/* popUPした後の閉じるための外側の空間 */}</div>
       </div>
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }

}

export default withAuthenticator(App);

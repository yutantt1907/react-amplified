import React , { useEffect, useState }from 'react';
import Modal from 'react-modal'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

import Axios from 'axios';
import Checkfield from './CheckField';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };  
const Popup = () => {
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {        
        subtitle.style.color = '#3ab60b';
    }
    function closeModal(){
        setIsOpen(false);
    }
    const [users,setUsers] = useState([]);
  const apiserver = 'https://ldth7werp5.execute-api.ap-northeast-1.amazonaws.com/ui';
  const onCallSubmit = async(ui_flg,call_area,call_role,target_level)=>{
    const params = {
      // withCredentials: true,cookie情報を送信する場合
      ui_flg : ui_flg,//"call_start",
      call_area : call_area,
      role : call_role,
      level : target_level
      
    };
    
    try{
      console.log(params)
      const response =await Axios.get(apiserver,{params})
      // .then((res)=>{console.log(res)})
      // setUsers(response.statusCode)
      window.alert("コールしました");
      closeModal()
      // if(response !=null){
      //   window.alert("成功しました")
      // }
    }catch{
      window.alert("失敗")
      closeModal()
    }
  }

// 
    const [val, setVal] = React.useState(['']);
    const handleChange = e => {
      // change したのはいいとして、ON なのか OFF なのか判定する必要がある
      if (val.includes(e.target.value)) {
        // すでに含まれていれば OFF したと判断し、
        // イベント発行元を除いた配列を set し直す
        setVal(val.filter(item => item !== e.target.value));
      } else {
        // そうでなければ ON と判断し、
        // イベント発行元を末尾に加えた配列を set し直す
        setVal([...val, e.target.value]);
        // state は直接は編集できない
        // つまり val.push(e.target.value) はNG ❌
      }
    };
    // var ui_flg =""// "call_start";
    // var call_areas =""// "HICITY";
    // var call_roles =""//"要支援者";
    // var target_level =""//"1";
    // var params = {
    //   // withCredentials: true,cookie情報を送信する場合
    //   ui_flg : ui_flg,
    //   call_area : call_areas,
    //   role : call_roles,
    //   level : target_level
    // };
    // const calling =async(params)=>{
    //   try{
    //       console.log("lambda invoking !")
    //       console.log(params)
    //       // server = apiserver+"?call_area=HICITY&level=1&role=1&ui_flg=call_start"
    //       Axios.get(apiserver,{params})
    //       .then((res)=>{
    //         console.log("lambda invoked !")
    //         console.log(res)
    //       })
    //       console.log(params)
          
    //       // const posts = await jsonplaceholder.get('/posts');
    //       // setResources(posts.data);
    //   }catch(err){
    //     console.log(err);
    //   };
    
    return (    
        <div style={{marginBottom:'30px'}}>
        <Button variant="success" className="mr-2 ui button" onClick={openModal } style={{width:"200px",backgroundColor:"#FF0000",color:"#FFFFFF"}}>発呼</Button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>発呼確認</h2>
          {/* <Button variant="success" className="mr-2" onClick={closeModal}>close</Button> */}
          {/* <label>
            <input
              type="checkbox"
              value="A地区"
              onChange={handleChange}
              checked={val.includes('A地区')}
            />A地区
          </label>
          <label>
            <input
              type="checkbox"
              value="B地区"
              onChange={handleChange}
              checked={val.includes('B地区')}
            />
            B地区
          </label>
          <label>
            <input
              type="checkbox"
              value="HICITY"
              onChange={handleChange}
              checked={val.includes('HICITY')}
            />
            HICITY
          </label>
          <p>選択値:{call_areas = val}</p> */}
          <Checkfield  onSubmit={onCallSubmit}/>
          {/* <CallingButton onClick={calling()} color='primary' text='発呼' />           */}
        </Modal>
      </div>
    );
}

export default Popup;
import axios from "axios";

export default axios.create({
  // baseURL:"https://jsonplaceholder.typicode.com/".
  // baseURL:'https://9kwveffawh.execute-api.ap-northeast-1.amazonaws.com/default/iot_autocall_OutboundStart',
  baseURL:"https://ldth7werp5.execute-api.ap-northeast-1.amazonaws.com",
});

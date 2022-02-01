import axios from "axios";

export default axios.create({
  baseURL:'https://9kwveffawh.execute-api.ap-northeast-1.amazonaws.com/default/iot_autocall_OutboundStart',
});

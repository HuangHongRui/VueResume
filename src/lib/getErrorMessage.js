// const map = {
// 	202: '用户名被占用',
// 	217: '无效用户名',
// 	unknown: '注册失败,稍后再说'
// }
// export default funtion({code}){
// 	return map[code] || map.unknown
// }

const map = {
   202:  '用户名已被占用',
   210:  '用户名和密码不匹配',
   211:  '找不到该用户',
   217:  '无效的用户名',
   unknown:  '注册失败，请稍后再试'
 }
 export default function({code}){
   return map[code] || map.unknown
 }
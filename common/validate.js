/*验证用户名*/
const validateUsername=function(str){
	const reg =  /^[a-zA-Z0-9_-]{6,15}$/;
	return reg.test(str);
} 
/**验证用户密码*/
const  validatePassword=function(str){
    const reg = /^[a-zA-Z0-9_-]{8,15}$/;
    return reg.test(str);
}
const validatetel=function(str){
	const reg =  /^[0-9]{11}$/;
	return reg.test(str);
} 


const hosturl="http://180.76.245.216:81/bh/";

export default {
    validateUsername,
    validatePassword,
	hosturl,
	validatetel
}
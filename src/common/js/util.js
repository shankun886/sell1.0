/*
	*解析url参数
	*@example   ?id=12345&a=b
	*@return Object {id:12345,a:b}
*/
export function urlParse(){
	let url = window.location.search;   //http://localhost:8080/?id12345&a=b/seller则url为?12345&a=b
	let obj = {};
	let reg=/[?&][^?&]+=[^?&]+/g;  //第一个[?&]匹配问号,[^?&]+匹配非?和&一个或多个，=匹配=，[?&]+匹配非?和&一个或多个
	let arr = url.match(reg);//返回一个数组['?id=12345','&a=b']
	if(arr){
		arr.forEach((item)=>{
			let tempArr = item.substring(1).split('=');//第一个字符删掉，=号分割
			let key = decodeURIComponent(tempArr[0]);
			let val = decodeURIComponent(tempArr[1]);
			obj[key]=val;
		});
	}
	return obj;

};
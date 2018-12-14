/***
 * 
 *统一定义接口，有利于维护 
 * 
 **/

const IFClubUrl = 'https://www.intellif.club:3002/';
const URL = {
    getToken: IFClubUrl + 'login',//登录获取token
    testJwt: IFClubUrl + 'testjwt', //测试token是否失效
    getPageContent: "https://cnodejs.org/api/v1/topics"
}
export default URL

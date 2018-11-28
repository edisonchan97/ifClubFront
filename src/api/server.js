import axios from 'axios'
import { message } from 'antd'
// server.js主要对axios进行第二次封装


axios.create({
    timeout: 5000,// 请求超时时间
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

//添加一个请求拦截器
axios.interceptors.request.use(
    function (config) { // 发送请求之前做一些事情 【一般定义加载提示】
        console.log('config', config)
        
        message.loading("Loading",0)
        if (config.url.indexOf('/login') === -1) {

            //获取储存在本地的token值
            let authToken = sessionStorage.getItem("IF_Club_Token");
            //这边可根据自己的需求设置headers，我司采用basic基本认证
            if (authToken === null) {
                authToken = window.btoa("nucleus" + ":" + "nucleus-secret");
                config.headers.Authorization = `Basic ` + authToken;
            }
            else {
                config.headers.Authorization = `Bearer ` + authToken
            }
        }
        return config;
    },
    function (error) { // 挂掉之后怎么处理
        message.destroy(); // 执行加载动画
        return Promise.reject(error);
    }
);


//添加一个响应拦截器
axios.interceptors.response.use(
    function (res) { // 返回的数据成功时做一些事
        console.log("res", res)
        message.destroy(); // 销毁动画
        return res.data;
    },
    function (error) { // 处理错误的内容
        // console.log(error)
        // console.log(error.message);
        message.destroy(); // 销毁动画
        message.error(error.response.statusText)
        console.log(error.response);
        return Promise.reject(error.response);
    }
);
export default axios
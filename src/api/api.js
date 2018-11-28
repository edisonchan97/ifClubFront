import server from './server';
import url from './api.config';

//接口1方法
export function getToken(data) {
    return server({
        url: url.getToken,
        method: 'post',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        data: data
    }).catch((err)=>{
        return err;
    })
}

//接口2方法
export function jwtTest(data) {
    return server({
        url: url.testJwt,
        method: 'get',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        data: data
    }).catch((err)=>{
        return err;
    })
}

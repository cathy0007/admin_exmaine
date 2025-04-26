
/*
*  管理后台admin相关接口
*/
import Http from '@/utils/request'

const login = (data) => {
    return Http.post('/login', data)
}
// 获取省份
const getProvincial = (params) => {
    return Http.get('/provincial', params)
}
// 获取城市
const getCity = (params) => {
    return Http.get('/city', params)
}
// 机构列表
const hospital = (params) => {
    return Http.get('/hospital', params)
}
// 体检项列表
const itemlist = (params) => {
    return Http.get('/itemlist', params)
}
// 添加体检项
const itemadd = (params) => {
    return Http.post('/itemadd', params)
}

const itemdelete = (params) => {
    return Http.get('/itemdelete', params)
}
// 体检套餐列表
const composelist = (params) => {
    return Http.get('/composelist', params)
}
const composeadd = (params) => {
    return Http.post('/composeadd', params)
}
const composedelete = (params) => {
    return Http.get('/composedelete', params)
}

export {
    login,
    getProvincial,
    getCity,
    hospital,
    itemlist,
    itemadd,
    itemdelete,
    composelist,
    composeadd,
    composedelete
}

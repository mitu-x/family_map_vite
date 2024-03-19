import {get} from '../utils/methods.ts'


export function getListByName(name: String) {
    return get('/book/getListByName', {name}); //测试接口
}

import request from '@/utils/request'

export function itemsList(query) {
    return request({
        url: '/funeralSupervision/itemsList',
        method: 'get',
        params: query
    })
}

export function managerList(query) {
    return request({
        url: '/funeralSupervision/managerList',
        method: 'get',
        params: query
    })
}
export function illegalList(query) {
    return request({
        url: '/funeralSupervision/illegalList',
        method: 'get',
        params: query
    })
}
export function illegalListDetail(id) {
    return request({
        url: '/funeralSupervision/illegaldetail',
        method: 'get',
        params: { id }
    })
}


import request from '@/utils/request'

export function getCemeterys(id) {
    return request({
        url: '/cemetery/list',
        method: 'get',
        params: id
    })
}
export function getCemeteryDetail(id) {
    return request({
        url: '/cemetery/detail',
        method: 'get',
        params: { id }
    })
}

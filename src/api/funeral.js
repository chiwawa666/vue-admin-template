import request from '@/utils/request'

export function getPeople(id) {
    return request({
        url: '/funeral/list',
        method: 'get',
        params: id
    })
}
export function randomName(id) {
    return request({
        url: '/randomName/list',
        method: 'get',
        params: id
    })
}
export function getPeopleDetail(id) {
    return request({
        url: '/funeral/detail',
        method: 'get',
        params: { id }
    })
}
export function getBlocks(id) {
    return request({
        url: '/block/list',
        method: 'get',
        params: id
    })
}

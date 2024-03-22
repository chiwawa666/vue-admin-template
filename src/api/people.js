import request from '@/utils/request'

export function getPeople(id) {
    return request({
        url: '/people/list',
        method: 'get',
        params: id
    })
}
export function getPeopleDetail(id) {
    return request({
        url: '/people/detail',
        method: 'get',
        params: { id }
    })
}

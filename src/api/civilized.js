import request from '@/utils/request'

export function getRule(id) {
    return request({
        url: '/civilized/rule/list',
        method: 'get',
        params: id
    })
}

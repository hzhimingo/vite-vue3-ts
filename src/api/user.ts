import service from '@/utils/request';

export function getCode(data: any) {
  return service({
    url: '/login/code',
    method: 'post',
    data,
  });
}

export function login(data: any) {
  return service({
    url: '/login',
    method: 'post',
    data,
  });
}

export function getPolicy(data: any) {
  return service({
    url: '/policy_protocol/list',
    method: 'get',
    params: data,
  });
}

import request from '../utils/request';
import qs from 'qs';

export async function getnews() {
  return request('http://localhost:3000/getNews5',{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
}
import  fly from 'flyio'
// var fly = require('flyio')

import { client_id, redirect_uri, baes_url } from '../config/index'

export function getInfo() {
  return fly.get('https://jsonplaceholder.typicode.com/users')
}

export async function authorize() {
  let path = '/api/oauth2/authorize'
  return fly.post(path, {
    client_id,
    redirect_uri
  })
}

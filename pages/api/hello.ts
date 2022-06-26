// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

export const usersApi = {
  getUsers() {
    return instance.get('users').then(res => res.data)
  },
  getUser(id) {
    return instance.get(`users/${id}`).then(res => res.data)
  },
  getPosts() {
    return instance.get('posts').then(res => res.data)
  },
  getPost(id) {
    return instance.get(`posts/${id}`).then(res => res.data)
  },
}

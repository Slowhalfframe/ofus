import axios from "../axios";
// import utils from "../plugins/utils";


export function fetchGet(url, token) {
  return new Promise((resolve, reject) => {
    axios.get(url, {headers: {'Authorization': token}})
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchPost(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

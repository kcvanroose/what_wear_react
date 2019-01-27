
class API {

    static login (username, password) {
        return fetch(API.loginUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            user: {
                username,
                password
            }
            })
        }).then(resp => resp.json()) 
    }

    static validate = (token) => {
       return fetch(API.validateURL, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
       }).then(resp => resp.json())
            .then(data => console.log(data))
    }

}

API.baseUrl = 'http://localhost:3000'
API.loginUrl = API.baseUrl + '/login'
API.validateURL = API.baseUrl + '/validate'

export default API

 
// fetch('http://localhost:3000/login', {
// 	method: 'POST',
// 	 headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         user: {
//           username: 'Casey',
//           password: 'casey'
//         }
//       })
//     }).then(resp => resp.json())

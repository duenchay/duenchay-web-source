import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends = [
    {
      name: 'แพรรี่',
      pic: 'pare.jpg',
      // position: 'CEO',
    },
    {
      name: 'เกดจัง',
      pic: 'ket.jpg',
      // position: 'Secretary',
    },
    {
      name: 'เจ้าคิง',
      pic: 'king.jpg',
      // position: 'IT Support',
    },
    {
      name: 'เบนซ์ศรี',
      pic: 'alisa.jpg',
      
    },
    {
      name: 'ติ๊กเกอร์',
      pic: 'tik.jpg',
      
    },
    {
      name: 'เหมียวหมิว',
      pic: 'sirilak.jpg',
      
    },
    {
      name: 'ปัดทามาวันนน',
      pic: 'pat.jpg',
      
    },
  ];
  users: any

  constructor(private http: HttpClient) {
    this._getUsers()
  }

  _getUsers() {
    return this.http.post(
      'http://cs.sci.ubu.ac.th:7512/59110440084/user/_search',
      {
        query: {
          /*
          wildcard: {
            user: { value: '*an*' }
          }
          */
        }
      }
    ); /*.subscribe( data => {
      this.users = data['result']['hits']
      console.log(this.users)
    }, error => {});
    */
  }

  _saveUser(usr: string, passwd: string) {
    console.log(`user=${usr} passwd:${passwd}`);
    return this.http.post(
      'http://cs.sci.ubu.ac.th:7512/59110440084/user/_create',
      {
        user: usr,
        password: passwd,
      }
    );
  }

  getFriends() {
    return this.friends;
  }
}

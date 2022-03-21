import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  /* კონსტრუქტორში დამატებულია HttpClient რექვესთების გასაგზავნად*/
    /* Added HttpClient to send request with the constructor*/

  constructor(private _http: HttpClient) {}

  /* getAllUsers მეთოდი გვიბრუნებს მომხმარებლების სიას. იგზავნება რექვესთი მითითებულ
   api-ზე end point-ით /users, და დაბრუნებული პასუხის subscribe-მდე ვმაპავ და ისე
   გვიბრუნებს დამაპულ რესპონსს*/

   /* getAllUsers method returns a list of users. Is sent to the requisite indicated
   on the API with end point / users, and return to the subscribe of the returned answer and so on
   Returns mapped Response */
  getAllUsers() {
    return this._http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  /* getUserById მეთოდს გადაეცემა პარამეტრი id რომელიც გვჭირდება რექვესთის
  გასაგზავნად end point-ზე /users/id. მეთოდი გვიბრუნებს კონკრეტული იუზერის
  ინფორმაციას*/
  /* The getUserById method is passed to the parameter id which we need to rectify
  To send to end point / users / id. The method returns us a specific user
  Information */
  getUserById(id: number) {
    return this._http
      .get<any>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  /* getUserPostsById მეთოდი  გვიბრუნებს კონკრეტული მომხმარებლის პოსტებს userId-ის მიხედვით,
  ამ მეთოდს გადაეცემა პარამეტრად id რომელსაც ვიყენებთ end point-ში /comments?postId=id */
  /* getUserPostsById method returns specific user posts by userId,
   This method is passed to the parameter id which we use at the end point / comments? PostId = id */
  getUserPostsById(id: number) {
    return this._http
      .get<any>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
}

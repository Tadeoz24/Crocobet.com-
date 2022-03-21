import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('60ms', animate('600ms ease-out', style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query(':leave', animate('200ms', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [listAnimation],
})
export class UsersComponent implements OnInit {
  public items: any = [];
  /*ლისტის ციკლის სტილი*/
  /*list cycle styles*/

  toggleList() {
    this.items = this.items.length ? [] : [0];
  }

  /* შეიქმნა  public ცვლადი რომელიც არის Observable ტიპის რათა შემდეგ მასზე მოხდეს ასინქრონულად
   ციკლში გადავლა*/
  /* Created a public variable that is of the Observable type so that it can then be synchronized
    Go to cycle */
  public users!: Observable<any>;

  constructor(private userService: UserService, private _router: Router) {}

  ngOnInit(): void {
    /* სერვისიდან მეთოდს getAllUsers-ს რათა წამოვიღო API-ის დაბრუნებული შესაბამისი
    პასუხი და ვახდენ Observable ტიპის ცვლადზე გატოლებას*/
    /* Method from the service getAllUsers to get the corresponding API returned
     Answer and draw an equation on the Observable type variable */
    this.users = this.userService.getAllUsers();
  }
  redirecting(userId: number) {
    /* აქ ვახდენთ შემდეგ როუტზე გადამისამართებას*/
    /* Here we redirect to the next route */
    this._router.navigate(['UserInfo', userId]);
  }
}

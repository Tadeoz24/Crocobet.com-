import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
})
export class UserPostsComponent implements OnInit {
  /*  ვინახავთ მომხმარებლის id-ს */
  private userId!: number;

  /* ცვლადში ხდება მომხმარებლის პოსტის შენახვა */
  public userPosts!: Observable<any>;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    /* აქტიური როუტიდან id პარამეტრის მნიშვნელობის ამოღება და მისი რიცხვად გარდაქმნა
     შემდეგ კი მას ვინახავთ ცვლადში */
     /* Extract the value of the id parameter from the active route and convert it to a number
      And then we store it in the variable */
    this.userId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('id') as string
    );

    /*  Observable ტიპის ცვლადს ვუტოლებთ რექვესთიდან დაბრუნებულ პასუხს რომელსაც
    შემდგომ ასინქრონულად დავაკვირდებით თემფლეითში*/
    /* The observable variable is equal to the answer returned from the rectum which
     Next we will observe asynchronously in Template */
    this.userPosts = this.userService.getUserPostsById(this.userId);
  }
  onBackClick() {
    /* იუზერის გადამისამართებას შემდეგ როუტზე */
    /* Redirect the user to the next root */
     this._router.navigate(['UserInfo', this.userId]);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { userInfo } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit, OnDestroy {
  /*  ცვლადში ვინახავთ მომხმარებლის ინფრმაციას რომელიც არის userInfo ტიპის,
  ეს ტიპი აღწერილია ინტერფეისში */
  /* We store user information in the variable which is userInfo type,
   This type is described in the interface */
  public userInfo!: userInfo;

  /* მომხმარებლის id*/
    /* User id*/

  public userId!: number;

  /* subscription ტიპის ცვლადი რათა როუტის შეცვლის ან
   აპლიკაციის დახურვის შემდეგ  როდესაც OnDestroy გაეშვება მოვახდინოთ unsubscribe*/
   /* subscription type variable to change the route or
    After closing the application, when OnDestroy is launched, unsubscribe */
  private subscription!: Subscription;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* აქტიური როუტიდან id პარამეტრის მნიშვნელობის
    ამოღება და მისი რიცხვად გარდაქმნა შემდეგ კი მას ვინახავთ ცვლადში  */
    /* Id parameter value from active route
     Subtract and convert it to a number and then store it in a variable */
    this.userId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('id') as string
    );
    /*  სერვისში გატანილი მეთოდის გამოძახებას რომელსაც
     გადავცემთ id-ს და ვაკეთებთ subscribe-ს შემდეგ დაბრუნებულ პასუხს ვუტოლებთ
     userInfo-ს ხოლო მთლიანად ამ ოპერაციას ვუტოლებთ subscription ტიპის ცვლადს*/
     /* Calling the method taken into service which
      We pass the id and do the subscribe after we equalize the return
      userInfo while this operation is equal to the subscription type variable */
    this.subscription = this.userService
      .getUserById(this.userId)
      .subscribe((res) => {
        this.userInfo = res;
      });
  }
  onPostsClick() {
    /* დაკლიკებით ვცვლით როუტს*/
    /* Change route with click*/
    this.router.navigate(['UserPosts', this.userId]);
  }
  onUsersClick() {
    /*  დაკლიკებით ვცვლით როუტს */
    /* Change route with click*/
    this.router.navigate(['Users']);
  }
  ngOnDestroy(): void {
    /* აქ ვახდენთ unsubscribe-ს, ეს მეთოდი გაეშვება
    მაშინ როცა როუტი შეიცვლება ან დაიხურება*/
    /* Here we take unsubscribe, this method will run
    When the route is changed or closed */
    this.subscription.unsubscribe();
  }
}

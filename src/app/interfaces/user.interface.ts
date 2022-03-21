/* ინტერფეისი სადაც ხდება API-დან დაბრუნებული პასუხის ტიპიზაცია*/
/*Interface where the response returned from the API is typified*/

export interface userInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

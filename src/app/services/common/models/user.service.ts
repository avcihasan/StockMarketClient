import { Injectable } from '@angular/core';
import { HttpclientService } from '../httpclient.service';
import { CreateUser } from 'src/app/contracts/user/create-user';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpclientService) { }

  async createUser(user: CreateUser): Promise<any> {
    const observable: Observable<CreateUser > = this.http.post<CreateUser>({
      controller: "users"
    }, user);

    return await firstValueFrom(observable);
  }

}

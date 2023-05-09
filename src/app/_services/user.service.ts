import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API = `${environment.API}`;

  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );

  constructor(
    private httpClient: HttpClient,
    private userAuthService: UserAuthService
  ) { }

  public register(registerData: any) {
    return this.httpClient.post(this.API + '/registerNewUser', registerData);
  }

  public login(loginData: any) {
    return this.httpClient.post(this.API + '/authenticate', loginData, { headers: this.requestHeader });
  }

  public forUser() {
    return this.httpClient.get(this.API + '/forUser', { responseType: "text" });
  }

  public forAdmin() {
    return this.httpClient.get(this.API + '/forAdmin', { responseType: "text" });
  }

  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {

          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;

          } else {
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }
}

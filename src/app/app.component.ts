import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

export const serverUrl = 'https://bookrobotja7.herokuapp.com';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'robot-front';
  private roles: string[];
  public authority: string;

  constructor(private tokenStorage: TokenStorageService) {   }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        this.authority = 'user';
        return true;
      });
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.replace('/home');
  }

}

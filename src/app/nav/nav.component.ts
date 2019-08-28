import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  roles: string;
  public authority: string;


  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.tokenStorage.getAuthorities();
      console.log('authorities:  ' + this.tokenStorage.getAuthorities());
      this.roles = this.tokenStorage.getAuthorities()[0];
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.replace('/home');
  }
}

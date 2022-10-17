import {Component, NgZone, OnInit} from '@angular/core';
import {AuthService} from '../../services/AuthService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private ngZone: NgZone) {
  }

  ngOnInit(): void {
  }

  successRedirect(): void {
    this.ngZone.run(() => {
      console.log('success');

      }
    );
  }

  tryGoogleLogin(): void {
    this.authService.doGoogleLogin().then(() => this.successRedirect())
      .catch(error => console.log('error'));
  }
}

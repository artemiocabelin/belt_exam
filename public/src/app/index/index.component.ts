import { PublicService } from './../public.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user: object = {name: ''};
  constructor(private _publicService: PublicService, private _router: Router) {
    this.logoutUser();
   }

  ngOnInit() {
  }

  onSubmit() {
    this._publicService.saveNameToSession(this.user)
      .then(data => {
        console.log('controller onSubmit then');
        console.log(data);
        this.user = {name: ''};
        this._router.navigate(['']);
      })
      .catch(error => {
        console.log('controller onSubmit error');
      });
  }

  logoutUser() {
    this._publicService.logoutUser()
     .then(data => {
        console.log('controller logout then');
        console.log(data);
      })
      .catch(error => {
        console.log('controller logout error');
      });
  }

}

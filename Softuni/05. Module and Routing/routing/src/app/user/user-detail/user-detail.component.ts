import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  userData = {} as User;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(v => {
      this.userData = this.activatedRoute.snapshot.data['user']
    })

  }

}

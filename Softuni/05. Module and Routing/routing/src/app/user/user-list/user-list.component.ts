import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  isLoading = false;
  allUsers: User[] = []

  constructor(private userService: UserService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.fetchUsers()
  }

  ngOnDestroy(): void {
    console.log('On Destroy Invoked!')
  }
  
  fetchUsers() {
    // Before fetch
    this.globalLoaderService.showLoader();

    this.userService.getUsers().subscribe((users) => {
      this.allUsers = users
      this.globalLoaderService.hideLoader()
    })
  }
}

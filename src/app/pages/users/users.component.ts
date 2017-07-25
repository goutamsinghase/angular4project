import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService]
})
export class UsersComponent implements OnInit {

  private userList:any;
  constructor(private router: Router, private userService:UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data=>{
        this.userList = data;
      });
  }

  goToAlbum(user){
    this.router.navigate(['/albums', user.id]);
  }

}

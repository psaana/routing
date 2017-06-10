import { Component, OnInit } from '@angular/core';
import { UserService } from '../app.service';

@Component({
  selector: 'app-routingmodule',
  templateUrl: './routingmodule.component.html',
  styleUrls: ['./routingmodule.component.css']
})
export class RoutingmoduleComponent implements OnInit {
  profile = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(data => 
      this.profile = data.data
    );
  }

}

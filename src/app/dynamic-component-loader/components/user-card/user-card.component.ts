import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile-service/profile.service';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less']
})
export class UserCardComponent implements OnInit {

  constructor(private profileService : ProfileService) { }

  ngOnInit(): void {
  }

  logout(){
    this.profileService.logout();
  }

}

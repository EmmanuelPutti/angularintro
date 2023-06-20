import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile-service/profile.service';

@Component({
  selector: 'app-guest-card',
  templateUrl: './guest-card.component.html',
  styleUrls: ['./guest-card.component.less']
})
export class GuestCardComponent implements OnInit {

  constructor(private profileService : ProfileService) {}

  ngOnInit(): void {
  }

  login(){
    this.profileService.login();
  }


}

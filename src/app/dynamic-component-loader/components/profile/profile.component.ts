import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ProfileService } from '../../services/profile-service/profile.service';
import { ProfileHostDirective } from '../../directives/profile-host/profile-host.directive';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  @ViewChild(ProfileHostDirective, { static: true })
  profileHost: ProfileHostDirective;
  private destroySubject = new Subject();

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    const viewContainerRef = this.profileHost.viewContainerRef;

    this.profileService.isLoggedIn$
      .pipe(
        takeUntil(this.destroySubject),
        mergeMap(isLoggedIn =>
          this.profileService.loadComponent(viewContainerRef, isLoggedIn)
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroySubject.next(false);
    this.destroySubject.complete();
  }
}

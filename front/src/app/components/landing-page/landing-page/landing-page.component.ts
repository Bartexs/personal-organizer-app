import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { LandingPageService } from './landing-page.service';
import { AppearanceService } from '../../settings/appearance.service';
import { ColorSchema } from 'src/app/models/ColorSchema.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  styles: []
})
export class LandingPageComponent implements OnInit {

  constructor(private landingPageService: LandingPageService, private elementRef: ElementRef, private appearanceService: AppearanceService) { }

  ngOnInit(): void {
    this.appearanceService.setColorSchemaObservable(ColorSchema.DARK);
  }

  tryAsAnon() {
    this.landingPageService.onTryAsAnonymousUser();
  }

  redirectToRegisterNewAppUser() {
    this.landingPageService.redirectToRegisterNewAppUser();
  }

  redirectToLoginPage() {
    this.landingPageService.redirectToLoginPage();
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
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
    this.appearanceService.setColorSchemaObservable(ColorSchema.LANDING);
  }

  tryAsAnon() {
    this.landingPageService.onTryAsAnonymousUser();
  }

  // we can set this way background for whole page 
  // change it to use RENDERER 2 https://stackoverflow.com/questions/53115379/angular-6-renderer2-not-able-to-show-image-background
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = 'url("bg.jpg")';
  }
}


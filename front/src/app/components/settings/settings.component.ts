import { Component, OnInit } from '@angular/core';
import { ColorSchema } from 'src/app/models/ColorSchema.model';
import { AppearanceService } from './appearance.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private appearanceService: AppearanceService) { }

  ngOnInit(): void {
  }

  public onSetColorSchema(colorSchemaText: String) {
    switch(colorSchemaText) {
      case "DARK": {
        this.appearanceService.onChangeColorSchema(ColorSchema.DARK);
        break;
      }
      case "LIGHT": {
        this.appearanceService.onChangeColorSchema(ColorSchema.LIGHT);
        break;
      }
      default: {
        console.log("Such color schema not specified!");
        break;
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ColorSchema } from 'src/app/models/ColorSchema.model';
import { AppearanceService } from '../../settings/appearance.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  colorSchemaBackgroundColor = ColorSchema.DEFAULT.mainColor;

  constructor(private appearenceService: AppearanceService) { }

  ngOnInit(): void {
    this.subscribeToGettingColorSchema();
  }

  private subscribeToGettingColorSchema() {
    this.appearenceService.getColorSchemaObservable().subscribe((color) => {
      this.colorSchemaBackgroundColor = color.mainColor;
    })
  }

}

import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ColorSchema } from 'src/app/models/ColorSchema.model';

@Injectable({
  providedIn: 'root'
})
export class AppearanceService {
  private chosenColorSchema!: ColorSchema
  private colorSchema = new ReplaySubject<ColorSchema>();

  constructor() { 

  }

  public onChangeColorSchema(colorSchema: ColorSchema) {
    this.chosenColorSchema = colorSchema;
    this.setColorSchemaObservable(colorSchema);
    console.log(this.chosenColorSchema);
  }

  public getColorSchemaObservable(): Observable<ColorSchema> {
    return this.colorSchema.asObservable();
  }

  public setColorSchemaObservable(value: ColorSchema) {
    this.colorSchema.next(value);
  }
}

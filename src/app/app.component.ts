import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FacadeService } from './services/facade/facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public SearchFormControl: FormControl;

  constructor(public facadeService: FacadeService){
    //Initialise the naming inside constructor for strictly typing.
    this.SearchFormControl = new FormControl('');
  }

}

import { Component } from '@angular/core';
import { AppConfiguration } from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store-admin-panel';
  ngOnInit(){
    console.log(AppConfiguration.settings.name)
  }
  
}

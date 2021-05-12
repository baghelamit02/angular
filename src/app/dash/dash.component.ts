import { Component } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { AppConfiguration } from '../app-config';
import { IDashboardConfiguration } from './IDashBoardConfiguration';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  layoutArray: IDashboardConfiguration[] = [];
  layoutMap: any;
  constructor(private mediaObserver: MediaObserver) {
    this.layoutArray = AppConfiguration.settings.dashBoardConfiguration;
    this.layoutMap = new Map(this.layoutArray.map<[string, any]>(p => [p.name, p.configuration]));
  }
  miniCardData = [1, 2, 3, 4, 5, 6, 7, 8]
  cardLayout$: any;

  watcher: Subscription;
  activeMediaQuery = '';
  monthlyRevenue="$20000";


  ngOnInit() {

    this.watcher = this.mediaObserver.media$.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      this.cardLayout$ = of(this.layoutMap.get(change.mqAlias));
      console.log(change.mqAlias);
    });

  }

}
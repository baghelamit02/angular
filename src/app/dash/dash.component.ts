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
  todayDate=new Date();
  placeholder="http://www.austinclemens.com/Playfair/playfair_docs/assets/p1ex.png";
  placeholderDonut="https://lh3.googleusercontent.com/ztbU9w1aYNWu8agShKYG4b-Aa1eh6CsLXuk59B2s9XuPaslLthiU7v0EoxLHbRAtFb0=w600-rwa";
  placeHoldertraffic="https://cdn2.hubspot.net/hub/2832391/hubfs/Reports/Analytics-Tools/Traffic-Analytics/analytics-chart.png?t=1567154279857&width=650&name=analytics-chart.png"
  placeholderByTrafficSource="https://www.klipfolio.com/sites/default/files/kpi_examples/web-traffic-sources_0.png";
  ngOnInit() {

    this.watcher = this.mediaObserver.media$.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      this.cardLayout$ = of(this.layoutMap.get(change.mqAlias));
      console.log(change.mqAlias);
    });

  }

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D-Task';
  tab = 1;
  keepSorted:Boolean = true;
  key: string='';
  display: string ='';
  source: Array<any> =[];
  confirmed: Array<any>=[];
  userAdd = '';
  disabled:Boolean = false;

  sourceLeft:Boolean = true;
  format: any ={}

  private sourceList: Array<any> =[];

  private confirmedList: Array<any>=[];


  private ListItems: Array<any> = [
    { key: 1, station: 'Antonito', state: 'CO' },
    { key: 2, station: 'Big Horn', state: 'NM' },
    { key: 3, station: 'Sublette', state: 'NM' },
    { key: 4, station: 'Toltec', state: 'NM' },
    { key: 5, station: 'Osier', state: 'CO' },
    { key: 6, station: 'Chama', state: 'NM' }
  ];


  ngOnInit() {
    this.doReset();
  }

  private useStations() {
    this.key = 'key';
    this.display = 'station'; // [ 'station', 'state' ];
    this.keepSorted = true;
    this.source = this.sourceList;
    this.confirmed = this.confirmedList;
  }

  doReset() {
    this.sourceList = JSON.parse(JSON.stringify(this.ListItems));

    this.confirmedList = new Array<any>();

    // Preconfirm some items.
    this.confirmedList.push(this.ListItems[31]);
    this.confirmedList.push(this.ListItems[30]);
    this.confirmedList.push(this.ListItems[29]);

    this.useStations();
  }



  doDisable() {
    this.disabled = !this.disabled;
  }

  disableBtn() {
    return (this.disabled ? 'Enable' : 'Disabled');
  }

  swapDirection() {
    this.sourceLeft = !this.sourceLeft;
    this.format.direction = this.sourceLeft ? 'left-to-right' : 'right-to-left';
  }
}

import { Component, Injectable, OnInit } from '@angular/core';
//import { Subject, Observable } from 'rxjs/Subject'; or 'rxjs/Observable';
import { Subject, Observable , from, interval} from 'rxjs';

/*
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
*/
import { map, debounceTime, distinctUntilChanged, } from 'rxjs/operators';


//must be in providers, must be b4 comp

/***************** SearchService **********************/
@Injectable()
export class SearchService {
  constructor() { }

  search(searchTerm: Observable<string>) {
    return searchTerm.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map(searchTerm => this.searchEntries(searchTerm)))
  }

  terms = ['אריאל', 'יעקב', 'אמיר', 'אליק', 'אוליסה', 'יהודית', 'דניאל', 'לירן', ]

  searchEntries(term) {
    return this.terms.filter(t => t.startsWith(term))
  }
}
/***************** SearchService **********************/








/***************** CarsService **********************/
@Injectable()
export class CarsService {
  constructor() { }
  getVehicles(){
    let x = 1;
    return interval(2200)
      .pipe(
        map(i=> [{name: 'car ' + x++},{name: 'car '  + x++}])
      )
  }
}
/***************** CarsService **********************/









/***************** ObsyComponent **********************/

@Component({
  selector: 'app-obsy',
  templateUrl: './obsy.component.html',
  styleUrls: ['./obsy.component.css'],
  providers:[SearchService,CarsService]
})
export class ObsyComponent implements OnInit {

  results: string[];
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService, private cars:CarsService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results;
      });
  }

  
  vehicles: Observable<Array<any>>
  ngOnInit() {
      this.vehicles = this.cars.getVehicles();
  }
}


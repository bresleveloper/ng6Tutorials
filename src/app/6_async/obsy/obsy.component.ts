import { Component, Injectable, OnInit } from '@angular/core';
import { Subject, Observable , from, interval, observable} from 'rxjs';

/*
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
*/
import { map, debounceTime, distinctUntilChanged, } from 'rxjs/operators';


//must be in providers, must be b4 comp

export class person {
    name:string
    age:number
}

/***************** SearchService **********************/
@Injectable()
export class SearchService {
  constructor() { }

  search(searchTerm: Observable<string>) {

    return searchTerm.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map(searchTerm => this.searchEntries(searchTerm)))

      //searchTerm.debounceTime(400).distinctUntilChanged().map(.....)
  }

  terms = ['אריאל', 'יעקב', 'גלעד', 'אליק', 'אוליסה', 'יהודית', 'דניאל', 'לירן', ]

  searchEntries(term) {
    return this.terms.filter(t => t.startsWith(term))
  }
}
/***************** SearchService **********************/








/***************** CarsService **********************/
@Injectable()
export class CarsService {
  constructor() { this.generatePeople()}
  getVehicles(){
    let x = 1;
    return interval(1200)
      .pipe(
        map(i=> [{name: 'car ' + x++},{name: 'car '  + x++}])
      )
  }



  /**********people************/
  private pplSub:Subject<person[]> = new Subject<person[]>()
  public pplObs:Observable<person[]> = this.pplSub.asObservable()

  counter=2;
  generatePeople(){
    console.log('gen ppl ')

    this.counter +=4;
    setInterval(()=>{
        console.log('ppl interval')
        let a = [
            { name:'Mr. ' + this.counter++, age : this.counter++} as person,
            { name:'Mr. ' + this.counter++, age : this.counter++} as person,
        ]    
        this.pplSub.next(a)
    },1111)
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


  constructor(public searchService: SearchService, private cars:CarsService) {
    this.searchTerm$.subscribe(console.log)


    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results;
      });
  }

  
  vehicles: Observable<Array<any>>

  ngOnInit() {
      this.vehicles = this.cars.getVehicles();

      this.cars.pplObs.subscribe(ppl => {
         console.log(ppl) 
      })
  }




  /******************/
}


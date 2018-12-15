import { Component, Injectable } from '@angular/core';
//import { Subject, Observable } from 'rxjs/Subject'; or 'rxjs/Observable';
import { Subject, Observable , from} from 'rxjs';

/*
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
*/
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';


//must be in providers, must be b4 comp
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



@Component({
  selector: 'app-obsy',
  templateUrl: './obsy.component.html',
  styleUrls: ['./obsy.component.css'],
  providers:[SearchService]
})
export class ObsyComponent  {

  results: string[];
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results;
      });
  }
}


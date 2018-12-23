import { Component, OnInit, Injectable } from '@angular/core';


@Component({
  selector: 'app-ng-for-filter',
  templateUrl: './ng-for-filter.component.html',
  styleUrls: ['./ng-for-filter.component.css'],
})
export class NgForFilterComponent implements OnInit {

    books:Book[]
  constructor() {
    this.books = new bookDataStorage().booksData;
   }

  ngOnInit() {
  }

}


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooks'
})
export class BookFilterPipe implements PipeTransform {
    //https://embed.plnkr.co/l1oTNT/
    //and what if some1 puts "rr" or "jk"?
    transform(items: Book[], filter: string): Book[] {
      if (!items || !filter) {
        return items;
      }
      // filter items array, items which match and return true will be kept, false will be filtered out
      return items.filter((item: Book) => {
        if(     item.title.includes(filter) || 
                item.author.includes(filter) ||
                (item.year && item.year.toString().includes(filter) ) ||
                item.id.toString().includes(filter))
        {
            return true
        }
        return false
      });
    }
    
  }




export class Book {
    id:number
    title:string
    year:number
    author:string
}

export class bookDataStorage {

 booksData=[
    {
      "id": 1,
      "title": "A Game of Thrones",
      "year": 1996,
      "author": "George R. R. Martin"
    },
    {
      "id": 2,
      "title": "A Clash of Kings",
      "year": 1998,
      "author": "George R. R. Martin"
    },
    {
      "id": 3,
      "title": "A Storm of Swords",
      "year": 2000,
      "author": "George R. R. Martin"
    },
    {
      "id": 4,
      "title": "A Feast for Crows",
      "year": 2005,
      "author": "George R. R. Martin"
    },
    {
      "id": 5,
      "title": "A Dance with Dragons",
      "year": 2011,
      "author": "George R. R. Martin"
    },
    {
      "id": 6,
      "title": "The Winds of Winter",
      "year": null,
      "author": "George R. R. Martin"
    },
    {
      "id": 7,
      "title": "A Dream of Spring",
      "year": null,
      "author": "George R. R. Martin"
    },
    {
      "id": 8,
      "title": "The Philosopher's Stone",
      "year": 1997,
      "author": "J. K. Rowling"
    },
    {
      "id": 9,
      "title": "The Chamber of Secrets",
      "year": 1998,
      "author": "J. K. Rowling"
    },
    {
      "id": 10,
      "title": "The Prisoner of Azkaban",
      "year": 1999,
      "author": "J. K. Rowling"
    },
    {
      "id": 11,
      "title": "The Goblet of Fire",
      "year": 2000,
      "author": "J. K. Rowling"
    },
    {
      "id": 12,
      "title": "The Order of the Phoenix",
      "year": 2003,
      "author": "J. K. Rowling"
    },
    {
      "id": 13,
      "title": "The Half-Blood Prince",
      "year": 2005,
      "author": "J. K. Rowling"
    },
    {
      "id": 14,
      "title": "The Deathly Hallows",
      "year": 2007,
      "author": "J. K. Rowling"
    },
    {
      "id": 15,
      "title": "Flaggermusmannen",
      "year": 1997,
      "author": "Jo Nesbø"
    },
    {
      "id": 16,
      "title": "Kakerlakkene",
      "year": 1998,
      "author": "Jo Nesbø"
    },
    {
      "id": 17,
      "title": "Rødstrupe",
      "year": 2000,
      "author": "Jo Nesbø"
    },
    {
      "id": 18,
      "title": "Sorgenfri",
      "year": 2002,
      "author": "Jo Nesbø"
    },
    {
      "id": 19,
      "title": "Marekors",
      "year": 2003,
      "author": "Jo Nesbø"
    },
    {
      "id": 20,
      "title": "Frelseren",
      "year": 2005,
      "author": "Jo Nesbø"
    },
    {
      "id": 21,
      "title": "Snømannen",
      "year": 2007,
      "author": "Jo Nesbø"
    },
    {
      "id": 22,
      "title": "Panserhjerte",
      "year": 2009,
      "author": "Jo Nesbø"
    },
    {
      "id": 23,
      "title": "Gjenferd",
      "year": 2011,
      "author": "Jo Nesbø"
    },
    {
      "id": 24,
      "title": "Politi",
      "year": 2013,
      "author": "Jo Nesbø"
    },
    {
      "id": 25,
      "title": "Tørst",
      "year": 2017,
      "author": "Jo Nesbø"
    }
  ]

}
  

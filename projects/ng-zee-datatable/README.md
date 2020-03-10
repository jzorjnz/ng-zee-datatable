# NgZeeDataTable

Angular 2+ DataTable Library

## Installation
```bash
npm i ng-zee-datatable --save
```

## Import
Import NgZeeDataTableModule in your app.module like this:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZeeDataTableModule } from 'ng-zee-datatable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgZeeDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

* Create data in the following format in a Angular component where used:

```typescript
import { Component } from '@angular/core';
import { NgZeeDataTableData, NgZeeDataTableOptions } from 'ng-zee-datatable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: NgZeeDataTableData = {
    "Monday": {
      "08:00": {
        title: "English",
        subTitle: "Part 1",
        endTime: "09:00"
      },
      "09:00": {
        title: "Physics",
        subTitle: "Compulsory",
        endTime: "10:00"
      }
    },
    "Tuesday": {
      "09:00": {
        title: "English",
        subTitle: "Part 2",
        endTime: "10:00"
      },
      "10:00": {
        title: "Chemistry",
        subTitle: "Compulsory",
        endTime: "11:00"
      },
    },
    "Wednesday": {
      "08:00": {
        title: "Maths",
        subTitle: "Compulsory",
        endTime: "9:00"
      },
      "10:00": {
        title: "Biology",
        subTitle: "Compulsory",
        endTime: "11:00"
      }
    },
    "Thursday": {
      "08:00": {
        title: "Arabic",
        subTitle: "Optional",
        endTime: "9:00"
      },
      "11:00": {
        title: "Computer",
        subTitle: "Compulsory",
        endTime: "12:00"
      }
    },
    "Friday": {
      "09:30": {
        title: "Arts",
        subTitle: "Optional",
        endTime: "11:30"
      }
    }
  };

  options: NgZeeDataTableOptions = {
    element: {
      background: '#f97c7c', titleColor: 'white', subTitleColor: '#862424'
    },
    rowLabel: {
      background: '#d83d3d',
      labelColor: 'white'
    }
  };

  days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
}

```

* Use in Component HTML:
```html
<ng-zee-datatable [data]="data" [rows]="days" [options]="options"></ng-zee-datatable>
```

## Note:
* This library is built and tested using Angular Cli version 8.3.25 so I can't guarantee if this will work with older versions.
* Use at your own risk.

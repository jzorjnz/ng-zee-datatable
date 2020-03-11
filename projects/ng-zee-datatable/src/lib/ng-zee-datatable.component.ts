import { Component, OnInit, Input, OnChanges, TemplateRef, EventEmitter, Output } from '@angular/core';
import { NgZeeDataTableColumn } from './ng-zee-datatable-types';

@Component({
  selector: 'ng-zee-datatable',
  templateUrl: './ng-zee-datatable.component.html',
  styleUrls: ['./ng-zee-datatable.component.scss']
})
export class NgZeeDataTableComponent implements OnInit, OnChanges {

  @Input() columns: NgZeeDataTableColumn[];
  @Input() rows: any = [];
  @Input() data: TemplateRef<any>;
  @Input() item: any;
  @Input() indexMatched: number;
  @Output() btnClicked: EventEmitter<any> = new EventEmitter();

  // @Output() fnCalling: EventEmitter<any> = new EventEmitter();
  recordsPerPage = [
    {
      num: 10
    },
    {
      num: 50
    },
    {
      num: 100
    }
  ];
  itemsPerPage = this.recordsPerPage[0].num;
  curPage = 0;
  totalPages = 0; //this.total.length / itemPerPage;
  newArr: any[] = [];

  constructor(

  ) {
  }

  ngOnInit() {

  }

  ngOnChanges(params) {

    // this.createCurPage()
    if (params.rows) {
      console.table(params.rows);
      this.createCurPage(null);
    }
  }

  clickBtn(index, element) {
    this.btnClicked.emit({ index: index, element: element });
  }

  createCurPage(itemsPerPage) {
    if (itemsPerPage) {
      this.itemsPerPage = itemsPerPage;
    }

    if (this.rows && this.rows.length) {
      this.totalPages = Math.ceil(this.rows.length / this.itemsPerPage);
      if (this.curPage >= this.totalPages) {
        this.curPage = 0;
      }
      this.newArr = this.rows.filter((val, i) => i >= this.curPage * this.itemsPerPage && i < (this.curPage + 1) * this.itemsPerPage)
    }
  }

  incrementPage() {
    if (this.curPage + 1 < this.totalPages) {
      this.curPage++;
      this.createCurPage(null);
    }
    this.indexMatched = null
  }

  decrementPage() {
    if (this.curPage > 0) {
      this.curPage--;
      this.createCurPage(null);
    }
    this.indexMatched = null
  }

  gotoPage(pageNum: number) {
    if (pageNum > 0 && pageNum < this.totalPages) {
      this.curPage = pageNum - 1;
      this.createCurPage(null);
    }
  }


}

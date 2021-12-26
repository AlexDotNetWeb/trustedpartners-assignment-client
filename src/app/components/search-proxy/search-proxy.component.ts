import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DuckModel } from 'src/app/interfaces/models';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-search-proxy',
  templateUrl: './search-proxy.component.html',
  styleUrls: ['./search-proxy.component.less']
})
export class SearchProxyComponent implements OnInit, AfterViewInit  {
  duckModel:DuckModel[] = [];
  error="";
  searched=false;
  displayedColumns: string[] = ['firstURL', 'text'];
  queriesSubmitted:string[]=[];
  dataSource = new MatTableDataSource<DuckModel>();
  queryInput:string="";
  findInput:string="";
  filterText:string="";
  appearedCounter:any;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  constructor(public mainService:MainService) {
  }
  ngOnInit(): void {
    this.mainService.appeared$.subscribe(val => {
      this.appearedCounter=val
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  submitQuery(query:string){
    if(query.length>0){
      this.queriesSubmitted.push(query);
      this.error="";
      this.mainService.getDuckSearch(query).subscribe(data=>{
        this.searched=true;
        if (data && data.length>0){
          this.searched=false;
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;
        }
        else{
          this.dataSource.data = [];
          this.error = "Nothing have found."
        }
      })
    }
    else{
      this.error = "Please enter something!"
    }
  }

  submitHistoryQuery(query:string){
    this.queryInput=query;
    this.submitQuery(query);
  }






}

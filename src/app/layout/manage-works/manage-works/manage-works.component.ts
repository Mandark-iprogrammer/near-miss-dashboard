import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-manage-works',
  templateUrl: './manage-works.component.html',
  styleUrls: ['./manage-works.component.scss']
})
export class ManageWorksComponent implements OnInit {
  docs:any;
  constructor(
    public router: Router,
   
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {
      this.docs=[{
        "concernArea":"LPDC",
        "concernPoint":"LP No.11 & 12 No Space in Cylinder",
        "obsDate":"30/12/2017",
        "status":"Pending"
      },{
        "concernArea":"LPDC",
        "concernPoint":"BR08 riser cutting machine guard is not provide",
        "obsDate":"04/02/2018",
        "status":"In-Progress"
      },
      {
        "concernArea":"LPDC",
        "concernPoint":"Honeywell lathe machine Guard is not provide so chips spread out",
        "obsDate":"02/02/2018",
        "status":"Completed"
      },
      {
        "concernArea":"LPDC",
        "concernPoint":"Near LP8 Gangway water supply cover depth",
        "obsDate":"03/03/2018"
      },
      {
        "concernArea":"LPDC",
        "concernPoint":"ON LP 1 MS Plate Up from floor ",
        "obsDate":"10/03/2018"
      },
      {
        "concernArea":"LPDC",
        "concernPoint":"ON LP 4 MS Plate Up from floor ",
        "obsDate":"10/03/2018"
      }]
   }

  ngOnInit() {
  }

  OnView(id:string){
    id="abcdefg"
    this.router.navigate(['/assignWorks',id]);
  }

}

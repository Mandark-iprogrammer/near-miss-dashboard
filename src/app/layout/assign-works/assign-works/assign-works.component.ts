import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-assign-works',
  templateUrl: './assign-works.component.html',
  styleUrls: ['./assign-works.component.scss']
})
export class AssignWorksComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  closeResult: string;
  sav:string
  pub:string
  modalReference1: NgbModalRef;
  constructor(
    private modalService: NgbModal
) { 
  this.sav="Save"
  this.pub="UnPublished"
}

  ngOnInit() {
    this.galleryOptions = [
      { "image": false, "height": "100px" },
      { "breakpoint": 500, "width": "100%" }
      ]

  this.galleryImages = [
      {
          small: 'assets/images/slider1.jpg',
          medium: 'assets/images/slider1.jpg',
          big: 'assets/images/slider1.jpg'
      },
      {
          small: 'assets/images/slider2.jpg',
          medium: 'assets/images/slider2.jpg',
          big: 'assets/images/slider2.jpg'
      },
      {
          small: 'assets/images/slider3.jpg',
          medium: 'assets/images/slider3.jpg',
          big: 'assets/images/slider3.jpg'
      }
  ];
  }

    
  openLg(content) {
    // this.Msg="Save";
     this.modalReference1 =this.modalService.open(content, { size: 'lg' ,centered: true});
     this.modalReference1.result.then((result) => {
       this.closeResult = `Closed with: ${result}`;
       console.log(this.closeResult)
     }, (reason) => {
       this.closeResult = `Dismissed: ${reason}`;
       console.log(this.closeResult)
     })
   }
}

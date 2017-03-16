import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wb-individual-listing-view',
  templateUrl: './individual-listing-view.component.html',
  styleUrls: ['./individual-listing-view.component.css']
})
export class IndividualListingViewComponent implements OnInit {

  listing: any = {
    title:"Philip's Bar"
  }

  editMode:boolean = false;

  toggleEdit(){
    this.editMode = !this.editMode;
  }

  constructor() { }

  ngOnInit() {
  }

}

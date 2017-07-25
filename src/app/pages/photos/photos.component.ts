import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers:[PhotosService]
})
export class PhotosComponent implements OnInit {

  private photos: any; 
  constructor( private route: ActivatedRoute,
  private router: Router,
  private photosService: PhotosService,
  private location: Location) { }

  ngOnInit() {
   this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.photosService.getPhotos(params.get('id')))
    .subscribe(data => {
    	this.photos= data;
     });
  }
  
  goBack(){
      this.location.back();
  }
}

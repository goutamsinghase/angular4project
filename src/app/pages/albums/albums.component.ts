import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers:[AlbumsService]
})
export class AlbumsComponent implements OnInit {
   
  private albums: any; 
  constructor( private route: ActivatedRoute,
  private router: Router,
  private albumsService: AlbumsService,
  private location: Location) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.albumsService.getAlbums(params.get('id')))
    .subscribe(data => {
    	this.albums= data;
     });
  }

   goToPhoto(album){
    this.router.navigate(['/photos', album.id]);
  }

   goBack(){
      this.location.back();
   }

}

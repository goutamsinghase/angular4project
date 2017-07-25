import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PhotosService {

  constructor(private _http:Http) { }

  getPhotos(id){
  	return this._http.get('https://jsonplaceholder.typicode.com/photos?albumId='+id)
  				.map(res=>res.json().slice(0, 5));
  }


}

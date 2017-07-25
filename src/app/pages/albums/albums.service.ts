import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  constructor(private _http:Http) { }

  getAlbums(id){
  	return this._http.get('https://jsonplaceholder.typicode.com/albums?userId='+id)
  				.map(res=>res.json());
  }

}

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Banner } from './data-type/common.types';
import { API_CONFIG, ServicesModule } from './services.module';
import { Observable } from 'rxjs';
import {map} from 'rxjs/internal/operators'
@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http:HttpClient,@Inject(API_CONFIG) private uri:string) { }

  getBanners():Observable<Banner[]>{
    return this.http.get(this.uri+'banner')
    .pipe(map((res:{banners:Banner[]})=> res.banners))
  }
}

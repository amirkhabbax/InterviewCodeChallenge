import { inject, Injectable, signal } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { defaultApi } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  private _httpClient = inject(HttpClient);

  getPosts() {
    return this._httpClient.get<Post[]>(defaultApi);
  }

}

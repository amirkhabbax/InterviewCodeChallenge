import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { GetInfoService } from '../../shared/get-info.service';
import { Post } from '../../models/post.model';
import { takeUntil } from 'rxjs';
import { UnsubscriptionService } from '../../shared/unsubscription.service';
import { PostComponent } from "./post/post.component";

@Component({
  selector: 'app-posts',
  imports: [PostComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent extends UnsubscriptionService implements OnInit {
  private _getInfoService = inject(GetInfoService);
  posts = signal<Post[]>([]);
  // length = 12;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this._getInfoService.getPosts().pipe(takeUntil(this.UnSubscribe$)).subscribe((response) => {
      this.posts.set(response);
      // this.length = Math.ceil(this.posts().length / 4);
    });
  }
  getPosts(){
    return this.posts();
  }

  // getPosts2(){
  //   return this.posts().slice(this.length , 2* this.length +1  );
  // }

  // getPosts3(){
  //   return this.posts().slice(2* this.length+2, 3* this.length +3 );
  // }

  // getPosts4(){
  //   return this.posts().slice(3* this.length+4, this.posts().length - 1 );
  // }
}

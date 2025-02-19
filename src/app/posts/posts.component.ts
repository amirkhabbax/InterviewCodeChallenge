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

  constructor() {
    super();
  }

  ngOnInit(): void {
    this._getInfoService.getPosts().pipe(takeUntil(this.UnSubscribe$)).subscribe((response) => {
      this.posts.set(response);
    });
  }
}

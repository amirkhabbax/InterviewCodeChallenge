import { Component, input } from '@angular/core';
import { Post } from '../../../models/post.model';
import { PersianDatePipe } from "../../../shared/persian-date.pipe";

@Component({
  selector: 'app-post',
  imports: [PersianDatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  post = input<Post>();
}

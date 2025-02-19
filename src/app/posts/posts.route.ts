import { Routes } from "@angular/router";
import { PostsComponent } from "./posts.component";
import { PostComponent } from "./post/post.component";

export default [
    {
        path: '', component: PostsComponent, title: 'All Boghrat Posts'
    },
    {
        path: ':id', component: PostComponent, title: 'a Single Posts'
    }
] as Routes;
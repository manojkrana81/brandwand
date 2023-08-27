import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GeneralService } from '../services/view/general.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{

  blogId!: string | null;
  blog: any;
  constructor(
    private route: ActivatedRoute,
    private service: GeneralService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.blogId = params.get('id');
      this.service.getPublishedBlog(this.blogId).subscribe(
        (res:any)=>{
          this.blog = res.data;
        }
      )
    });
  }
}

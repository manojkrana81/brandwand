import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/view/general.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{

  totalBlogs!: number;
  blogs: any[] = [];


  constructor(
    private service: GeneralService
  ){}

  ngOnInit(): void {
    const payload = {
      page: 1,
      limit: 30
    };

    this.service.getAllBlogs(payload).subscribe(
      (res:any)=>{
        this.blogs = res.data.blogs;
        this.totalBlogs = res.data.total;
      },
      (err)=>{

      }
    )
  }

}

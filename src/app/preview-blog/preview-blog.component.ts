import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-preview-blog',
  templateUrl: './preview-blog.component.html',
  styleUrls: ['./preview-blog.component.scss']
})
export class PreviewBlogComponent {
  
  blogId!: string | null;
  blog:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{
      this.blogId = params.get('id');

      this.adminService.getBlog(this.blogId).subscribe(
        (res:any)=>{
          if(res.status=='ok'){
            this.blog = res.data;
          }
          else{
            alert(res.message);
          }
        },
        (err)=>{

        }
      )

    });
  }

}

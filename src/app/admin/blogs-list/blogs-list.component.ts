import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit{
  blogsList!: any;
  selectedBlogId!: string;
  blogIdTobeDeleted!: string;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  ngOnInit(): void {
   this.adminService.getAllBlogs().subscribe(
    (res:any)=>{
      this.blogsList = res.data;
      console.log(this.blogsList);
    },
    (err)=>{

    }
   ) 
  }

  openDeleteDialog(blogId:any){
    this.blogIdTobeDeleted = blogId;
  }

  previewBlog(blog:any){
    const baseUrl = 'http://localhost:4200';

    if(blog.status == 'draft'){
      window.open(baseUrl+'/preview-blog/'+blog.id, '_blank');
    }else if(blog.status =='published'){
      window.open(baseUrl+'/blog/'+blog.id+'/'+blog.url, '_blank');
    }
  }

  editBlog(blogId:string){
    this.router.navigate(['/admin/create-blog'], {
      queryParams: {
        action: 'edit',
        id: blogId
      }
    });
  }

  deleteBlog(){
    this.adminService.deleteBlog({id: this.blogIdTobeDeleted}).subscribe(
      (res:any)=>{
        if(res.status=='ok'){
          this.snackbar.open('Blog deleted successfully', 'ok', {
            duration: 3000
          });
          this.blogsList = this.blogsList.filter((blog:any)=>blog.id!==this.blogIdTobeDeleted);
        }
        else{
          this.snackbar.open(res.message, 'ok', {
            duration: 3000
          });
        }
      },
      (err)=>{
        this.snackbar.open(err.message, 'ok', {
          duration: 3000
        });
      }

    )
  }


}

interface Blog {
  title: string;
  author: string;
  category: string;
  date: string;
  status: string;
}

const BLOGS = [
  {
    title: 'some title one',
    author: 'admin',
    category: 'posts',
    date: '10 June',
    status: 'draft',
  },
  {
    title: 'some title one',
    author: 'admin',
    category: 'posts',
    date: '10 June',
    status: 'draft',
  },
  {
    title: 'some title one',
    author: 'admin',
    category: 'posts',
    date: '10 June',
    status: 'draft',
  },
  {
    title: 'some title one',
    author: 'admin',
    category: 'posts',
    date: '10 June',
    status: 'draft',
  },
  {
    title: 'some title one',
    author: 'admin',
    category: 'posts',
    date: '10 June',
    status: 'draft',
  }
]
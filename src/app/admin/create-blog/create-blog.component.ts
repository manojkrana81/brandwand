import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { UploadedMediaComponent } from '../uploaded-media/uploaded-media.component';


@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit{
  
  blogFormGroup!: FormGroup;
  blogContent: any = '';
  blogId: string = '';
  currentBlog: any = '';
  action: string = '';
  blogUrl: string = '';
  blogStatus: string = '';
  @ViewChild(UploadedMediaComponent) uploadedMediaComp!: UploadedMediaComponent;
  

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.blogFormGroup = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      thumbnailUrl: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      if(params && params['action']=='edit'){
        this.action = 'edit';
        this.blogId = params['id'];
        this.adminService.getBlog(this.blogId).subscribe(
          (res:any)=>{
            if(res.status=='ok'){
              this.currentBlog = res.data;
              this.blogUrl = res.data.url;
              this.blogStatus = res.data.status;
              this.blogFormGroup.patchValue({
                title: this.currentBlog['title'],
                description: this.currentBlog['description'],
                thumbnailUrl: this.currentBlog['thumbnailUrl'],
              });
              this.blogContent = this.currentBlog.body;
            }
            else{

            }
          }
        )
      }
    });
    
  }

  saveBlog(){
    if(this.blogFormGroup.invalid){
      this.snackbar.open('Please fill all mandatory fields', 'Ok', {
        duration: 3000
      });
      return;
    }

    const blog = this.blogFormGroup.value;
    const body = {
      title: blog.title,
      description: blog.description,
      thumbnailUrl: blog.thumbnailUrl,
      author: 'admin',
      body: this.blogContent,
    }

    if(this.action!=='edit'){
      this.adminService.createBlog(body).subscribe(
        (res:any)=>{
          if(res.status=='ok'){
            this.action = 'edit';
            this.blogId = res.data.id;
            this.blogUrl = res.data.url;
            this.blogStatus = res.data.status;
            this.snackbar.open('Blog Saved Successfully', 'Ok', {
              duration: 3000
            }); 
          }
          else{
            this.snackbar.open(res.message, 'Ok', {
              duration: 3000
            }); 
          }
        },
        (err)=>{
          this.snackbar.open('Something went wrong', 'Ok', {
            duration: 3000
          }); 
        }
      )
    }
    else{
      this.adminService.updateBlog({...body, id: this.blogId}).subscribe(
        (res:any)=>{
          if(res.status=='ok'){
            this.blogUrl = res.data.url;
            this.blogStatus = res.data.status;
            this.snackbar.open('Blog Updated Successfully', 'Ok', {
              duration: 3000
            }); 
          }
          else{
            this.snackbar.open(res.message, 'Ok', {
              duration: 3000
            }); 
          }
        },
        (err)=>{
          this.snackbar.open('Something went wrong', 'Ok', {
            duration: 3000
          }); 
        }
      )
    }
  }


  publishBlog(){
    this.adminService.publishBlog({id: this.blogId}).subscribe(
      (res:any)=>{
        if(res.status=='ok'){
          this.snackbar.open('Blog Published', 'Ok', {
            duration: 3000
          }); 
        }
        else{
          this.snackbar.open(res.message, 'Ok', {
            duration: 3000
          }); 
        }
      },
      (err)=>{
        this.snackbar.open(err.message, 'Ok', {
          duration: 3000
        }); 
      }
    ) 
  }

  onScroll(){
    console.log('end reached');
  }

  chooseUploads(){
    this.uploadedMediaComp.initializeComponent();
  }
  previewBlog(){
    const baseUrl = 'http://localhost:4200';
    if(this.blogStatus == 'draft'){
      window.open(baseUrl+'/preview-blog/'+this.blogId, '_blank');
    }else if(this.blogStatus =='published'){
      window.open(baseUrl+'/blog/'+this.blogId+'/'+this.blogUrl, '_blank');
    }
  }
}

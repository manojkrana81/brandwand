import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-upload-media',
  templateUrl: './upload-media.component.html',
  styleUrls: ['./upload-media.component.scss']
})
export class UploadMediaComponent implements OnInit{

  constructor(
    private snackbar: MatSnackBar,
    private adminService: AdminService
  ){}
  ngOnInit(): void {

  }

  onFileChange(event:any){
    const allowedTypes:string[] = [
      'image/jpeg', 
      'image/png', 
      'image/gif'
    ];
    const file = event.target.files[0];
    if(!allowedTypes.includes(file.type)){
      this.snackbar.open('File type not supported', 'ok', {
        duration: 3000
      });
      return;
    }
    if(file.size > 5*1024*1024){
      this.snackbar.open('Image must be less than 5MB.', 'ok', {
        duration: 3000
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file, file.name);
    console.log(file);
    console.log(formData);
    
    this.adminService.uploadDocument(formData).subscribe(
      (res:any)=>{
        if(res.status=='ok'){
          this.snackbar.open("Image uploaded successfully", 'ok', {
            duration: 3000
          });
        }
        else{
          this.snackbar.open(res.message, 'ok', {
            duration: 3000
          });
        }
      },
      (err)=>{
        this.snackbar.open("Sorry, we couldn't upload the image", 'ok', {
          duration: 3000
        });
      }
    )

  }

}

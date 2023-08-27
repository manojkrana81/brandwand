import { Component, Input, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-uploaded-media',
  templateUrl: './uploaded-media.component.html',
  styleUrls: ['./uploaded-media.component.scss']
})
export class UploadedMediaComponent implements OnInit {

  images: any[] = [];
  imageBaseUrl: string = 'C:/Users/Dell/OneDrive/Desktop/brandwand/uploads/images/';
  @Input() opened:any;

  constructor(
    private snackbar: MatSnackBar,
    private adminService: AdminService
  ){}

  ngOnInit(): void {
    this.initializeComponent();
    // this.opened.subscribe(res=>{
    //   this.initializeComponent();
    // })
  }

  initializeComponent(){
    const payload = {
      limit: 80,
      page: 1
    }
    this.adminService.fetchDocuments(payload).subscribe(
      (res:any)=>{
        this.images = res.data;
        for(let image of this.images){
          image['fileName'] = this.imageBaseUrl + image['fileName'];
        }
      },
      (err:any)=>{

      }
    )
  }

  getImageUrl(media:any){
    navigator.clipboard.writeText('abcded');
    this.snackbar.open('URL Copied!', 'ok', {
      duration: 2000
    });
  }
}


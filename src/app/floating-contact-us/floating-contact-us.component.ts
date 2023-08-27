import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from '../services/view/general.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-floating-contact-us',
  templateUrl: './floating-contact-us.component.html',
  styleUrls: ['./floating-contact-us.component.scss']
})
export class FloatingContactUsComponent implements OnInit{

  userForm: FormGroup;
  @ViewChild('closeBtn') submitBtn!:ElementRef;
  @ViewChild('hiddenBtn') hiddenBtn!:ElementRef;
  constructor(
    private fb: FormBuilder,
    private service: GeneralService,
    private snackbar: MatSnackBar
  ){
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }

  submitForm(){
    if(this.userForm.invalid){
      this.snackbar.open('Please fill all mandatory fields', 'Ok', {
        duration: 3000,
      });
      return;
    }
    const query = this.userForm.value;
    this.service.saveQuery(query).subscribe(
      (res:any)=>{
        if(res.status=='ok'){
          this.submitBtn.nativeElement.click();
          setTimeout(()=>{
            this.hiddenBtn.nativeElement.click();
            this.userForm.reset();
          }, 1500);
        }
        else{
          this.snackbar.open('Oops! Something went wrong', 'Ok', {
            duration: 3000,
          });
        }
      }
    )
  }

}

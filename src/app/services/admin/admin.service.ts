import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = environment.apiBaseUrl;
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }

  getHttpOptions(){
    const token = this.cookieService.get('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
    };
    return httpOptions; 
  }

  getAllBlogs(){
    const httpOptions = this.getHttpOptions();
    return this.httpClient.get(`${this.baseUrl}/admin/all-blogs`, httpOptions);
  }

  createBlog(data:any){
    const httpOptions = this.getHttpOptions();
    return this.httpClient.post(`${this.baseUrl}/admin/create-blog`, data, httpOptions);
  }

  updateBlog(data:any){
    const httpOptions = this.getHttpOptions();
    return this.httpClient.post(`${this.baseUrl}/admin/update-blog`, data, httpOptions);
  }

  deleteBlog(data:any){
    const httpOptions = this.getHttpOptions();
    return this.httpClient.post(`${this.baseUrl}/admin/delete-blog`, data, httpOptions);
  }

  publishBlog(data:any){
    const httpOptions = this.getHttpOptions();
    return this.httpClient.post(`${this.baseUrl}/admin/publish-blog`, data, httpOptions);
  }

  getBlog(blogId:any){
    const httpOptions = this.getHttpOptions();
    return this.httpClient.get(`${this.baseUrl}/admin/blog/${blogId}`, httpOptions);
  }

  uploadDocument(formData:any){
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${this.cookieService.get('token')}`
      }),
    };
    return this.httpClient.post(`${this.baseUrl}/admin/upload`, formData, httpOptions);
  }

  fetchDocuments(payload:any){
    const httpOptions = this.getHttpOptions();
    return this.httpClient.post(`${this.baseUrl}/admin/get-files/`, payload, httpOptions);
  }
}



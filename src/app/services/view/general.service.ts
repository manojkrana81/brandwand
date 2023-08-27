import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private baseUrl = environment.apiBaseUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllBlogs(payload: any){
    return this.httpClient.post(`${this.baseUrl}/get-published-blogs`, payload);
  }

  getPublishedBlog(blogId: any){
    return this.httpClient.get(`${this.baseUrl}/published-blog/${blogId}`);
  }

  saveQuery(query:any){
    return this.httpClient.post(`${this.baseUrl}/add-query`, query);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubmitService {
  private endpoint = 'https://example.com/api';
  constructor(private http: HttpClient) {}

  postData(data: any){
    return this.http.post(this.endpoint, data);
  }
  
  submitInContest(contestId: any, questionId: any, userId: any, code: any) {
    const body = {
      contestId: contestId,
      questionId: questionId,
      userId: userId,
      code: code,
    };
    return this.http.post('/api/submit', body);
  }
  submitInPractice(questionId: any, userId: any, code: any) {}
}

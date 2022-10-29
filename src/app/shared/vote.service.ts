import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from './constants';
import { VotePayload } from './vote-button/vote-payload';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  constructor(private http: HttpClient) {}

  vote(votePayload: VotePayload): Observable<any> {
    return this.http.post(Constants + '/api/votes/', votePayload);
  }
}

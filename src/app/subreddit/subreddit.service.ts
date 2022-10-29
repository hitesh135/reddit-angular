import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../shared/constants';
import { SubredditModel } from './subreddit-model';

@Injectable({
  providedIn: 'root',
})
export class SubredditService {
  constructor(private http: HttpClient) {}

  getAllSubreddits(): Observable<Array<SubredditModel>> {
    return this.http.get<Array<SubredditModel>>(Constants.BASE_URL + '/api/subreddit/');
  }

  createSubreddit(subredditModel: SubredditModel): Observable<SubredditModel> {
    return this.http.post<SubredditModel>(
      Constants.BASE_URL + '/api/subreddit',
      subredditModel
    );
  }
}

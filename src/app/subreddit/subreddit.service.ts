import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubredditModel } from './subreddit-model';

@Injectable({
  providedIn: 'root',
})
export class SubredditService {
  constructor(
    private http: HttpClient
    ) {}

  getAllSubreddits(): Observable<Array<SubredditModel>> {
    return this.http.get<Array<SubredditModel>>(
      'http://springreddit-env.eba-z72vxg6q.ap-south-1.elasticbeanstalk.com/api/subreddit/'
    );
  }

  createSubreddit(subredditModel: SubredditModel): Observable<SubredditModel> {
    return this.http.post<SubredditModel>('http://springreddit-env.eba-z72vxg6q.ap-south-1.elasticbeanstalk.com/api/subreddit',
      subredditModel);
  }
}

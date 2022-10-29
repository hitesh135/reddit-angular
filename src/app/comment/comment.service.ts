import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../shared/constants';
import { CommentPayload } from './comment-payload';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    return this.httpClient.get<CommentPayload[]>(
      Constants.BASE_URL + '/api/comments/by-post/' + postId
    );
  }

  postComment(commentPayload: CommentPayload): Observable<any> {
    return this.httpClient.post<any>(
      Constants.BASE_URL + '/api/comments/',
      commentPayload
    );
  }

  getAllCommentsByUser(name: string) {
    return this.httpClient.get<CommentPayload[]>(
      Constants.BASE_URL + '/api/comments/by-user/' + name
    );
  }
}

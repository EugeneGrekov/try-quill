import { Injectable } from '@angular/core';
import {Post} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  content: Post;
  constructor() {
    this.content = {
      title: 'Begin',
      text: '',
      author: 'jopa',
      date: new Date(),
    };
  }
}

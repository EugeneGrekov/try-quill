import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ContentService} from '../content.service';
import {Post} from '../interfaces';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  public post: Post;

  constructor(
    private contentService: ContentService,
  ) {
  }

  ngOnInit() {
    this.post = this.contentService.content;
  }

}

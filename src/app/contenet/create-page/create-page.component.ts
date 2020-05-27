import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContentService} from '../content.service';
import {Post} from '../interfaces';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  post: Post;
  form: FormGroup;

  constructor(
    private contentService: ContentService,
  ) {
  }

  ngOnInit() {
    this.post = {
      date: new Date(),
      title: 'Just title',
      text: '', //`<p><span style="color: rgb(230, 0, 0); background-color: rgb(255, 153, 0);">AAA</span></p><pre class="ql-syntax" spellcheck="false">BB</pre>`,
      author: `Just Author`
    };

    this.form = new FormGroup({
      title: new FormControl(this.post.title, Validators.required),
      text: new FormControl(this.post.text, Validators.required),
      author: new FormControl(this.post.author, Validators.required),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.contentService.content.title = this.form.value.title;
    this.contentService.content.text = this.form.value.text;
    this.contentService.content.author = this.form.value.author;
    console.log(this.contentService.content.text);
  }

}

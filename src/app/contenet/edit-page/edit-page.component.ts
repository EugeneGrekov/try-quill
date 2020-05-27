import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContentService} from '../content.service';
import {Post} from '../interfaces';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup;

  editorOptions = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };


  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(this.contentService.content.title, Validators.required),
      text: new FormControl(this.contentService.content.text, Validators.required),
      author: new FormControl(this.contentService.content.author, Validators.required),
    });
  }

  ngOnDestroy() {
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

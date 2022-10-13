import { Component, OnInit } from '@angular/core';
import {Member} from '../../models/member';
import {MemberService} from '../../services/memberService';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/articleService';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  form: any;
  currentId: string;
  item1: Article;

  constructor(private articleService: ArticleService, private router: Router, private activatedRoute: ActivatedRoute ) {

  }

  ngOnInit(): void {
    this.currentId = this.activatedRoute.snapshot.params.id;
    console.log(this.currentId);
    if (!!this.currentId) {
      this.articleService.getArticleById(this.currentId).then((item) => {
        this.item1 = item;
        this.initForm();
      });
    } else {
      this.initForm();
    }
    // this.initForm();
    // initialiser le formulaire

  }

  initForm(): void {
    this.form = new FormGroup({
        title: new FormControl(this.item1?.title, [Validators.required]),
        date: new FormControl(this.item1?.date, [Validators.required]),
        // auteur: new FormControl(this.item1?.auteur, [Validators.required])
      }
    );
  }

  ONSUB(): void {
    const objectToSubmit = {...this.item1 , ...this.form.value};
    this.articleService.saveArticle(objectToSubmit).then(() => {
      this.router.navigate(['/articles']);
    });
  }

}

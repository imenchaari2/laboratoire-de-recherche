import { Component, OnInit } from '@angular/core';
import {Member} from '../../models/member';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/articleService';
import {MatTableDataSource} from '@angular/material/table';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  dataSource: MatTableDataSource<Article>;
  constructor(private articleService: ArticleService) {
    this.dataSource = new MatTableDataSource(this.articleService.tab);
  }
  displayedColumns: string[] = ['id', 'title', 'date', 'auteur', 'icone'];
  ngOnInit(): void {
  }
  affect(id: string): void {
    // const dialogRef = this.matDialog.open(DialogComponent, {});
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.memberService.delete(id).then(async () => {
    //       await this.fetchDataSource();
    //     });
    //   }
    // });

  }

}

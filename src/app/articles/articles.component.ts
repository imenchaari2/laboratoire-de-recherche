import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../models/member';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/articleService';
import {MatTableDataSource} from '@angular/material/table';
import {DialogComponent} from '../dialog/dialog.component';
import {SelectAuteurComponent} from '../select-auteur/select-auteur.component';
import {MemberService} from '../../services/memberService';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  dataSource: MatTableDataSource<Article>;
  @Input() auteur!: string;


  constructor(private articleService: ArticleService, private memberService: MemberService , private matDialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.articleService.tab);
  }
  displayedColumns: string[] = ['id', 'title', 'date', 'auteur', 'icone'];
  ngOnInit(): void {
  }
  // async fetchDataSource(): Promise<void> {
  //   this.dataSource.data = await this.articleService.getAllArticles();
  // }
  affect(article: any): void {
    const dialogRef = this.matDialog.open(SelectAuteurComponent, {
      width: '250px',
      height: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.data)
      if (result) {
        this.articleService.updateArticle(article, result.data).then(async () => {
          // await this.fetchDataSource();
        });
      }
    });

  }

}

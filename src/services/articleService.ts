import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GLOBAL} from '../app/app-config';
import {Member} from '../models/member';
import {Article} from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  tab: Article[] = GLOBAL.DB.articles;
  constructor(private httpClient: HttpClient) {
  }


  saveArticle(objectToSubmit: any): Promise<any> {
    // si j'ai la partie back
    // return this.httpClient.post('linktorestAPI',objectToSubmit).toPromise();
    const articleToSave = {
      ...objectToSubmit,
      id: objectToSubmit.id ?? (Math.random() * 100000).toString(),
      createdDate: objectToSubmit.createdDate ?? new Date().toISOString()
    };
    this.tab = [articleToSave, ...this.tab.filter(item => item.id !== articleToSave.id)];
    return new Promise(resolve => resolve(articleToSave));

  }

  getArticleById(id: string): Promise<Article> {
    // return this.httpClient.get<M
    return new Promise(resolve => resolve(this.tab.filter(item => item.id === id)[0] ?? null));
  }

  delete(id: string): Promise<void> {
    this.tab = this.tab.filter(item => item.id !== id);
    return new Promise(resolve => resolve());
  }

  getAllArticles(): Promise<Article[]> {
    return new Promise(resolve => resolve(this.tab));
  }
}

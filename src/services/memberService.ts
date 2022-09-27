import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GLOBAL} from '../app/app-config';
import {Member} from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  tab: Member[] = GLOBAL.DB.members;

  constructor(private httpClient: HttpClient) {
  }


  saveMember(objectToSubmit: any): Promise<any> {
    // si j'ai la partie back
    //return this.httpClient.post('linktorestAPI',objectToSubmit).toPromise();
    const memberToSave = {
      ...objectToSubmit,
      id: (Math.random() * 100000).toString(),
      createdDate: new Date().toISOString()
    };
    this.tab=[memberToSave, ...this.tab.filter(item => item.id!=memberToSave.id)];
    console.log(this.tab)
    return new Promise(resolve=> resolve(memberToSave))

  }
}

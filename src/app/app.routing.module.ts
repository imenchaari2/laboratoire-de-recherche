import {Routes} from '@angular/router';
import {MembersComponent} from './members/members.component';
import {MemberFormComponent} from './member-form/member-form.component';
import {EventsComponent} from './events/events.component';
import {ArticlesComponent} from './articles/articles.component';
import {ToolsComponent} from './tools/tools.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'members'
  },
  {
    path: 'members' ,
    pathMatch: 'full',
    component: MembersComponent,
  },
  {
    path: 'tools' ,
    pathMatch: 'full',
    component: ToolsComponent,
  },
  {
    path: 'articles' ,
    pathMatch: 'full',
    component: ArticlesComponent,
  },
  {
    path: 'events' ,
    pathMatch: 'full',
    component: EventsComponent,
  },
  {
    path: 'create' ,
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: 'members/:id/edit' ,
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'members'
  }
];

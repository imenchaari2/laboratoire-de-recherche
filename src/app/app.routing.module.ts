import {Routes} from '@angular/router';
import {MembersComponent} from './members/members.component';
import {MemberFormComponent} from './member-form/member-form.component';

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
    path: 'create' ,
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'members'
  }
];

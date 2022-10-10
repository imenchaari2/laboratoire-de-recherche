import {OnInit} from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {GLOBAL} from '../app-config';
import {MemberService} from '../../services/memberService';
import {Member} from '../../models/member';
import {MemberFormComponent} from '../member-form/member-form.component';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  dataSource: MatTableDataSource<Member>;

  constructor(private memberService: MemberService,
              private matDialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.memberService.tab);

  }

  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type', 'icone'];

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async fetchDataSource(): Promise<void> {
    this.dataSource.data = await this.memberService.getAllMembers();
  }

  delete(id: string): void {
    const dialogRef = this.matDialog.open(DialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.memberService.delete(id).then(async () => {
          await this.fetchDataSource();
        });
      }
    });

  }
}

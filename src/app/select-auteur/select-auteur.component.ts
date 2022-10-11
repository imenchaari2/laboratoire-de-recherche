import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Member} from '../../models/member';
import {MemberService} from '../../services/memberService';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-select-auteur',
  templateUrl: './select-auteur.component.html',
  styleUrls: ['./select-auteur.component.css']
})
export class SelectAuteurComponent implements OnInit {
  message = 'Liste des auteurs';
  title = 'selectionner un auteur! ';
  cancel = 'cancel';
  confirm = 'confirm';

  auteurs: Member[];
  auteur: string;

  constructor(private memberService: MemberService,
              private matDialog: MatDialog,
              public dialogRef: MatDialogRef<SelectAuteurComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

  }

  ngOnInit(): void {
    this.fetchDataSource();
  }

  async fetchDataSource(): Promise<void> {
    this.auteurs = await this.memberService.getAllMembers();
  }

  onSubmit(): void {
    this.dialogRef.close({data: this.auteur});

  }

  }

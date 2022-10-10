import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/memberService';
import {Member} from '../../models/member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form: any;
  currentId: string;
  item1: Member;

  constructor(private memberService: MemberService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentId = this.activatedRoute.snapshot.params.id;
    console.log(this.currentId);
    if (!!this.currentId) {
      this.memberService.getMemberById(this.currentId).then((item) => {
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
        cin: new FormControl(this.item1?.cin, [Validators.required]),
        name: new FormControl(this.item1?.name, [Validators.required]),
        cv: new FormControl(this.item1?.cv, [Validators.required]),
        type: new FormControl(this.item1?.type, [Validators.required])
      }
    );
  }

  ONSUB(): void {
    const objectToSubmit = {...this.item1 , ...this.form.value};
    this.memberService.saveMember(objectToSubmit).then(() => {
      this.router.navigate(['/members']);
    });
  }
}



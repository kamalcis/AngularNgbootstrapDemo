import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import SuperHero from 'src/app/models/SuperHero';
import { SuperHeroService } from 'src/app/services/SuperHero/super-hero.service';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.scss'],
})
export class SuperHeroComponent implements OnInit {
  public superHeroId: any;
  public superHeroName: any;
  public superHeroList: SuperHero[] = [];
  public hero = {} as SuperHero;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _superHeroService: SuperHeroService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      this.superHeroId = params.get('id');
      this.superHeroName = params.get('name');
    });

    this._superHeroService
      .getSuperHeroList()
      .subscribe((data) => (this.superHeroList = data));
  }

  /*-----------------------------Modal Popup----------------------------*/

  closeResult = '';
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  edit(content: any, superHero: SuperHero) {
    this.hero = superHero;

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

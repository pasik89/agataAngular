import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarouselService } from '../../services/carousel/carousel.service';
import { TableService } from '../../services/table/table.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  carouselItems: any[] = [];
  testowa: BehaviorSubject<string> = this.tableService.test;

  constructor(
    private carouselService: CarouselService,
    private tableService: TableService
    ) {}

  ngOnInit(): void {  
    // this.getCarouselItems();
    this.carouselService.getCarouselItems().subscribe(value => {
      this.carouselItems = value
    });
  }

  changeText() {
    this.testowa.next('z karuzeli');
  }

}

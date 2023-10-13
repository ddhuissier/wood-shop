import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductsService } from 'src/app/core/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-banner',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    TagModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],

})
export class BannerComponent implements OnInit {
  products: Product[] | undefined;

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      default:
        return 'danger';
    }
  }
}

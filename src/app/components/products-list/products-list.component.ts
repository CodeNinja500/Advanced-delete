import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  styleUrls: ['./products-list.component.scss'],
  templateUrl: './products-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  readonly products$: Observable<ProductModel[]> = this._productsService.getAll();
  private _refreshedProductsSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refreshedProducts$: Observable<ProductModel[]> = this._refreshedProductsSubject.asObservable().pipe(switchMap(data => this._productsService.getAll()));

  constructor(private _productsService: ProductsService) {
  }

  delete(id: string): void {
    this._productsService.delete(id).subscribe(() => this._refreshedProductsSubject.next());
  }
}

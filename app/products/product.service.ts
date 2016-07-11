import {Injectable} from 'angular2/core';
import {IProduct} from './product';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';

    constructor(private _http:Http) {
    }

    getProducts():Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((res:Response) => <IProduct[]> res.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err:Response) {
        console.error(err);
        return Observable.throw(err.json().error || 'Server Error');
    }
}
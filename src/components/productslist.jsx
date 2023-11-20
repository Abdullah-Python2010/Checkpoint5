import { Single } from './product';
import { ProductInfo } from './Info';

export const Products = () => {
    return(

        <div className="container">

            {
                ProductInfo.map((product) => {
                    return(
                        <Single URL={product.URL} name={product.name} price={'$' + product.price} desc={product.description} />
                    );
                })

            }

        </div>
    );
}


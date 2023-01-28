import { Addcart } from './App';



export function MiniCont({ data }) {

    return (
        <div className="miniCont">
            <img className="product" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="dummy" />
            <div className="productContent">
                <h3>{data.productName}</h3>
                <label>{data.rating}</label>
                <p>{data.cost}</p>
                <br />
                <Addcart />
            </div>
        </div>
    );
}

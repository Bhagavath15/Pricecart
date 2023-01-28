import { MiniCont } from "./MiniCont";

export function Content() {
    const content = [{
        productName: "Fancy Product",
        cost: "$60.00"
    },
    {
        productName: "Special Item",
        cost: "$18.00",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        productName: "Sale Item",
        cost: "$25.00"
    },
    {
        productName: "Popular Item",
        cost: "$40.00",
        rating: "⭐⭐⭐⭐⭐"
    }, {
        productName: "Sale Item",
        cost: "$25.00"
    }, {
        productName: "Fancy Product",
        cost: "$120.00 - $280.00"
    }, {
        productName: "Special Item",
        cost: "$18.00",
        rating: "⭐⭐⭐⭐⭐"
    }, {
        productName: "Popular Item",
        cost: "$40.00",
        rating: "⭐⭐⭐⭐⭐"
    }];
    return (
        <div className="content">
            {content.map((cnt) => <MiniCont data={cnt} />)}
        </div>
    );
}

function Table(){
    const productarray = [

        {
            No: "1",
            image: "https://printmytee.in/wp-content/uploads/2021/07/Product-Your-Design-Here-12-2.jpg",
            ProductName: "T-SHIRT WON THE RUN",
            Price: "$46,52",
            Status: "Available",
            Sell: "128",
            View: "12,308",
            Earning: "$5,954"
        },
        {
            No: "2",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_XHdn4Qi9u7LqawZRSvCGqbz07clURhvQA&s",
            ProductName: "T-SHIRT BOXY ADICOLOR CLASSIC",
            Price: "$48,76",
            Status: "Out os stock",
            Sell: "102",
            View: "14,120",
            Earning: "$4,973"
        },
        {
            No: "3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7jrTHxI095ot1V2TitH8vWPdBUhShqLf0g&s",
            ProductName: "T-SHIRT ESSEBTIALS 3-STRIPES",
            Price: "$48.00",
            Status: "out of stock",
            Sell: "80",
            View: "10,285",
            Earning: "$3,840"
        },
        {
            No: "4",
            image: "https://ih1.redbubble.net/image.1068349737.7595/ssrco,slim_fit_t_shirt,flatlay,edbb3b:2ffb89aaee,front,wide_portrait,750x1000-bg,f8f8f8.u1.webp",
            ProductName: "TOKYO PACK SHORT SLEEVE TEE",
            Price: "$48,76",
            Status: "Active",
            Sell: "72",
            View: "12,008",
            Earning: "$3,510"
        },
        {
            No: "5",
            image: "https://image.spreadshirtmedia.net/image-server/v1/products/T1212A228PA3523PT17X42Y41D153145615W22563H22563/views/1,width=378,height=378,appearanceId=228,backgroundColor=F2F2F2/ingen-lust-smilie.jpg",
            ProductName: "JERSEY JUVENTUS AWAY 21/22",
            Price: "$66,76",
            Status: "out of stock",
            Sell: "72",
            View: "11,092",
            Earning: "$3,970"
        },
        {
            No: "6",
            image: "https://printmytee.in/wp-content/uploads/2021/07/Product-Your-Design-Here-13-1.jpg",
            ProductName: "T-SHIRT OWN THE RUN UNISEX",
            Price: "$48,76",
            Status: "Active",
            Sell: "60",
            View: "14,380",
            Earning: "$2,828"
        }
    ]
    return(
        <>
        
<table class="w-100">
<tr>
    <th>NO</th>
    <th>Image</th>
    <th>Productname</th>
    <th>Price</th>
    <th>status</th>
    <th>Sell</th>
    <th>View</th>
    <th>Earnings</th>

</tr>              {
    productarray.map((Copyofproductarray) => {
        const { No, image, ProductName, Price, Status, Sell, View, Earning } = Copyofproductarray
        return (
            <>
                <tr>
                    <td>
                        {No}

                    </td>
                    <td>
                        <img class="tshirtcss" src={image}></img>
                    </td>
                    <td>{ProductName}</td>
                    <td>{Price}</td>
                    <td>{Status}</td>
                    <td>{Sell}</td>
                    <td>{View}</td>
                    <td>{Earning}</td>
                </tr>

            </>
        )
    })
}


</table>

        </>
    )
}
 export default Table

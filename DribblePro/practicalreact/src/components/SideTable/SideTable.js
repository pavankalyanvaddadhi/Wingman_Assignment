function SideTable() {
    const sales = [
        {
            Heading: "Sales Today",
            Money: "$120",
            Textname: "Updated every order success"
        },
        {
            Heading: "Total Earnings",
            Money: "$81,020",
            Textname: "+8.26% More earning than usual"
        },
        {
            Heading: "Total Orders",
            Money: "$102",
            Textname: "+2.18% More orders than usual"
        },
        {
            Heading: "Visitor Today",
            Money: "$81,020",
            Textname: "+3.06% More visitors than usual"
        }
    ]
    return (
        <>
            <div class="row mt-3">
                {sales.map((copyofsales) => {
                    const { Heading, Money, Textname } = copyofsales
                    return (
                        <>



                            <div className="col-6">
                                <div class="card p-3">
                                    
                                    <p>{Heading}</p>
                                    <h3>
                                        {Money}
                                    </h3>
                                    <p>
                                        {Textname}
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>

        </>
    )
}
export default SideTable
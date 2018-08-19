import React from 'react'
import CarList from "../containers/CarList"
import Detail from "../containers/Detail"

const Page = () =>(
    <div>
        <h2>Cars</h2>
            <CarList/>
        <hr/>
        <h4>Details</h4>
        <Detail/>
    </div>
)



export default Page
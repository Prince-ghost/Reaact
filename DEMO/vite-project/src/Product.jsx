const Product = (props) =>{

    return(
        <div>
            {/* <h1>Product Page</h1> */}
            <h3>{props.name} - {props.price}</h3>
            <h3> </h3>
            
        </div>
    )
}
export default Product;
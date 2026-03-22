function ProductCard({imagePath,pName,pPrice})
{
    const logProduct = () => {
        console.log(pName);
    }
    return(
    <div className="Pcard">
        <img src={imagePath} alt="Product Image" className="Pimage"></img>
        <p itemID="name">{pName}</p>
        <p itemID="price">Price: ${pPrice}</p>      
        <button onClick={logProduct}>Add to Cart</button>  
    </div>
    );
}

export default ProductCard;
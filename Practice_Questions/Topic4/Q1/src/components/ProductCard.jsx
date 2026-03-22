function ProductCard({imagePath,pName,pPrice})
{
    return(
    <div className="Pcard">
        <img src={imagePath} alt="Product Image" className="Pimage"></img>
        <p itemID="name">{pName}</p>
        <p itemID="price">Price: ${pPrice}</p>        
    </div>
    );
}

export default ProductCard;
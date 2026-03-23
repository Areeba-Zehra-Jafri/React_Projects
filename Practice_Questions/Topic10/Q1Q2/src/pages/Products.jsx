const products = [
  { id: 1, name: "Laptop", price: "$999" },
  { id: 2, name: "Phone", price: "$499" },
  { id: 3, name: "Headphones", price: "$199" },
];

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <p>You are logged in so you can see this page.</p>
      {products.map(p => (
        <div key={p.id} style={{ border: "1px solid black", margin: "8px", padding: "8px", width: "150px" }}>
          <p>{p.name}</p>
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
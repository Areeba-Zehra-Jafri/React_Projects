import './ProductCard.css'

const users = [
  { id: 1, name: "Ali Khan", role: "Frontend Dev", avatar: "./src/assets/1.png" },
  { id: 2, name: "Sara Ahmed", role: "Designer", avatar: "./src/assets/2.png" },
  { id: 3, name: "Usman Ali", role: "Backend Dev", avatar: "./src/assets/3.png" },
  { id: 4, name: "Ayesha Noor", role: "Manager", avatar: "./src/assets/4.png" },
  { id: 5, name: "Bilal Sheikh", role: "QA Engineer", avatar: "./src/assets/5.png" },
  { id: 6, name: "Hina Raza", role: "HR", avatar: "./src/assets/6.png" },
];
function UserCards() {
  return (
    <div className="UserCards">
      {users.map(user => (
        <div key={user.id} id="Card">
          <img src={user.avatar} alt={user.name} />
          <h3>{user.name}</h3>
          <p >{user.role}</p>
        </div>
      ))}
    </div>
  );
}
export default UserCards;
import { useState } from "react";

function Contact() {
  const [name, setName]       = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();   
    setSubmitted(true);
  }

  if (submitted) return <p>Thanks {name}, we got your message!</p>;

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Message: </label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;


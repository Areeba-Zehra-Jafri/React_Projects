function Message() {
  const currDateTime = new Date().toLocaleString(); 
  return (
    <p>The current Date and Time is as follows: {currDateTime}</p>
  );
}

export default Message;
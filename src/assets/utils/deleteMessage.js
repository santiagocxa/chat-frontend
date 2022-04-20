const deleteMessage = (_id) => {
  fetch(`http://localhost:8080/message/${_id}`, {
    method: 'DELETE',
  })
    .then((res) => res.text())
    .then((res) => console.log(res));
};

export default deleteMessage;

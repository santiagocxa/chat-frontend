import socket from './socket';

const sendMessage = (event, dataUserId, setDataUserId) => {
  event.preventDefault();
  const { chat, user, message } = dataUserId;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat,
      user,
      message,
    }),
  };
  fetch('http://localhost:8080/message/', requestOptions)
    .then((response) => response.json())
    .then((data) => socket.emit('run', data));

  setDataUserId({
    ...dataUserId,
    message: '',
  });
};

export default sendMessage;

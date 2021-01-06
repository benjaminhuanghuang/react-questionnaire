import React from 'react';

const Message = ({ msg, type }) => {
  let typeClass = '';

  if(type === 'danger') {
    typeClass = 'is-danger';
  }

  if(type === 'success') {
    typeClass = 'is-success';
  }

  return(
    <article className={`message ${typeClass}`}>
      <div className="message-body">{msg}</div>
    </article>
  );
}

export default Message;
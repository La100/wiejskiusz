import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Nowa wiadomość od {name}</h1>
    <p>Email kontaktowy: {email}</p>
    <div>
      <h2>Treść wiadomości:</h2>
      <p>{message}</p>
    </div>
  </div>
);

import { useState } from 'preact/hooks'; // importa useState da biblioteca do Preact

export default function Greeting({ messages }) { // define um componente
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)]; // escolhe palavra aleatória

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3> 
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  ); // retorna a mensagem com a palavra aleatória e adiciona um botão para dar "reroll" (esqueci-me do termo em pt)
}

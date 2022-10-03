import axios from 'axios';
import config from '../../config.json';
import emailjs from '@emailjs/browser';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

export const postMessage = async (input) => {

  emailjs.init("alqveR1PEivIVnzUd");
  
  emailjs.send('default_service', 'template_a0gqx4o', { message: input, })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  return "Message Sent"
};
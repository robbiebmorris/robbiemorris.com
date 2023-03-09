// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    c += Object.keys(bin).sort()[i - 1] + '\n';
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hey, my name is ${config.name}. 

I am currently a first year computer science university student. 

A few of my interests include:
- ${config.interests.int1}
- ${config.interests.int2}
- ${config.interests.int3}
- ${config.interests.int4}

Commands to learn more:
- resume
- projects

Commands to get in touch:
- email
- linkedin
`;
};

// export const resume = async (args: string[]): Promise<string> => {
//   window.open(`${config.resume_url}`);
//   return 'Opening resume...';
// };

export const blog = async (args: string[]): Promise<string> => {
  return `Unfortunately, this command is broken right now. Sorry for any inconveniences caused.`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  return `My email is ${config.email}. Invite me to an interview or send me cat videos.`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const cd = async (args: string[]): Promise<string> => {
  return `${args.join(' ')}: No such file or directory`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// export const sudo = async (args?: string[]): Promise<string> => {
//   window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
//   return `Permission denied: nice try bro`;
// };

// Banner
export const banner = (args?: string[]): string => {
  return `
Copyright (C) Microsoft Corporation. No rights reserved.
               ___.  ___.   .__                                   .__                                 
  _______  ____\\_ |__\\_ |__ |__| ____   _____   __________________|__| ______     ____  ____   _____  
  \\_  __ \\/  _ \\| __ \\| __ \\|  |/ __ \\ /     \\ /  _ \\_  __ \\_  __ \\  |/  ___/   _/ ___\\/  _ \\ /     \\ 
   |  | \\(  <_> ) \\_\\ \\ \\_\\ \\  \\  ___/|  Y Y  (  <_> )  | \\/|  | \\/  |\\___ \\    \\  \\__(  <_> )  Y Y  \\
   |__|   \\____/|___  /___  /__|\\___  >__|_|  /\\____/|__|   |__|  |__/____  > /\\ \\___  >____/|__|_|  /
                    \\/    \\/        \\/      \\/                            \\/  \\/     \\/            \\/ 

Welcome to my terminal portfolio website.
Type 'help' into the terminal to get started.

Type 'blog' to read my most recent blog post!

Type 'anondm' to send an anonymous message, no strings attatched.

`;
};

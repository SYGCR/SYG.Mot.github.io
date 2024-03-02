const messages = [
    "Go Away Skid!",
    "Don't use the console for spamming!",
    "This is annoying!",
    "Why are you doing this?",
    "Please stop!",
    "I can't take it anymore!",
    "I'm begging you, stop it!",
    "I'm going to turn off my computer if you don't stop!",
    "I'm not kidding, stop this now!",
    "Okay, I'm really turning off my computer now!",
  ];
  
  setInterval(() => {
    console.log("%c" + messages[Math.floor(Math.random() * messages.length)], "color: red; font-size: 24px;");
    console.warn("%cThis is not a good use of the console!", "color: orange; font-size: 18px;");
    console.error("%cSeriously, stop it!", "color: yellow; font-size: 12px;");
  }, 500);
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const presser = String.raw`

██▀███   ██▓ ▄████▄   ██ ▄█▀ ██▀███   ▒█████   ██▓     ██▓         ██████  ██▓███   ▄▄▄       ███▄ ▄███▓ ███▄ ▄███▓▓█████  ██▀███  
▓██ ▒ ██▒▓██▒▒██▀ ▀█   ██▄█▒ ▓██ ▒ ██▒▒██▒  ██▒▓██▒    ▓██▒       ▒██    ▒ ▓██░  ██▒▒████▄    ▓██▒▀█▀ ██▒▓██▒▀█▀ ██▒▓█   ▀ ▓██ ▒ ██▒
▓██ ░▄█ ▒▒██▒▒▓█    ▄ ▓███▄░ ▓██ ░▄█ ▒▒██░  ██▒▒██░    ▒██░       ░ ▓██▄   ▓██░ ██▓▒▒██  ▀█▄  ▓██    ▓██░▓██    ▓██░▒███   ▓██ ░▄█ ▒
▒██▀▀█▄  ░██░▒▓▓▄ ▄██▒▓██ █▄ ▒██▀▀█▄  ▒██   ██░▒██░    ▒██░         ▒   ██▒▒██▄█▓▒ ▒░██▄▄▄▄██ ▒██    ▒██ ▒██    ▒██ ▒▓█  ▄ ▒██▀▀█▄  
░██▓ ▒██▒░██░▒ ▓███▀ ░▒██▒ █▄░██▓ ▒██▒░ ████▓▒░░██████▒░██████▒   ▒██████▒▒▒██▒ ░  ░ ▓█   ▓██▒▒██▒   ░██▒▒██▒   ░██▒░▒████▒░██▓ ▒██▒
░ ▒▓ ░▒▓░░▓  ░ ░▒ ▒  ░▒ ▒▒ ▓▒░ ▒▓ ░▒▓░░ ▒░▒░▒░ ░ ▒░▓  ░░ ▒░▓  ░   ▒ ▒▓▒ ▒ ░▒▓▒░ ░  ░ ▒▒   ▓▒█░░ ▒░   ░  ░░ ▒░   ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░
  ░▒ ░ ▒░ ▒ ░  ░  ▒   ░ ░▒ ▒░  ░▒ ░ ▒░  ░ ▒ ▒░ ░ ░ ▒  ░░ ░ ▒  ░   ░ ░▒  ░ ░░▒ ░       ▒   ▒▒ ░░  ░      ░░  ░      ░ ░ ░  ░  ░▒ ░ ▒░
  ░░   ░  ▒ ░░        ░ ░░ ░   ░░   ░ ░ ░ ░ ▒    ░ ░     ░ ░      ░  ░  ░  ░░         ░   ▒   ░      ░   ░      ░      ░     ░░   ░ 
   ░      ░  ░ ░      ░  ░      ░         ░ ░      ░  ░    ░  ░         ░                 ░  ░       ░          ░      ░  ░   ░     
             ░                                                                                                                      
             `;
             console.log(red(presser));
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  function runFunctionXTimes(callback, interval, repeatTimes) {
    let repeated = 0;
    const intervalTask = setInterval(doTask, interval)

    function doTask() {
        if ( repeated < repeatTimes ) {
            callback()
            repeated += 1
        } else {
            clearInterval(intervalTask)
        }
    }
} 




  var fun = function() {
    const chromeLauncher = require('chrome-launcher');
    chromeLauncher.launch({
      startingUrl: 'https://youtu.be/dQw4w9WgXcQ'
      
    })
       
      
   
    }
 
  readline.question('are you sure you want to spam open rickrolls?', name => {
    if(name === 'yes') {
        console.log('yes')
        
        readline.question('how much files do you want to open?', name => {
            
          runFunctionXTimes(fun, 0, name)
                console.log('done')
              
                readline.close();
                

        })
    } else if(name === 'no'){
        console.log('stopping the service!')
        readline.close();

    }
  });
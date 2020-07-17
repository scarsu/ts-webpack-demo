const msg = 'hi typescript'

function sayHi(msg:string){
  return 'hello,'+msg
}

document.body.textContent = sayHi(msg)
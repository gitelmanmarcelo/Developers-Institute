function f() {
    a = 5;
}


let add = (function () {
    let counter = 0;
    console.log('aaa');
    function calculus() {
        console.log('bbb');
        counter += 1; 
        return counter
    }
    return calculus
  })();
  
  add();
  add();
  add();
  console.log('ccc');
  f();
  console.log(a);

  
  const tshirt = {
    color : "blue",
    price : 10
}

changeTshirt(tshirt)

function changeTshirt ({...myshirt}){
    //const myshirt = {...byRef};   // CREATES A NEW OBJECT IN A NEW ADDRESS, APART FROM THE GLOBAL
    console.log("myshirt", myshirt);
    myshirt.color = "red"
    console.log("myshirt", myshirt); //this is the parameter
    console.log("tshirt", tshirt);   //this is the global variable
}



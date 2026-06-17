function sayHello() {
  return function () {
    console.log("Hello ,🎉");
  };
}

//Task -print "Hello , 🎉"

const value = sayHello()();

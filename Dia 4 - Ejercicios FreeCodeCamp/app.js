function titleCase(str) {
    str = str.toLowerCase();   //
    console.log(str)
    str = str.split(" ");
    console.log(str)
    str = str.map(val => val.replace(val.charAt(0),val.charAt(0).toUpperCase()));
    console.log(str)
    str = str.join(" ");
    console.log(str)
    return str
  }

  
  
  titleCase("I'm a little tea pot");
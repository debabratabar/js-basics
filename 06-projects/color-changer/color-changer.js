let eventList = document.addEventListener("click", function (event) {
    // console.log(event.target.id);
    //   let color= event.target.id
    //   document.body.style.backgroundColor=color
  
    switch (event.target.id) {
      case "red":
        this.body.style.backgroundColor = "red";
        break;
      case "yellow":
        this.body.style.backgroundColor = "yellow";
        break;
      case "purple":
        this.body.style.backgroundColor = "purple";
        break;
      case "blue":
        this.body.style.backgroundColor = "blue";
        break;
      case "brown":
        this.body.style.backgroundColor = "brown";
        break;
      default:
          console.log();
    }
  });
  
  // console.log(typeof  eventList);
  
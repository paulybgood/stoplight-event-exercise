
(function () {
  const stopButton = document.getElementById("stopButton");
  const slowButton = document.getElementById("slowButton");
  const goButton = document.getElementById("goButton");

  const stopLight = document.getElementById("stopLight");
  const slowLight = document.getElementById("slowLight");
  const goLight = document.getElementById("goLight");

  stopButton.addEventListener("click", () => {
    stopLight.classList.toggle("stop");
  });

  slowButton.addEventListener("click", () => {
    slowLight.classList.toggle("slow");
  });
  
  goButton.addEventListener("click", () => {
    goLight.classList.toggle("go");
  });

  const handleMouseEnter = (event) => {
    console.log(`Entered ${event.target.innerHTML} button`);
  };

  const handleMouseLeave = (event) => {
    console.log(`Left ${event.target.innerHTML} button`);
  };

  stopButton.addEventListener("mouseenter", handleMouseEnter);
  slowButton.addEventListener("mouseenter", handleMouseEnter);
  goButton.addEventListener("mouseenter", handleMouseEnter);

  stopButton.addEventListener("mouseleave", handleMouseLeave);
  slowButton.addEventListener("mouseleave", handleMouseLeave);
  goButton.addEventListener("mouseleave", handleMouseLeave);

  const controls = document.getElementById("controls");
  let count = 0;
  const handleBulbCondition = (event) => {
    if (count === 0) {
      console.log(`${event.target.id} bulb on`);
      count = 1
    } else if (count === 1) {
      console.log(`${event.target.id} bulb off`);
      count = 0
    }
  }
  controls.addEventListener("click", handleBulbCondition);
})();
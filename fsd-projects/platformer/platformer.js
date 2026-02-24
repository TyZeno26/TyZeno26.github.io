$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    ///toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 700, 60, 30, "red");
    createPlatform(451, 660, 159, 20, "green");
    createPlatform(630, 535, 70, 25, "blue");
    createPlatform(815, 490, 20, 10, "orange");
    createPlatform(610, 380, 30, 15, "yellow");
    createPlatform(355, 290, 50, 10, "indigo");
    createPlatform(935, 590, 100, 15, "violet");
    createPlatform(1150, 645, 75, 5, "pink");
    createPlatform(995, 390, 110, 20, "turquoise");
    createPlatform(1210, 285, 74, 50, "brown");



    // TODO 3 - Create Collectables
    createCollectable("database", 360, 225, 10.0, 1.0);
    createCollectable("max", 805, 390, 0.5, 1.0);
    createCollectable("steve", 1227, 236, 0.5, 1.0);
    createCollectable("diamond", 1160, 545, 1.0, 1.0);


    
    // TODO 4 - Create Cannons
    createCannon("bottom", 700, 700);
    createCannon("right", 620, 2000);
    createCannon("right", 475, 2500);
    createCannon("top", 1300, 2550);
    createCannon("top", 999, 3000);
    createCannon("top", 450, 3000);
    createCannon("left", 185, 2900, 100, 10, 100, 250, 3);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

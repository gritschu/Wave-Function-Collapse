let tiles = [];
const tileImages = [];

let grid = [];

const DIM = 30;
const numberOfImages = 54;
const tilesDir = 'tiles/gritsWFC_1stTry';

let stuck = false;
let pickFirstCell = true;
let done = false;

function preload() {
  const path = tilesDir;
  for (let i = 0; i < numberOfImages; i++) {
    tileImages[i] = loadImage(`${path}/${i}.png`);
  }
}

function removeDuplicatedTiles(tiles) {
  const uniqueTilesMap = {};
  for (const tile of tiles) {
    const key = tile.edges.join(','); // ex: "ABB,BCB,BBA,AAA"
    uniqueTilesMap[key] = tile;
  }
  return Object.values(uniqueTilesMap);
}

function setupTilesFromFolder_gritsWFC_1stTry() {
  tiles[0] = new Tile(tileImages[0], ['WWW', 'WWW', 'WWW', 'WWW']);
  tiles[1] = new Tile(tileImages[1], ['XXX', 'XXX', 'XXX', 'XXX']);
  tiles[2] = new Tile(tileImages[2], ['WWW', 'WWW', 'XXX', 'XXW']);
  tiles[3] = new Tile(tileImages[3], ['WWW', 'WXX', 'XXX', 'WWW']);
  tiles[4] = new Tile(tileImages[4], ['WWW', 'WXX', 'XXX', 'XXW']);
  tiles[5] = new Tile(tileImages[5], ['XXW', 'WXX', 'WWW', 'WWW']);
  tiles[6] = new Tile(tileImages[6], ['XXW', 'WXX', 'XXX', 'XXX']);
  tiles[7] = new Tile(tileImages[7], ['XWW', 'WXX', 'XXX', 'XXX']);
  tiles[8] = new Tile(tileImages[8], ['WWX', 'XXX', 'XXX', 'XXW']);
  tiles[9] = new Tile(tileImages[9], ['XWW', 'WWX', 'XXX', 'XXX']);
  tiles[10] = new Tile(tileImages[10], ['XXX', 'XXX', 'WWW', 'WWW']);
  tiles[11] = new Tile(tileImages[11], ['WWW', 'WWW', 'XXX', 'XXX']);
  tiles[12] = new Tile(tileImages[12], ['WWW', 'WWW', 'P-X', 'XXW']);
  tiles[13] = new Tile(tileImages[13], ['WWW', 'WXX', 'X-P', 'WWW']);
  tiles[14] = new Tile(tileImages[14], ['X-P', 'PPP', 'P-X', 'XXX']);
  tiles[15] = new Tile(tileImages[15], ['WWW', 'XWW', 'WWW', 'WWW']);
  tiles[16] = new Tile(tileImages[16], ['WWW', 'WWW', 'WWW', 'WWX']);
  tiles[17] = new Tile(tileImages[17], ['WWW', 'XXX', 'WWW', 'WWW']);
  tiles[18] = new Tile(tileImages[18], ['WWW', 'XXW', 'WWW', 'WWW']);
  tiles[19] = new Tile(tileImages[19], ['WWW', 'WWW', 'WWW', 'WXX']);
  tiles[20] = new Tile(tileImages[20], ['WWX', 'XWW', 'WWW', 'WWW']);
  tiles[21] = new Tile(tileImages[21], ['WXX', 'XXW', 'WWW', 'WWW']);
  tiles[22] = new Tile(tileImages[22], ['PPP', 'PPP', 'PPP', 'PPP']);
  tiles[23] = new Tile(tileImages[23], ['X-P', 'P-X', 'XXX', 'XXX']);
  tiles[24] = new Tile(tileImages[24], ['WXX', 'XWW', 'WWW', 'WWW']);
  tiles[25] = new Tile(tileImages[25], ['XXW', 'WWW', 'WWW', 'WWX']);
  tiles[26] = new Tile(tileImages[26], ['WWW', 'WWW', 'X-P', 'WWW']);
  tiles[27] = new Tile(tileImages[27], ['WWW', 'WWW', 'P-X', 'WWW']);
  tiles[28] = new Tile(tileImages[28], ['WWX', 'WWW', 'WWW', 'XXX']);
  tiles[29] = new Tile(tileImages[29], ['WWW', 'WWW', 'XWW', 'XXX']);
  tiles[30] = new Tile(tileImages[30], ['WWX', 'WWW', 'WWW', 'WXX']);
  tiles[31] = new Tile(tileImages[31], ['WWW', 'WWW', 'XWW', 'WXX']);
  tiles[32] = new Tile(tileImages[32], ['WWW', 'WWW', 'XWW', 'XXW']);
  tiles[33] = new Tile(tileImages[33], ['WWX', 'WWW', 'WWW', 'XXW']);
  tiles[34] = new Tile(tileImages[34], ['WWW', 'WWW', 'PPP', 'PPW']);
  tiles[35] = new Tile(tileImages[35], ['WWW', 'WPP', 'PPP', 'WWW']);
  tiles[36] = new Tile(tileImages[36], ['WWW', 'WWW', 'PPP', 'WWW']);
  tiles[37] = new Tile(tileImages[37], ['WWW', 'WWW', 'WWW', 'WPP']);
  tiles[38] = new Tile(tileImages[38], ['WWW', 'WWW', 'WWW', 'PPW']);
  tiles[39] = new Tile(tileImages[39], ['WWW', 'WWW', 'XXX', 'WXX']);
  tiles[40] = new Tile(tileImages[40], ['WWW', 'XXW', 'XXX', 'WWW']);
  tiles[41] = new Tile(tileImages[41], ['WWW', 'WWW', 'XXW', 'WXX']);
  tiles[42] = new Tile(tileImages[42], ['WWW', 'WWW', 'WXX', 'WXX']);
  tiles[43] = new Tile(tileImages[43], ['WWW', 'XXW', 'XXW', 'WWW']);
  tiles[44] = new Tile(tileImages[44], ['WWW', 'XXW', 'PPW', 'WWW']);
  tiles[45] = new Tile(tileImages[45], ['WWW', 'WWW', 'WPP', 'WXX']);
  tiles[46] = new Tile(tileImages[46], ['WWW', 'WWW', 'PPW', 'WXX']);
  tiles[47] = new Tile(tileImages[47], ['WWW', 'XXW', 'WPP', 'WWW']);
  tiles[48] = new Tile(tileImages[48], ['XXW', 'XWW', 'WWW', 'WWX']);
  tiles[49] = new Tile(tileImages[49], ['WXX', 'XWW', 'WWW', 'WWX']);
  tiles[50] = new Tile(tileImages[50], ['XWW', 'XWW', 'WWW', 'WWW']);
  tiles[51] = new Tile(tileImages[51], ['WWX', 'WWW', 'WWW', 'WWX']);
  tiles[52] = new Tile(tileImages[52], ['WWW', 'XXX', 'XXX', 'XXX']);
  tiles[53] = new Tile(tileImages[53], ['WWW', 'PPP', 'PPP', 'PPP']);
}

function setup() {
  createCanvas(800, 800);
  //randomSeed(15);

  setupTilesFromFolder_gritsWFC_1stTry();

  for (let i = 0; i < tiles.length; i++) {
    tiles[i].index = i;
  }

  const initialTileCount = tiles.length;
  for (let i = 0; i < initialTileCount; i++) {
    let tempTiles = [];
    for (let j = 0; j < 4; j++) {
      tempTiles.push(tiles[i].rotate(j));
    }
    tempTiles = removeDuplicatedTiles(tempTiles);
    tiles = tiles.concat(tempTiles);
  }
  console.log(tiles.length);

  // Generate the adjacency rules based on edges
  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    tile.analyze(tiles);
  }

  startOver();
}

function startOver() {
  // Create cell for each spot on the grid
  for (let i = 0; i < DIM * DIM; i++) {
    grid[i] = new Cell(tiles.length,false);
  }
  pickFirstCell = true;
  stuck = false;
}

function checkValid(arr, valid) {
  //console.log(arr, valid);
  for (let i = arr.length - 1; i >= 0; i--) {
    // VALID: [BLANK, RIGHT]
    // ARR: [BLANK, UP, RIGHT, DOWN, LEFT]
    // result in removing UP, DOWN, LEFT
    let element = arr[i];
    // console.log(element, valid.includes(element));
    if (!valid.includes(element)) {
      arr.splice(i, 1);
    }
  }
  // console.log(arr);
  // console.log("----------");
}

// function mousePressed() {
//   redraw();
// }

function draw() {
  background(0);

  const w = width / DIM;
  const h = height / DIM;
  for (let j = 0; j < DIM; j++) {
    for (let i = 0; i < DIM; i++) {
      let cell = grid[i + j * DIM];
      if (cell.collapsed) {
        let index = cell.options[0];
        image(tiles[index].img, i * w, j * h, w, h);
      } else {
        noFill();
        stroke(51);
        rect(i * w, j * h, w, h);
      }
    }
  }

  if (done){
    console.log("* * * * * * DONE! :) * * * * * *");
    noLoop();
    return;
  }

  if (stuck) {
    console.log("! ! ! ! ! ! STUCK! :O ! ! ! ! ! !");
    noLoop();
  }

  
  // Pick cell with least entropy
  let gridCopy = grid.slice();
  gridCopy = gridCopy.filter((a) => (!a.collapsed && a.neighbourOfCollapsed)); // only pick cells in neighbourhood - opt.
  // console.table(grid);
  // console.table(gridCopy);
  if (!pickFirstCell){
    if (gridCopy.length == 0) {
      console.log("no cells available");
      return;
    }
    gridCopy.sort((a, b) => {
      return a.options.length - b.options.length;
    });

    let len = gridCopy[0].options.length;
    let stopIndex = 0;
    for (let i = 1; i < gridCopy.length; i++) {
      if (gridCopy[i].options.length > len) {
        stopIndex = i;
        break;
      }
    }

    if (stopIndex > 0) gridCopy.splice(stopIndex);
  }

  let cell;
  if (pickFirstCell) {
    cell = random(grid);
    pickFirstCell = false;
  } else {
    cell = random(gridCopy);
  }
  
  const pick = random(cell.options);
  if (pick === undefined) {
    //////// Option a: start all over ////////
    // startOver();
    // return;

    //////// Option b: stop -> find out what kind of tile is "missing" -> create and include new tile image ////////
    // cell.collapsed = true;
    // cell.options = [22];  // display pink tile for debugging
    // stuck = true;
    // return;

    //////// Option c: don't collapse cell, reset the neighbours instead ////////
    cell.noOptions = true;
    
  } else {
    cell.collapsed = true;
    cell.options = [pick];
  }
  

  const nextGrid = [];
  let allCollapsed = true;
  for (let j = 0; j < DIM; j++) {
    for (let i = 0; i < DIM; i++) {
      let index = i + j * DIM;
      if (grid[index].collapsed) {
        nextGrid[index] = grid[index];
      } else {
        allCollapsed = false;
        let options = new Array(tiles.length).fill(0).map((x, i) => i);
        let isNeighbourOfCollapsed = false;
        // Look up
        if (j > 0) {
          let up = grid[i + (j - 1) * DIM];
          if (grid[index].noOptions) {
            up.collapsed = false;
            up.setOptions(tiles.length);
          }
          if (up.collapsed) {
            isNeighbourOfCollapsed = true;
            // console.log("up is collapsed");
          
            let validOptions = [];
            for (let option of up.options) {
              let valid = tiles[option].down;
              validOptions = validOptions.concat(valid);
            }
            checkValid(options, validOptions);
          }
        }
        // Look right
        if (i < DIM - 1) {
          let right = grid[i + 1 + j * DIM];
          if (grid[index].noOptions) {
            right.collapsed = false;
            right.setOptions(tiles.length);
          }
          if (right.collapsed) {
            isNeighbourOfCollapsed = true;
            // console.log("right is collapsed");
          
            let validOptions = [];
            for (let option of right.options) {
              let valid = tiles[option].left;
              validOptions = validOptions.concat(valid);
            }
            checkValid(options, validOptions);
          }
        }
        // Look down
        if (j < DIM - 1) {
          let down = grid[i + (j + 1) * DIM];
          if (grid[index].noOptions) {
            down.collapsed = false;
            down.setOptions(tiles.length);
          }
          if (down.collapsed) {
            isNeighbourOfCollapsed = true;
            // console.log("down is collapsed");
          
            let validOptions = [];
            for (let option of down.options) {
              let valid = tiles[option].up;
              validOptions = validOptions.concat(valid);
            }
            checkValid(options, validOptions);
          }
        }
        // Look left
        if (i > 0) {
          let left = grid[i - 1 + j * DIM];
          if (grid[index].noOptions) {
            left.collapsed = false;
            left.setOptions(tiles.length);
          }
          if (left.collapsed) {
            isNeighbourOfCollapsed = true;
            // console.log("left is collapsed");
          
            let validOptions = [];
            for (let option of left.options) {
              let valid = tiles[option].right;
              validOptions = validOptions.concat(valid);
            }
            checkValid(options, validOptions);
          }
        }
        if (grid[index].noOptions) {
          grid[index].noOptions = false;
        }
        // I could immediately collapse if only one option left?
        nextGrid[index] = new Cell(options,isNeighbourOfCollapsed);
      }
    }
  }

  grid = nextGrid;
  if (allCollapsed) {
    done = true;
  }
}

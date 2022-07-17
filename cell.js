class Cell {
  constructor(value,isNeighbour) {
    this.collapsed = false;
    this.neighbourOfCollapsed = isNeighbour;  // optimization: entropy gets smaller only if neighbours are collapsed
    this.noOptions = false; // in case of being stuck reset my neighbours
    if (value instanceof Array) {
      this.options = value;
    } else {
      this.options = [];
      for (let i = 0; i < value; i++) {
        this.options[i] = i;
      }
    }
  }

  setOptions(value) {
    if (value instanceof Array) {
      this.options = value;
    } else {
      this.options = [];
      for (let i = 0; i < value; i++) {
        this.options[i] = i;
      }
    }
  }

}

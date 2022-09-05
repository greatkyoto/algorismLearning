function main(input) {
    const args = input.split("\n");
    let revStr = args[0].split("").reverse().join("");
    const dividers = ['dream', 'dreamer', 'erase', 'eraser']
        .map(divider => divider.split('').reverse().join(''));
    let can = true;
    while (can && revStr.length > 0) {
      if (revStr.indexOf(dream) === 0) {
        revStr = revStr.slice(5);
        continue;
      } else if (revStr.indexOf(dreamer) === 0) {
        revStr = revStr.slice(7);
        continue;
      } else if (revStr.indexOf(erase) === 0) {
        revStr = revStr.slice(5);
        continue;
      } else if (revStr.indexOf(eraser) === 0) {
        revStr = revStr.slice(6);
        continue;
      } else {
        can = false;
      }
    }
  
    console.log(can ? "YES" : "NO");
  }
  
  main(require("fs").readFileSync(process.stdin.fd, "utf8"));
  
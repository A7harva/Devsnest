var array = [];
for (var i = 0; i < 64; i++) {
  array.push(i);
}
function container(i) {
  if ((i + Math.floor(i / 8)) % 2 == 0) {
    return <div className="white cell">
      </div>;
  }
  else {
    return <div className="black cell">
      </div>;
  }
}
function Cells() {
  return array.map(container);
}

export default Cells;
'use strict';

const n1 = 'nice';

const variable = function (n1, n2) {
  const thing = true;
  console.log(`nice pitch, ${n2.first}`);

  const functioning = function (n3) {
    console.log();
  };
  functioning(null);

  return n2;
};

const name = {
  first: 'Jonathan',
  last: 'Peral Gort',
  fullName: this.first + this.last,
};

variable('every step you take', name);

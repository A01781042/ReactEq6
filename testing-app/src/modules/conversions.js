
function grade_conversions(grade) {
  let letter = 'E';
  if(grade >= 93) {
    letter = 'A';
  } else if(grade >= 90) {
    letter = 'A-';
  } else if(grade >= 87) {
    letter = 'B+';
  } else if(grade >= 83) {
    letter = 'B';
  } else if(grade >= 80) {
    letter = 'B-';
  } else if(grade >= 77) {
    letter = 'C+';
  } else if(grade >= 73) {
    letter = 'C';
  } else if(grade >= 70) {
    letter = 'C-';
  } else if(grade >= 67) {
    letter = 'D+';
  } else if(grade >= 64) {
    letter = 'D';
  }
  return letter;
}

function american_date(date) {
  const [day, month, year] = date.split('/');
  return [month, day, year].join('/');
}

function remove_surname(fullName) {
  const [name, surname1, ] = fullName.split(' ');
  return [name, surname1].join(' ');
}

function new_format([id, name, mat, date, grade]) {
  const newLine = [
    id,
    remove_surname(name),
    mat + "@tec.mx",
    american_date(date),
    grade_conversions(grade)
  ];
  return newLine;
}

export {grade_conversions, american_date, remove_surname, new_format};

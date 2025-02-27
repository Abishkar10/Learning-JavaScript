const currentdate = new Date();

console.log(currentdate);
console.log(currentdate.getDay());
console.log(currentdate.getFullYear());
console.log(currentdate.getMonth());

console.log(currentdate.getTimezoneOffset());

const oldDate = new Date("2025-02-20");
console.log(oldDate);

// formatting dates

console.log(currentdate.toDateString());
console.log(currentdate.toISOString());
console.log(currentdate.toLocaleDateString());
console.log(currentdate.toString());

function daysUntilBirthday(birthday) {
  let today = new Date();
  let nextBirthday = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  if (today > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  let difference = nextBirthday - today;
  return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

let myBirthday = new Date("2025-03-10");
console.log(`Days until birthday: ${daysUntilBirthday(myBirthday)}`);

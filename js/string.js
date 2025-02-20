//write a js function that converts string to lowercase

const lowercase = (string = "") => {
  return String(string).toLowerCase();
};

console.log(lowercase("HELLO WORLD"));
console.log(lowercase(123));

//write a js function to convert long text to ...
// "Ram is a teacher at Broadway" => "Ram is a ..."

const truncate = ({ string = "", length = 9 }) => {
  return string.length > length
    ? (string = string.slice(0, length) + "...")
    : string;
};

console.log(truncate({ string: "Ram is a teacher at Broadway", length: 9 }));
console.log(truncate({ string: "I am here", length: 9 }));

//Write a js function to convert text to slug
// "Raktim is a teacher" => "raktim-is-a-teacher"

const slug = (string = "") => {
  return string.toLowerCase().replace(" ", "-");
};

console.log(slug("Raktim is a teacher"));
console.log(slug("I am here"));

//Write a js function to check if the phone number is a mobile number or not
// must be 10 digits and must start with 98

const checkMobile = (number = "") => {
  return number.length === 10 && number.startsWith("98")
    ? `${number} is a mobile number`
    : `${number} is not a mobile number`;
};

console.log(checkMobile("9812345678"));
console.log(checkMobile("4415860"));

//write a js function to create a proper case
//"abishkar jung shah" => "Abishkar Jung Shah"

const propercase = (data = "") => {
  let string = String(data.toLowerCase());
  let result = "";
  const length = string.length;
  let capitalize = true;
  for (let i = 0; i < length; i++) {
    let str = string[i];

    if (capitalize == true) {
      result += str.toUpperCase();
      capitalize = false;
    } else {
      result += str.toLowerCase();
    }
    if (str === " ") {
      capitalize = true;
    }
  }
  return result;
};

console.log(propercase("abishkar jung shah"));
console.log(propercase("the old tree is being cut down"));

//write a js function to clean the data
// "    Abishkar    Jung    Shah" => "Abishkar Jung Shah"

const clean = (string = "") => {
  return string.trim().replaceAll(" ", " ").replaceAll(" ", " ");
};

console.log(clean("    Abishkar    Jung    Shah"));

//write a js function to convert number to formatted number
//1000 => 1,000
//1000000 => 1,000,000

const formatnum = (number = 0) => {
  return number.toLocaleString();
};

console.log(formatnum(500000000));
console.log(formatnum(5215448465131564186461));

const formatnumber = (string = "") => {
  let parts = [];
  let count = 0;

  for (let i = string.length - 1; i >= 0; i--) {
    parts.push(string[i]);
    count++;
    count % 3 === 0 && i != 0 ? parts.push(",") : 0;
  }
  return parts.reverse().join("");
};

console.log(formatnumber("100000000"));
console.log(formatnumber("1132341234123423412412512312"));

//Write a js function to check if the string contains a word or not
//"Abishkar is a student". check "student" => true
//"Abishkar is a student". check "teacher" => false

const check = (string = "", word = "") => {
  let char = string.toLowerCase();
  let checkword = word.toLowerCase();
  let words = char.trim().split(" ");
  for (let i = 0; i < words.length; i++) {
    if (checkword === words[i]) {
      return true;
    }
  }
  return false;
};

let result1 = check("Abishkar is a student", "student");
let result2 = check("Abishkar is a student", "teacher");
let result3 = check("The world is a mess", "World");
console.log(result1);
console.log(result2);
console.log(result3);

const checker = (string = "", word = "") => {
  let char = string.toLowerCase();
  let checkword = word.toLowerCase();
  return char.includes(checkword) ? true : false;
};

console.log(checker("A bus hit a car", "bus"));
console.log(checker("A bus hit a car", "van"));

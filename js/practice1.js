const FoodA = ["Noodles", "Ice-Cream", "Pizza"];
const FoodB = ["Fries", "Ice-Cream", "Pasta"];
//compare the two arrays and find the common one
// map filter reduce some every

const CompareArray = (array1 = [], array2 = []) =>
  array1.find((item) => array2.includes(item));

let item = CompareArray(FoodA, FoodB);
console.log({ item });

const userroles = ["user", "manager", "guest"];
const pagerole = ["admin", "manager"];

//find the answer if the user can access the page or not in boolean

const access = (array1 = [], array2 = []) => {
  const check = array1.some((item)=>array2.includes(item));
  return check;
};


const accessing = access(userroles,pagerole);
console.log(accessing);

//Pagination

const page = 2;
const limit =2;
const data = [1,2,3,4,5,6,7,8,9,10];

const paginate = (page=1, limit=5) => 
  {
    const start = (page-1)*limit;
    const end = start + limit;
    return {users: data.slice(start, end), total: data.length, page, limit};
  }

console.log(paginate(2,2));
console.log(paginate(3,2));
console.log(paginate(4,2));
console.log(paginate(12,2));


const UnsortedData = [ 
  {name: "A", age: 10},
  {name: "B", age:100},
  {name: "C", age:20},
];

const sorter = () => {
  return UnsortedData.sort((a,b) => a.age - b.age);
};

console.log(sorter());

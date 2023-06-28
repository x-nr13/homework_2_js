for (let i = 0; i <= 10; i = i + 2) {
console.log(i)
}

for (let i = 55; i >= 20; i = i - 1) {
    console.log(i)
    }
 

const numbers = [3, 5, 11, 2, 8, 1, 16]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

const numbers_squared = []
numbers_squared.push(numbers[0]**2, numbers[1]**2, numbers[2]**2, numbers[3]**2, numbers[4]**2, numbers[5]**2, numbers[6]**2)
console.log(numbers_squared)

const lastElem = numbers_squared.pop()
console.log(lastElem)


const user = {
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20,
    salary: 500
  };
  
  const formattedString = "User's name is " + user.first_name + " " + user.last_name + ". He is " + user.age + " years old.";
  
  console.log(formattedString)
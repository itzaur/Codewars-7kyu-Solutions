/*
Description:
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []
Input strings will only contain letters.
Note: keep the original order of the names in the output.
*/
function friend(friends) {
  const length = 4;

  return friends.filter((el) => el.length === length);
}

console.log(friend(['Ryan', 'Kieran', 'Mark'])); //["Ryan", "Mark"]
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])); //["Ryan"]
console.log(
  friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])
); //["Jimm", "Cari", "aret"]
console.log(friend(['Love', 'Your', 'Face', '1'])); //["Love", "Your", "Face"]

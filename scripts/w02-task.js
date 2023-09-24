/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Sterling Steele';
let currentYear = '2023';
let profilePicture = 'images/IMG_0520.jpeg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', `${profilePicture}`);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
favoriteFoods = ['sushi', 'fish', 'spaghetti', 'ham and cheese sandwich', 'broccoli and cheese soup', 'salmon', 'fruit salad'];
foodElement.innerHTML = `${favoriteFoods}`;
let favoriteFood = 'sharp cheddar cheese';
favoriteFoods.push(`${favoriteFood}`);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;

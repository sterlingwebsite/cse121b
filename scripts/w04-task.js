/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};
myProfile.name = "Sterling Steele";
myProfile.photo = "images/IMG_0520.jpeg"  
myProfile.favoriteFoods = ['Sushi', 'Cheese', 'Dark Chocolate', 'Lasagna']
myProfile.hobbies = ['Reading', 'Traveling', 'Hiking', 'Bowling']
myProfile.placesLived = []
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
      place: 'Cedar City, UT',
      length: '6 months'
    });
myProfile.placesLived.push ({
      place: 'Provo, UT',
      length: '4 years'
    },{
      place: 'Rexburg, ID',
      length: '2 years'
    },{
      place: 'Albuquerque, NM',
      length: '2 years'
    })
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').append(dt, dd);
  });
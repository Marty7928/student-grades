var students =  [
  {
    "name": "George Brown",
    "age": 100,
    "pets": [
              "dog",
              "cat",
              "fish"
            ],
    "grade": 85
  },
  {
    "name": "Ramon Delgado",
    "age": 40,
    "pets": [],
    "grade": 55
  },
  {
    "name": "Annie Sado",
    "age": 50,
    "pets": ["dog"],
    "grade": 95
  }
];

// Clear out the "grades" area output
$('.grades').empty();


// Run ONCE for each "students" (Array)
/*$.each(students, function(index, person) {

  $('.grades').append('<div class="student"><h1>'+ person.name +' ('+person.age+')</h1><p>Grade: '+person.grade+'%</p></div>');

});*/

// Define a template for a student
var $studenthtml =  $('<div class="student">'+
                        '<h1><span class="name">Student Name</span> (<span class="age">##</span>)</h1>'+
                        '<p>Grade: <span class="grade">##</span>%</p>'+
                      '</div>');

// Run ONCE for each "students" (Array)
$.each(students, function(index, person) {

  // Make a copy of the student template and add to the page
  var $onestudent = $studenthtml.clone().appendTo('.grades');

  // Fill in each value
  $onestudent.find('.name').text(person.name);
  $onestudent.find('.age').text(person.age);
  $onestudent.find('.grade').text(person.grade);

});







/* end */

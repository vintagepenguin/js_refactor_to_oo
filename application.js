$(document).ready(function() {
  
  Die.prototype = {
  faceValues: [1, 2, 3, 4, 5, 6],
  roll: function() {
    return this.faceValues[Math.floor(Math.random() * this.faceValues.length)]
  }
}

function Die() {
  this.activeFaceValue = 0
};

  $('#roller button.add').on('click', function() {
    console.log("WAT")
    $('.dice').append('<div class="die">0</div>');
  });

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      gameDie = new Die; 
      $(die).text(gameDie.roll());
    });
  });
});
// class Die

//   def initialize
//   end

//   #.....

//   what in prototype

// end


// newDie = new Die(); 
// // someone can inherit from 

// var o = Object.create(newDie);











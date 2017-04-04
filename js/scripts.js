//Back End
function Ticket (matinee, premiere, age){
  this.matinee = matinee;
  this.premiere = premiere;
  this.age = age;
}
Ticket.prototype.ticketPrice = function () {
  var initialPrice = 10;
  if (this.premiere === true) {
    initialPrice += 2;
  }
  if (this.age >= 65 || this.age <= 14) {
    initialPrice -= 4;
  }
  if(this.matinee === true) {
    initialPrice -= 2;
  }
  return initialPrice;
};

//movie object (true if the movie is a premiere)
var movies = {
  terminator: true,
  titanic: false,
  aliens: true
};





//Fron End

$(function(){
  $("form").submit(function(e){
    e.preventDefault();

    var movieName = $("#movieType").val();
    var movieTime = $("#showtime").val();
    var viewerAge = parseFloat($("#ageInput").val());

    if(movieName === "Terminator") {
      movieName = movies.terminator;
    }
    else if(movieName === "Titanic"){
      movieName = movies.titanic;
    }
    else {
      movieName = movies.aliens;
    }

    var newTicket = new Ticket(movieTime, movieName, viewerAge);

    $("#output").append( "<h2>" + $("#movieType").val() + "</h2>" );
    if (movieTime === "true") {
      $("#output").append("<p>Matinee Showing</p>");
    } else {
      $("#output").append("<p>Normal Showing</p>");
    }
    if (viewerAge <= 14) {
      $("#output").append("<p>Youth Admittance</p>");
    } else if (viewerAge >= 65) {
      $("#output").append("<p>Senior Admittance</p>");
    } else {
      $("#output").append("<p>Normal Admittance</p>");
    }
    $("#output").append("<p>$" + newTicket.ticketPrice() + "</p>");

    $(".drag").draggable();
    $("#ageInput").val("");
  })
});

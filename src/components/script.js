import React from 'react'

export const script = () => {
  return (
    <>
    var modal = document.getElementById("myModal");
    
   
    var btn = document.getElementById("myBtn");
    
   
    var span = document.getElementsByClassName("close")[0];
    
    
    btn.onclick = function () {
      modal.style.display = "block";
    };
    
    
    span.onclick = function () {
      modal.style.display = "none";
    };
    
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    
 
    function openTab(tabName) {
      var i, x;
      x = document.getElementsByClassName("containerTab");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(tabName).style.display = "block";
      
    }
    
    var pressedButton = document.getElementById("placeorder");
    
    pressedButton.addEventListener("click", function (evt) {
      alert(
        "Thank you for your purchase! Your order has been placed, and will be ready in 15 minutes!"
      );
      evt.preventDefault();
    });
    </>
  );
};

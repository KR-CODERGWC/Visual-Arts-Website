function ab() {

  var abartists, list, length, i;
  abartists = [
  "Jackson Pollock 1912-1956 (No.5 1948)",
  "Pablo Picasso 1881-1973 (The Matador 1970)",
  "Mark Rothko 1903-1970 (Orange, Red, Yellow 1961)",
  "Wassily Kandinsky 1866-1944 (Composition X 1939) "

  ];
  length = abartists.length;

  list = "<ul>";
  for (i = 0; i < length; i++) {
    list += "<li>" + abartists[i] + "</li>";
}
  list += "</ul>";

  document.getElementById("demo").innerHTML = list;
}

function changeImage() {

       if (document.getElementById("imgClickAndChange").src == "jacksonpollock2.jpg")
       {
           document.getElementById("imgClickAndChange").src = "No5.jpg";
       }
      /* if (document.getElementById("imgClickAndChange").src == "No5.jpg")
       {
           document.getElementById("imgClickAndChange").src = "impressionalism1.jpg";
       }*/
       else
       {
           document.getElementById("imgClickAndChange").src = "No5.jpg";
       }
   }

   function changeImage2() {

          if (document.getElementById("imgClickAndChange2").src == "picasso.jpg")
          {
              document.getElementById("imgClickAndChange2").src = "thematador.jpg";
          }
         /* if (document.getElementById("imgClickAndChange").src == "No5.jpg")
          {
              document.getElementById("imgClickAndChange").src = "impressionalism1.jpg";
          }*/
          else
          {
              document.getElementById("imgClickAndChange2").src = "thematador.jpg";
          }
      }

      function changeImage3() {

             if (document.getElementById("imgClickAndChange3").src == "markrothko.jpg")
             {
                 document.getElementById("imgClickAndChange3").src = "orange-red-yellow.jpg";
             }
            /* if (document.getElementById("imgClickAndChange").src == "No5.jpg")
             {
                 document.getElementById("imgClickAndChange").src = "impressionalism1.jpg";
             }*/
             else
             {
                 document.getElementById("imgClickAndChange3").src = "orange-red-yellow.jpg";
             }
         }
         function changeImage4() {

                if (document.getElementById("imgClickAndChange4").src == "wassilykandinsky.jpg")
                {
                    document.getElementById("imgClickAndChange4").src = "composition x.jpg";
                }
               /* if (document.getElementById("imgClickAndChange").src == "No5.jpg")
                {
                    document.getElementById("imgClickAndChange").src = "impressionalism1.jpg";
                }*/
                else
                {
                    document.getElementById("imgClickAndChange4").src = "composition x.jpg";
                }
            }

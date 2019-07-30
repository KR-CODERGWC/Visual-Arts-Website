function p() {

  var popartists, list, length, i;
  popartists = [
  "Andy Warhol 1928-1987 (Shot Marilyns 1964)",
  "Roy Lichtenstein 1923-1997 (Crying Girl 1963)",
  "Keith Haring 1958-1990 (Radiant Baby 1990)",
  "Yayoi Kusama 1929-present (Dots Obsession 2003) ",
  "David Hockney 1937-present (A Closer Grand Canyon 1998) "

  ];
  length = popartists.length;

  list = "<ul>";
  for (i = 0; i < length; i++) {
    list += "<li>" + popartists[i] + "</li>";
}
  list += "</ul>";

  document.getElementById("demo").innerHTML = list;
}

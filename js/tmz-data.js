var tmz = tmz || {};

tmz.wd=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']; 

//city,country,standard time zone(minutes),daylight saving time(minutes) 
tmz.D = [ 
       {
    	   city: "Beijing",
    	   country: "China",
    	   stz: 480,
    	   dst: 0
       },
       {
   			city: "Madrid",
   			country: "Spain",
   			stz: 60,
   			dst: 0
       },
       {
   			city: "Bucharest",
   			country: "Roumania",
   			stz: 120,
   			dst: 0
       },
       {
   			city: "New York",
   			country: "America",
   			stz: -300,
   			dst: 0
       },
       {
   			city: "Tokyo",
   			country: "Japan",
   			stz: 540,
   			dst: 0
       },
       {
  			city: "London",
  			country: "Britain",
  			stz: 0,
  			dst: 0
       },
       {
 			city: "New Delhi",
 			country: "India",
 			stz: 330,
 			dst: 0
       },
       {
 			city: "Mexico City",
 			country: "Mexico",
 			stz: -360,
 			dst: 0
       }
	] 
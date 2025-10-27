var inscription=prompt("did rejested in jadara :");
if(inscription=="yes"){
     alert("your selected to next step");
     var test=prompt("did you valide the test :");
     if(test=="yes"){
      alert("congrat your valid the test oral");
      var engagement=prompt("did you any business:");
      var certificate = prompt("Do you have a high school degree ");
      var live=prompt("did you live in sous massa :");
      if(engagement=="non" && certificate=="yes" && live=="yes"){
       alert("cogratolation your selected to passe the test");
       var note=prompt("what is youre note for the test :")
       if(note>=60){
        alert("congratuation your been accepted to periode DC");
        var absence=prompt("did you have any absence in periode DC");
        if(absence=="non")
         alert("Cogratulation your doing Greath Job");
         alert("be carfull with black hole do you project && respect your deadline");
         var didline=prompt("did you respict didline");
         if(didline=="yes"){
           alert("Congratulation your doing weel");

         }else{alert("00")}
       }else{alert("00")}
      }else{alert("00")}
     }else{alert("00")}
}else{ alert("00")}
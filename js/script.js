$( "document" ).ready(function() {
    //function piglatinize()
        $("#button").click(function(){
          //  if () {
            let input = $(".input").val();
            let words = input.split(" ")
            console.log(words + "!")
            console.log(input)
            let vowels = ["a", "e", "i", "o", "u"]
            words.forEach(function(word){
                console.log(word)
                index = 0
                let beginning = word.charAt(index);
                console.log(beginning)
                console.log(vowels.find("a"))
                if (beginning == vowels) {
                    $("input").append("ay");
                } else {
                    $("")
                }
            })
            //let end = str.split(input.charAt(2));
            //$(".output").append(input);
           // }
        });
    //});
});
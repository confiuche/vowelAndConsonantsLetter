function classifyLetters(word){
    //vow = 'aeiou'
    
    //word = prompt('enter word')
    let vow = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U']
    //conson = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
     newWord = word.split('')
    //////  dd=[];
    //////  dd.push(vow)
    //////  console.log(dd)
     //////newVowel = vow.split("")
     ////console.log(word)
     console.log(newWord)
     //////console.log(newVowel)
    consonants = [];
    vowels = [];
    display = {
        vowels : vowels,
        consonants : consonants
    }
     for(let i = 0; i<word.length; i++){
      let any = word[i];
       
        //let aa = any.split("")
        //console.log(any)
        if(vow.includes(any)){
            display.vowels.push(any)
        }else{
            display.consonants.push(any)
        }
   }
    return display;
    
    
}
 //word = ["bastion"]
 //classifyLetters(word)
 console.log(classifyLetters('Bastion'))




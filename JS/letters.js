function classifyLetters(word){
    //let newWord = word.split('')
            //console.log(newWord)
    document.getElementById('sub').addEventListener('click',function(){
        
        word = document.getElementById('words').value
        
        for(let i = 0; i<words.length; i++){
            let any =word[i];
            console.log(any)
            if(vow.includes(any)){
                document.getElementById('vowel').innerHTML = display.vowels.push(any)
            }else{
                document.getElementById('consonant').innerHTML = display.consonants.push(any)
            }
        }

    })
    let vow = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U']
     
    
    consonants = [];
    vowels = [];
    display = {
        vowels : vowels,
        consonants : consonants
    }
     
    return display;
    
}
classifyLetters()



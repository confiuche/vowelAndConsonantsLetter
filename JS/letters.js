function classifyLetters(word){
    //let newWord = word.split('')
            console.log(newWord)
    document.getElementById('sub').addEventListener('click',function(){
        
        word = document.getElementById('words').value
        
        for(let i = 0; i<word.length; i++){
            let any =word[i];
            console.log(any)
            if(vow.includes(word)){
                document.getElementById('vowel').innerHTML = display.vowels.push(word)
            }else{
                document.getElementById('consonant').innerHTML = display.consonants.push(word)
            }
        }

    })
    /*word = prompt('enter word')*/
    let vow = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U']
    //conson = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
     /*newWord = word.split('')*/
    
     /*console.log(newWord)*/
    consonants = [];
    vowels = [];
    display = {
        vowels : vowels,
        consonants : consonants
    }
     
    return display;
    
}
classifyLetters()



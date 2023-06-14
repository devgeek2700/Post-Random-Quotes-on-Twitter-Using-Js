        const quotes_cont = document.getElementById('quotes');
        const author_cont = document.getElementById('author');
        const qt_btn = document.getElementById('qt_btn');
        const tweetMe = document.getElementById('tweetMe');
        let realdata ="";
        let quoteData = "";

        // tweet the quote in twitter
        const tweetNow = ()=>{
            let tweeturl = `https://twitter.com/intent/tweet?text=${quoteData.text} 
            By ${quoteData.author}`;
            window.open(tweeturl);
        }







        //create random number for quotes
        const getNewQuotes = () =>{
            let Randnum = Math.floor(Math.random() *1643);
            quoteData = realdata[Randnum];
            quotes_cont.innerHTML = `${quoteData.text}`;

            if(quoteData.author != null){
                author_cont.innerHTML = `${quoteData.author}`;
            }
            else{
                author_cont.innerHTML = "Unknown";
            }
        };


        const getQuotes = async() =>{
            const api = "https://type.fit/api/quotes";
            try{
                // fetch api data
                let data = await fetch(api);
                realdata = await data.json();
                getNewQuotes();
            }catch(error){

            }
        }
        
        qt_btn.addEventListener('click', getNewQuotes);
        tweetMe.addEventListener('click', tweetNow);
        getQuotes();
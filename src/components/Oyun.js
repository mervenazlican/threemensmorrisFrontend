import React, {useState, useEffect} from 'react'; 
import Icons from './Icons';  

function Oyun() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [oyunList, setOyunList] = useState('');

    useEffect(() => {
        fetch("/game")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setOyunList(result)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if(error) {
        return <div>Error..</div>;
    }else if(!isLoaded){
        return <div>Loading ..</div>;
    }else{
        return(
            <div>                 
                {oyunList.map( oyun => (
                    <div class="player" id="player" >   
                      {'Oyuncu Adı: '}  {oyun.oyuncuAdi} {'- '} {'Hamle Sayısı: '} {oyun.oyuncuHareketi}
                    </div>
                ))} 
                <div class="icon" id="icon">
                    <Icons/>
                </div>
                <div class="board" id="board"> 
                    <div class ="cell"></div>
                    <div class ="cell"></div>
                    <div class ="cell"></div>
                    <div class ="cell"></div>
                </div>                
            </div>
        );
    }  
}

export default Oyun;
import React from 'react';
 
const OptionsFutebol = () => {
    return (
       <fieldset>
                    <label>Time Mandante</label>
                    <input type='text' onChange={(e)=>(e.target.value)}/>
                    
                    <label>Time Visitante</label>
                    <input type='text' onChange={(e)=>(e.target.value)}/>
                    
                    
                    <label htmlFor="futebolOption1">Jogador - Finalizações</label>
                    <input type="text"  id="futebolOption1" />
                    
                    <label htmlFor="futebolOption2">Jogador - Finalizações ao Gol</label>
                    <input type="text"  id="futebolOption2" />
                    
                    <label htmlFor="futebolOption3">Gols</label>
                    <input type="text"  id="futebolOption3" />
                    
                    <label htmlFor="futebolOption4">Escateio</label>
                    <input type="text"  id="futebolOption4" />
                    
                    <label htmlFor="futebolOption5">Cartões</label>
                    <input type="text"  id="futebolOption5" />
       </fieldset>
    );
}
 
OptionsFutebol.propTypes = {};
 
export default OptionsFutebol;
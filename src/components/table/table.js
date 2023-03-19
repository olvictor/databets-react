import React from 'react'
import './table.css'
import { BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi'
import { BiCheckCircle } from 'react-icons/bi'

export default function Table({bets}) {
   

  return (

    <>
        <h2> {bets.length <1 ? 'Não existem apostas registradas' : ''}  </h2>   
        <table className={bets.length <1 ? 'hide': ''}> 
            <thead> 
                <tr>
                    <th>ID</th>
                    <th>Valor</th>
                    <th>ODD</th>
                    <th>Retorno</th>
                    <th>Lucro</th>
                    <th>Modalidade</th>
                    <th>Tipo de Aposta</th>
                    <th>Confronto</th>
                    <th>Data</th>
                    <th>Ações</th>
                    <th>Editar/Remover</th>
                </tr>
            </thead>
            <tbody>
                {bets.map(bet =>(
                <tr key={bet.id} onClick={()=>console.log(bet.options)}>
                    <td>{bet.id.toFixed(1)}</td>
                    <td>{bet.valor+' R$'}</td>
                    <td>{bet.odd}</td>
                    <td>{bet.retorno+' R$'}</td>
                    <td>{bet.lucro+' R$'}</td>
                    <td>{bet.modalidade}</td>
                    <td className='options'>
                        <span>{bet.options.basqueteOpt1}</span>         
                        <span>{bet.options.basqueteOpt2}</span>
                        <span>{bet.options.basqueteOpt3}</span>
                        <span>{bet.options.basqueteOpt4}</span>
                    </td>
                    <td>{bet.options.timeMandante+' x '+bet.options.timeVisitante}</td>
                    <td>{bet.date}</td>
                    <td className='actions'>
                        <BiCheckCircle />
                        <BiCheckCircle />
                    </td>
                    <td><FiEdit /> <BsTrash /></td>
                </tr>

                ))} 
            </tbody>
        </table>
    </>
  )
}

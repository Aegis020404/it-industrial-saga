import React from 'react';
import cl from './../../style/VacancyAcc.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const VacancyAccItem = ({title, descr, whatDo, info, check,classesItem, classesBlock, classesDescr, handleChange, expanded})=>{
  


    return (
        // <details className=''>
        //     <summary className={cl.accordionHeading}>
        //         <h3 className={cl.accordionTitle}>{title}</h3>
        //         <div className={cl.accordionSignBlock}>
        //             <span className={cl.accordionLineV}></span>
        //             <span className={cl.accordionLineH}></span>
        //         </div>
        //     </summary>
        //     <div className='details-wrapper'>
        //         <div className={cl.accordionCard}>
        //             <p className={[cl.accordionDescr, classesDescr].join` `}>{descr}</p>
        //             {whatDo !== undefined && <p className={cl.accordionWhatDo}>{whatDo}</p>}
        //             {info !== undefined && 
        //             <ul className={cl.accordionList}>
        //                 {info.map(e => 
        //                 <li className={cl.accordionItem}>
        //                     <span></span>
        //                     {e}
        //                 </li>
        //                 )}
        //             </ul>
        //             }
        //         </div>  
        //     </div>
        // </details>
          <Accordion expanded={expanded === check} onChange={handleChange(check)} className={cl.Accordion}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className={cl.accSummary}>
          <Typography className={cl.accordionTitle}>
               {title} 
          </Typography>
            <div className={'accordionSignBlock'}>
                <span className={'accordionLineV'}/>
                <span className={'accordionLineH'}/>
            </div>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
            <div className={cl.accordionCard}>
                <p className={[cl.accordionDescr, classesDescr].join` `}>{descr}</p>
                    {whatDo !== undefined && <div className={cl.accordionWhatDo}>{whatDo}</div>}
                    {info !== undefined && 
                    <ul className={cl.accordionList}>
                        {info.map(e => 
                        <li className={cl.accordionItem}>
                            <span></span>
                            {e}
                        </li>
                        )}
                    </ul>
                    }
            </div>
          </Typography>
          </AccordionDetails>
      </Accordion>
    )
}

export default VacancyAccItem



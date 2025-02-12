import * as React from 'react';

import Modal from '@mui/material/Modal';
import { ModalProps } from '@/types/Html';
 
export default function ModalComponent({ Open, children, ChangeOpen, showClose = true,title,classCss }: ModalProps) {

  return (
    <>

      <Modal
        open={Open}
        onClose={() => ChangeOpen()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    
      >
        <>
          <div dir={"rtl"} className={`w-[70%] md:w-[50%] m-auto h-[80%] p-2 bg-[--bgColorCard] rounded mt-20 ${classCss}`} onClick={() => ChangeOpen()}>
             <div className='flex flex-row gap-x-1 mb-4'>
               {showClose&&<p>close</p>}
               <b>{title}</b>
               </div>
          
            {children}
          </div>
        </>
      </Modal>
    </>
  );
}
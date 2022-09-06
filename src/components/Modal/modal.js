import styles from './styles.module.css';

const Modal=({children , isModalVisible, setIsModalVisible })=>{

     const rootClasses=[styles.myModal];

     if(isModalVisible){
      rootClasses.push(styles.active)
     }

    return(
     <div className={rootClasses.join(' ')}  onClick ={()=>setIsModalVisible(false)} >
         <div className={styles.myModalContent} onClick={(e)=>e.stopPropagation()} >
              {children}
         </div>
     </div>
    )
}
export default Modal
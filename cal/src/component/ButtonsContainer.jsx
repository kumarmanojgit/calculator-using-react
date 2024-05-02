import styles from "./ButtonsContainer.module.css"
const ButtonsContainer=()=>{
  const ButtonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return (
    <>
      <div className={styles.buttonsContainer}>

      {ButtonNames.map(buttonname=><button className={styles.button}>{buttonname}</button>)}
      </div>   
    </>
  )
};
export default ButtonsContainer;

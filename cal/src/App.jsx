
import styles from "./App.module.css"
import Display from "./component/Display";
import ButtonsContainer from "./component/ButtonsContainer";
function App() {
  return (
    <> <center >
       <div className={styles.calculator}>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
    </center>
     
    </>
  )
}

export default App

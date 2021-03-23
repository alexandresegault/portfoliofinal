import './BurgerLogo.css'

const BurgerLogo = prevProps => {
  return (
    <div>
      <div id='logoBurger' onClick={prevProps.handleClick}>
        <div className={prevProps.openBurger ? 'clickedBar1' : 'bar1'}></div>
        <div className={prevProps.openBurger ? 'clickedBar2' : 'bar2'}></div>
        <div className={prevProps.openBurger ? 'clickedBar3' : 'bar3'}></div>
      </div>
    </div>
  )
}

export default BurgerLogo
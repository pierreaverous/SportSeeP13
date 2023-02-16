import SelectUser from '../components/SelectUser'

const Accueil = () => {
  return (
    <div className="accueil">
      <div className="accueil-top">
        <div className="bonjour">
          <h1>
            Bonjour <span>!</span>
          </h1>
        </div>
        <SelectUser />
      </div>
      <div className="accueil-bottom"></div>
    </div>
  )
}

export default Accueil

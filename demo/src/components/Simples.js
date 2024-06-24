// divers composants fonctionnels
function Simple() {
    return <p>Simple composant fonctionnel</p>
}

function Simple2(props) {
    //console.log(props)
    return <p>Formation: { props.propA }</p>
}

function Simple3(props) {
    return (
        <p>
            Formation: { props.training }<br />
            Niveau: <strong>{ props.level }</strong><br />
            Durée: { props.duration } jours
        </p>
    )
}

function Simple4(props) {
    if (props.accessible === true) {
        return <p>Accès autorisé</p>
    } else {
        return <p>Accès interdit</p>
    }
}

export { Simple, Simple2, Simple3, Simple4 }
  
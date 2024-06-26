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

function Simple5(props) {
    // ES6 destructuring
    const { operand1, operand2, operator } = props;
    let result = 0;
    let operation = '';

    if (operator === 'add') {
        result = operand1 + operand2;
        operation = '+';
    } else if (operator === 'mult') {
        result = operand1 * operand2;
        operation = '*';
    } else if (operator === 'sub') {
        result = operand1 - operand2;
        operation = '-';
    } else {
        result = 0;
        operation = '';
    }

    if (!operation) return <div>Opération non réalisable !</div>

    let style = {};
    if (result < 0) {
        style.color = 'red';
    }

    return (
        <div>
            <span>{operand1}</span>
            <span>{operation}</span>
            <span>{operand2}</span>
            <span>=</span>
            <span style={style}>{result}</span>
        </div>
    )
}

export { Simple, Simple2, Simple3, Simple4, Simple5 }
  
import { connect } from 'react-redux'

function Perfil(props) {

    const FN = props.contactsF;

    return (
        <div>
            {FN.map((f, index) => {
                return (
                    <div key={index}>
                        {f}
                    </div>
                )
            })}
        </div>
    )
}

function mapStateToProps(stateF) {
    return {
        contactsF: stateF.contactsF
    }
}


export default connect(mapStateToProps)(Perfil) 
import { useLocation } from 'react-router-dom'

function PregledStrana() {

    const location = useLocation();
    const data = location.state.dataVariable;

    return (
        <div>
            <h1 id='chck'>Molimo Vas proverite Vaše podatke</h1>
        </div>
    )
}

export default PregledStrana;
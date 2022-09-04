import { useLocation, useNavigate } from 'react-router-dom'

function PregledStrana() {

    const location = useLocation();
    const data = location.state.dataVariable;

    const navigate = useNavigate();

    function potvrdiPrijavu() {
        alert("Poštovani " + data.ime + " " + data.prezime + ", uspešno ste se prijavili na Summer Fun!")
        navigate('/')
    }

    return (
        <div>
            <h1 id='chck'>Molimo Vas proverite Vaše podatke</h1>

            <div className='podaci'>
                <h3>Ime -  {data.ime}</h3>
                <h3>Prezime - {data.prezime}</h3>
                <h3>Email - {data.email}</h3>
                <h3>Broj telefona - {data.broj_telefona}</h3>
            </div>

            <button type="button" onClick={potvrdiPrijavu} className="btn btn-primary mt-4" id='prvbtn'>Potvrdi prijavu</button>

        </div>
    )
}

export default PregledStrana;
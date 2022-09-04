import { useState } from 'react'

function PrijavaSForma(props) {

    const [prijava, setPrijava] = useState({
        ime: '',
        prezime: '',
        email: '',
        broj_telefona: '',
    });




    return (
        <div>

            <form onSubmit={(e) => props.fja(e, prijava)} id="prijavi-se-forma">

                <div className='sf'>
                    <label>Ime: </label>
                    <input type="text" className="form-control" value={prijava.ime} onChange={e => setPrijava({ ...prijava, ime: e.target.value })} />
                </div>

                <div className='sf'>
                    <label>Prezime: </label>
                    <input type="text" className="form-control" value={prijava.prezime} onChange={e => setPrijava({ ...prijava, prezime: e.target.value })} />
                </div>

                <div className='sf'>
                    <label>Email: </label>
                    <input type="email" className="form-control" value={prijava.email} onChange={e => setPrijava({ ...prijava, email: e.target.value })} />
                </div>

                <div className='sf'>
                    <label>Broj telefona: </label>
                    <input type="text" className="form-control" value={prijava.broj_telefona} onChange={e => setPrijava({ ...prijava, broj_telefona: e.target.value })} />
                </div>


                <button type="submit" className="btn btn-primary" id='prvbtn'>Prijavi se</button>
            </form>

        </div>
    )
}

export default PrijavaSForma;

function PrijavaSForma() {

    const [prijava, setPrijava] = useState({
        ime: '',
        prezime: '',
        email: '',
        broj_telefona: '',
    });




    return (
        <div>

            <form onSubmit={prijaviSe} id="prijavi-se-forma">

                <div>
                    <label>Ime: </label>
                    <input type="text" className="form-control" value={prijava.ime} onChange={e => setPrijava({ ...prijava, ime: e.target.value })} />
                </div>

                <div>
                    <label>Prezime: </label>
                    <input type="text" className="form-control" value={prijava.prezime} onChange={e => setPrijava({ ...prijava, prezime: e.target.value })} />
                </div>

                <div>
                    <label>Prezime: </label>
                    <input type="text" className="form-control" value={prijava.email} onChange={e => setPrijava({ ...prijava, email: e.target.value })} />
                </div>

                <div>
                    <label>Prezime: </label>
                    <input type="text" className="form-control" value={prijava.broj_telefona} onChange={e => setPrijava({ ...prijava, broj_telefona: e.target.value })} />
                </div>


                <button type="submit" className="btn btn-primary">Prijavi se</button>
            </form>

        </div>
    )
}

export default PrijavaSForma;
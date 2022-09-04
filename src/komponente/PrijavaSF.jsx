import PrijavaSForma from "./PrijavaSForma";
import { useNavigate } from "react-router-dom";

function PrijavaSF(props) {

    const navigate = useNavigate();


    function passData(e, data) {
        e.preventDefault();

        navigate('/pregled', {
            state: {
                dataVariable: data
            },
        });
    }

    return (
        <div>
            <h1 id="sf-pr">{props.tekst}</h1>

            <PrijavaSForma fja={passData} />
        </div>
    )
}

export default PrijavaSF;
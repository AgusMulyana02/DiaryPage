import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container ">
                <h2>ini home</h2>
                <button onClick={() => navigate("/")}>
                    Kembali
                </button>

            </div>
        </>
    )
}

export default Home

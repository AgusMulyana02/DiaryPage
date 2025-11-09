import { useNavigate } from "react-router-dom";

function Photo() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <h2>ini Photo</h2>
                <button onClick={() => navigate("/")}>
                    Kembali
                </button>

            </div>
            
        </>
    )
}

export default Photo

import { useNavigate } from "react-router-dom";

function Video() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <h2>ini Video</h2>
                <button onClick={() => navigate("/")}>
                    Kembali
                </button>

            </div>
            
        </>
    )
}

export default Video

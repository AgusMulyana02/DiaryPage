import { Outlet, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Navigasi() {
    const navigate = useNavigate();
    const logOut = () => {
        Swal.fire({
            title: "Apa kamu yakin ?",
            text: "Kamu keluar dari halaman ini",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "LogOut"
        }).then(() => {
            // pindah ke halaman login/cover
            navigate('/');
        });
    }

    return (
        <>
            <div style={{ paddingBottom: '80px' }}>
                <Outlet /> {/* Halaman yang berubah sesuai route */}
            </div>
            <div className="container"
                style={{
                    border: '2px solid red',
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    backgroundColor: '#ffffffff',
                    textAlign: 'center',
                }}>
                <div className="row border">
                    <div className="col-3 border p-2" onClick={() => navigate("/home")}>
                        <i className="bi bi-house-door-fill fs-1" title="Home"></i>
                    </div>
                    <div className="col-3 border p-2" onClick={() => navigate("/photo")}>
                        <i className="bi bi-file-earmark-image fs-1" title="Photo"></i>
                    </div>
                    <div className="col-3 border p-2" onClick={() => navigate("/video")}>
                        <i className="bi bi-file-earmark-play-fill fs-1" title="Video"></i>
                    </div>
                    <div className="col-3 border p-2" onClick={logOut}>
                        <i className="bi bi-door-open-fill fs-1" title="LogOut"></i>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navigasi

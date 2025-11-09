import cover from './assets/img/A1234.jpeg'
import { useNavigate } from "react-router-dom";

function Cover() {
    const navigate = useNavigate();

    return (

        <div className="container border mt-3">
            <div className="row border mb-2">
                <div className="col-12 border p-2">
                    <img src={cover} alt="" width={300} className='rounded'/>
                </div>
            </div>

            <div className="row border">
                <div className="col border">
                    <h5>Selamat Datang</h5>
                    <p className='text-muted'>Ini adalah website saya, saya membuat website ini ketika saya sedang gabut hehe</p>
                </div>
            </div>

            <div className="row mt-1 border">
                <div className="col mt-2 mb-2 border">
                    <button onClick={() => navigate("/home")} className='btn btn-primary w-100'>Open Website</button>
                </div>
            </div>
        </div>

    )
}

export default Cover
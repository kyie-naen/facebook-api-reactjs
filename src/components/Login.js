import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import Facebook from './Facebook/Facebook';


function App() {
  
  return (
    <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                    <div className="card-body p-4 p-sm-5">
                        <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                        <div className="d-grid">
                        <Facebook />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

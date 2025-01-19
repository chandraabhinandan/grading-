import './nav.css'

function Navbar(){
    return (
        <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        <h1>MakeHerWeb</h1>
        </a>
      </div>

    

      <div class="col-md-3 text-end">
        <a href="/login"><button  type="button" class="btn btn-outline-primary me-2">Login</button></a>
        <button type="button" class="btn btn-primary">Contact Us</button> 
      </div>
    </header>
  </div>
    );
}
export default Navbar;
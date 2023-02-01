import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {MDBRadio,MDBBtn} from 'mdb-react-ui-kit';
function App() {
  return (
<div className='app'>
<nav className="main-header">
<div className="logo-gmc">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK3FnezCJ_zqzGA1cm3pPDuH4GPX1GchjTAenctCiqEodVyeViz0tiPIQTbf9CzQ3IHDA&usqp=CAU" alt="logo"/>
        </div>
        <div className="main-menu">
          <ul>
            <li><a href="#learn">Learn</a></li>
            <li><a href="#connect">Connect</a></li>
            <li><a href="explore">Explore</a></li>

            <li>More
             <div className="dropdown-list">
               <ol>
               <li>About Us</li>
               <li>Contact Us</li>
             </ol>
             </div>
            </li>
          </ul>
        </div>
        <div>
            <button id="sign-in" className="sign-btn">Sign in</button>
        </div>
       </nav>  
       <div className='bg-container'>
       <div className='img-container'>
<img alt='img' className='form-img' src='https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/324116633_1298192504241393_1822529943618200334_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=jq551aWJaVEAX-djQiw&_nc_ht=scontent.ftun14-1.fna&oh=00_AfDcTAQV96YYI73NFI6wJupc_dDZhkGsXDaRhaKp28SsTQ&oe=63DFCEF1'></img></div>
      
 <div className='form-container'>
 <h4>STUDENT REGISTRATION FORM</h4>
      <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="First Name"
        />
        <input
          type="text"
          className="form-control"
          id="lname"
          placeholder="Last Name"
        />
      </div>
      <div className="form-group">
        <input
          type="address"
          className="form-control"
          id="adress"
          placeholder="Your Address"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Your Email"
        />
      </div>
           <div className="form-group">
        <input
          type="tel"
          className="form-control"
          id="tel"
          placeholder="Your Phone Number"
        />
      </div>
      <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                  </div>
                  <label id="label-hackerspaces-2df641a1-5a50-4621-b3d9-a0cff3798695" class="" placeholder="Enter your Lieu de la formation" for="hackerspaces-2df641a1-5a50-4621-b3d9-a0cff3798695"><span>Where Do you want to Study</span><span class="hs-form-required">*</span></label>
                  <select id="hackerspaces-2df641a1-5a50-4621-b3d9-a0cff3798695" required="" class="hs-input" name="hackerspaces"><option disabled="" value="">Select Your Hackerspace</option><option value="Tunis">Tunis Lac Hackerspace</option><option value="Sousse">Sousse Hackerspace</option><option value="Sfax">Sfax Hackerspace</option><option value="Manzah 5">El Menzah Hackerspace</option><option value="Nabeul">Nabeul Hackerspace</option><option value="Gafsa">Gafsa Hackerspace</option><option value="Online">Online-Tunisia</option><option value="Centre Ville">Tunis Downtown Hackerspace</option><option value="Beja">Beja Hackerpace</option><option value="Gabes">Gabes Hackerspace</option><option value="Online Saudi Arabia">Online Saudi Arabia</option><option value="Dokki Hackerspace">Dokki Hackerspace</option></select>
                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                    <MDBBtn className='ms-2' color='warning' size='lg'>Submit form</MDBBtn>
                  </div>
    </form>
    </div>
    </div>
    </div>
  );
}

export default App;

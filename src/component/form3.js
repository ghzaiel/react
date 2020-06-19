import React from 'react'
import './form.css';

export default function form3() {
    return (
       
             <form className="form">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Nom</label>
            <input type="text" class="form-control" id="1"  required/>
          </div>
          <div class="form-group col-md-6 ">
            <label for="inputPassword4">prenom</label>
            <input type="text" class="form-control" id="2"  required/>
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="3"/>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">mot de passe</label>
            <input type="password" class="form-control" id="4"/>
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" id="5" placeholder="1234 Main St"/>
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input type="text" class="form-control" id="6" placeholder="Apartment, studio, or floor"/>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6"/>
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="7"/>
          </div>
        <button type="submit" class="btn btn-primary" onclick="mapping()">inscription</button>
      </form>
    
    )
}

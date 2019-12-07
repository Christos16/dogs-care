import React from 'react';

const FormInput = () => {
  return (
    <form>
      <div class='form-row'>
        <div class='form-group col-md-6'>
          <label for='inputEmail4'>Name</label>
          <input
            type='text'
            class='form-control'
            id='inputEmail4'
            placeholder='Profile Handle'
            //  value={credentials.handle}
          />
        </div>
        <div class='form-group col-md-6'>
          <label for='inputPassword4'>Dog Breed</label>
          <input
            type='password'
            class='form-control'
            id='inputPassword4'
            placeholder=''
            //   value={credentials.pethabit}
          />
        </div>
        <div class='form-group col-md-6'>
          <label for='inputPassword4'>Instagram</label>
          <span>(Optional)</span>
          <input
            type='text'
            class='form-control'
            id='inputPassword4'
            placeholder='Instagram account'
          />
        </div>
        <div class='form-group col-md-6'>
          <label for='inputPassword4'>Facebook</label>
          <span>(Optional)</span>
          <input
            type='text'
            class='form-control'
            id='inputPassword4'
            placeholder='Password'
          />
        </div>
      </div>
      <div class='form-group'>
        <label for='inputAddress'>Address</label>
        <input
          type='text'
          class='form-control'
          id='inputAddress'
          placeholder=' eg. Leoforos Kifissias 120'
        />
      </div>
      <div class='form-row'>
        <div class='form-group col-md-6'>
          <label for='inputCity'>City</label>
          <input
            type='text'
            class='form-control'
            id='inputCity'
            info='eg. Athens, Greece'
          />
        </div>
        <div class='form-group col-md-4'>
          <label for='inputState'>Area</label>
          <select id='inputState' class='form-control'>
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class='form-group col-md-2'>
          <label for='inputZip'>Zip</label>
          <input type='text' class='form-control' id='inputZip' />
        </div>
      </div>
      <div class='form-group'>
        <div class='form-check'>
          <input class='form-check-input' type='checkbox' id='gridCheck' />
          <label class='form-check-label' for='gridCheck'>
            Cancel
          </label>
        </div>
      </div>
      <button type='submit' class='btn btn-primary'>
        Edit Profile
      </button>
    </form>
  );
};

export default FormInput;

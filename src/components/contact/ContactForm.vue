<template>
    <div class="form-container">
      <h4 class="form-heading">
        Let us know how we can work together:
      </h4>
      <form
        id="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        @submit.prevent="submitHandler"
        class="contact-form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don't fill this out if you're human:
            <input name="bot-field" />
          </label>
        </p>
        <div class="form-row">
          <label class="input-label" style="width: 100%" for="Name">Full Name*</label>
          <input class="form-input" type="text" id="Name" name="Name" required />
        </div>
        <div class="form-row">
          <label class="input-label" style="width: 100%" for="organization">
            Organization/Designation
          </label>
          <input class="form-input" type="text" id="organization" name="organization" />
        </div>
        <div class="form-row">
          <label class="input-label" style="width: 100%" for="email">Email Address*</label>
          <input class="form-input" type="email" id="email" name="email" required />
        </div>
        <div class="form-row">
          <label class="input-label" style="width: 100%" for="contactNumber">Contact Number</label>
          <input class="form-input" type="tel" id="contactNumber" name="contactNumber" />
        </div>
        <div class="form-row-col">
          <label
            class="input-label"
            style="margin-top: 12px; width: 100%; margin-bottom: 2px"
            for="support"
          >
            How can we support you?
          </label>
        </div>
        <div class="form-row-col">
          <div class="form-row">
            <div class="checkbox-container" style="margin-top: 12px; width: 50%; margin-bottom: 10px">
              <input
                class="support-checkbox"
                id="job"
                name="support"
                value="Type of support"
                type="checkbox"
                style="width: 24px; height: 24px"
              />
              <label class="support-checkbox-label" for="job">Job Profile</label>
            </div>
            
          </div>
          <div class="form-row">
            <div class="checkbox-container" style="width: 50%; margin-bottom: 12px">
              <input
                class="support-checkbox"
                id="recruitment"
                name="support"
                value="Recruitment and Selection"
                type="checkbox"
                style="width: 24px; height: 24px"
              />
              <label class="support-checkbox-label" for="recruitment">Recruitment & Selection</label>
            </div>
          </div>
          <div class="form-row">
            <div class="checkbox-container" style="width: 50%; margin-bottom: 12px">
              <input
                class="support-checkbox"
                id="competency"
                name="support"
                value="Competency Framework"
                type="checkbox"
                style="width: 24px; height: 24px"
              />
              <label class="support-checkbox-label" for="competency">Competency Framework</label>
            </div>
          </div>
          <div class="form-row">
            <div class="checkbox-container" style="width: 50%">
              <input
                class="support-checkbox"
                id="performance"
                name="support"
                value="Performance Management"
                type="checkbox"
                style="width: 24px; height: 24px"
              />
              <label class="support-checkbox-label" for="performance">Performance Management</label>
            </div>
          </div>
          
          <div class="form-row">
            <div class="checkbox-container" style="width: 50%">
              <input
                class="support-checkbox"
                id="training"
                name="support"
                value="Training and Coaching"
                type="checkbox"
                style="width: 24px; height: 24px"
              />
              <label class="support-checkbox-label" for="training">Training & Coaching</label>
            </div>
          </div>
          <div class="form-row">
            <div class="checkbox-container" style="width: 50%; margin-bottom: 10px">
              <input
                class="support-checkbox"
                id="job"
                name="support"
                value="Type of support"
                type="checkbox"
                style="width: 24px; height: 24px"
              />
              <label class="support-checkbox-label" for="job">Employee Engagement</label>
            </div>
          </div>
          
        </div>
        <div class="form-row">
          <label class="input-label" style="margin-top: 22px; width: 100%" for="message">
            Please provide basic details about the support. *
          </label>
          <textarea
            class="form-textarea"
            id="message"
            name="message"
            placeholder="Please tell us about your background, your goals and anything you might consider important"
            required
          ></textarea>
        </div>
        <div class="form-row">
          <label class="input-label" style="margin-top: 12px; width: 100%" for="callTime">
            What would be the best time to call for an exploratory talk? Please
            specify timezone.
          </label>
          <textarea
            class="form-textarea"
            style="height: 44px; margin-bottom: 12px"
            id="callTime"
            name="callTime"
          ></textarea>
        </div>
  
        <div class="checkbox-container">
          <input class="checkbox" id="myCheckbox" type="checkbox" v-model="termsAgreed" />
          <label
            class="checkbox-label"
            style="height: 40px; margin-bottom: 8px; padding-top: 4px"
            for="myCheckbox"
          >
            I agree to the
            <router-link to="/terms">
              <b>terms & conditions</b>
            </router-link>
            <br />
            and to be contacted regarding this message.
          </label>
        </div>
        <div class="button-row">
          <button :inverted="true" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>

  
  export default {
    name: 'ContactForm',
    data() {
      return {
        termsAgreed: false
      };
    },
    methods: {
      submitHandler(e) {
        e.preventDefault();
        const myForm = document.getElementById('contact-form');
        const formData = new FormData(myForm);
        
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => this.$router.push('/Success'))
          .catch((error) => alert(error));
      }
    }
  }
  </script>
  
  <style scoped>

.form-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.form-heading {
  margin-top: 2rem;
  margin-left: .3rem;
  width: 490px;
  color: var(--text-color);
  text-align: left;
}

.contact-form {
  margin: 0 auto;
  max-width: 490px;
  height: auto;
  border-radius: 12px;    
  background: var(--secondary-color);
  color: black;
  padding: 0 1rem 1rem 1rem;
}

.form-row {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-row-col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: .2rem;
  margin: .2rem;
}

.button-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: var(--standard-spacing) 0;
}

.input-label {
  font-weight: 500;
  font-size: 16px;
  color: black;
  display: block;
  margin-top: .7rem;
  text-align: left;
}

.form-input {
  margin: .2rem;
  padding: .3rem;
  width: 100%;
  border: 1px solid var(--text-color);
  border-radius: 5px;
  font-size: 15px;
  background: white;
  color: var(--text-color);

}

.form-textarea {
  margin: 8px 0;
  padding: 10px;
  width: 100%;
  height: 80px;
  border: 1px solid var(--text-color);
  border-radius: 5px;
  font-size: 15px;
  background: white;
  color: var(--text-color);
}

.support-checkbox-label {
  background: var(--secondary-color);
  color: var(--text-color);
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  max-width: 150px;
}

.checkbox-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.checkbox {
  display: none;
  background: var(--secondary-color);

}

.checkbox-label {
  font-size: 13px;
  position: relative;
  line-height: 1.2;
  padding-left: 3rem;
  text-align: left;
  cursor: pointer;
  background: var(--secondary-color);
  color: var(--text-color);
}

.checkbox-label:before,
.checkbox-label:after {
  content: "";
  position: absolute;
  border-radius: 3px;
  box-sizing: border-box;
}
 .checkbox-label:before {
  left: 0;
  top: 3px;
  width: 34px;
  height: 34px;
  border: 1px solid #555555;
  background: #fff;
} 

.checkbox-label:after {
  left: 3px;
  top: 6px;
  width: 28px;
  height: 28px;
  background: var(--primary-color);
  transition: all 0.2s ease;
  opacity: 0;
  transform: scale(0);
}

.support-checkbox {
  appearance: none; /* Removes default checkbox styling */
  width: 24px;
  height: 24px;
  border: 1px solid #555555;
  background: #fff;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
}

.support-checkbox:checked {
  background: var(--primary-color); /* Change background when checked */
}

.support-checkbox::before {
  content: "✔";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  color: white;
  display: none;
}

.support-checkbox:checked::before {
  display: block;
}


input[type="checkbox"]:checked + .checkbox-label:after {
  opacity: 1;
  transform: scale(1);
}

@media (max-width: 555px) {
  .form-container {
    margin-top: var(--standard-spacing);
    max-width: 100vw;
  }
  
  .form-heading {
    margin-top: 42px;
    width: 360px;
    font-size: 17px;
    padding-left: 12px;
  }
  
  .contact-form {
    width: 90%;
    margin: 0 4px;
    min-width: 320px;
  }
  
  .form-row-col {
    gap: var(--tiny-spacing);
    margin: var(--tiny-spacing) 0;
  }
  
  .form-input,
  .form-textarea {
    width: 98%;
  }
  
  .checkbox-label {
    padding-left: 42px;
    margin-bottom: 4px;
    width: 70%;
  }
  
  .button-row {
    padding-right: 50px;
    margin-top: 32px;
  }
}

@media (max-width: 768px) {
  .button-row{
    padding: 0;
  }
  .form-heading {
    margin-top: 22px;
    width: 320px;
    font-size: 16px;
    margin-left: -8px;
  }
}

  </style>
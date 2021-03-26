
import React from 'react';
import ReactDOM from 'react-dom';
import Recaptcha from 'react-recaptcha';


class GRecaptcha extends React.Component {

   constructor(props) {
      super(props);            
      this.verifyCallback = this.verifyCallback.bind(this);
      this.expiredCallback = this.expiredCallback.bind(this);
      this.resetRecaptcha = this.resetRecaptcha.bind(this);
    }


    // specifying your onload callback function
    callback(){
      //console.log(' sss Done!!!!');
    }

    verifyCallback(response){
      //console.log(response);
      //console.log($('.g-recaptcha-response').val());
      //console.log(recaptchaInstance);
  
      this.props.showSendButton()
      
    }

    expiredCallback(){
      console.log(`Recaptcha expired`);
    }


    // handle reset
    resetRecaptcha(){
      recaptchaInstance.reset();
    }

  render() {
    

    // define a variable to store the recaptcha instance
    let recaptchaInstance;
    // site key
    const sitekey = '6LfPaAoUAAAAAOmpl6ZwPIk2Zs-30TErK48dPhcS';
    
    return (
      <div className="col col-lg-12 ">        
      <center>
        <Recaptcha
          ref={e => recaptchaInstance = e}
          sitekey={sitekey}          
          render="explicit"
          verifyCallback={this.verifyCallback}
          onloadCallback={this.callback}
          expiredCallback={this.expiredCallback}
        />    
        </center>    
      </div>
    );
  }
}

export default GRecaptcha;
window.onload = function(){
        		var stripe = Stripe('pk_test_Xt1nTsq4Bdmskd83Ya5njdvz007IaCQgPC');
                console.log('2');
           
 // ------- Design elements ------- 
// see design guide: https://stripe.com/docs/stripe-js/appearance-api


const appearance = {
  labels: 'floating',
  theme: 'flat',
  variables: {
    fontFamily: ' "Gotham", sans-serif',
    fontLineHeight: '1.0',
    borderRadius: '5px',
    colorBackground: '#F6F8FA',
    colorPrimaryText: '#262626'
  },
  rules: {
    '.Block': {
      backgroundColor: '#a7c6c150',
      boxShadow: 'none',
      padding: '10px'
    },
    '.Input': {
      padding: '10px',
      backgroundColor: '#a7c6c150'
    },
    '.Input:disabled, .Input--invalid:disabled': {
      color: 'lightgray'
    },
    '.Input--selected, .Input--selected:focus, .Input--selected:hover': {
      border: 'none',
      boxShadow: '0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(0, 0, 0, 0.04)'
    },
    '.Tab': {
      padding: '10px 12px 8px 12px',
      border: 'none',
      backgroundColor: '#a7c6c150'
    },
    '.Tab:hover': {
      boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
    },
    '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
      border: 'none',
      backgroundColor: '#a7c6c1',
      boxShadow: '0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(0, 0, 0, 0.04)'
    },
    '.Label': {
      fontWeight: '500'
    }
  }
};

        
  // Pass the appearance object to the Elements instance
      
          
 var elements = stripe.elements({
 clientSecret: 'pi_3KvGkfKYRnOmsRcr14sCKDGb_secret_3t0G0i1ENsSqzMgZGFC8Zxs1I', appearance
 });
                   
 var paymentElement = elements.create("payment");
 console.log(paymentElement);
 paymentElement.mount("#payment-element");
        	    }               
                    
// ------- UI helpers -------

function showMessage(messageText) {
  const messageContainer = document.querySelector("#payment-message");

  messageContainer.classList.remove("hidden");
  messageContainer.textContent = messageText;

  setTimeout(function () {
    messageContainer.classList.add("hidden");
    messageText.textContent = "";
  }, 4000);
}

// Show a spinner on payment submission
function setLoading(isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("#submit").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("#submit").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
}

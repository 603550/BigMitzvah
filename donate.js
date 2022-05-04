window.onload = function(){
        		var stripe = Stripe('pk_test_Xt1nTsq4Bdmskd83Ya5njdvz007IaCQgPC');
                console.log('2');
           
 // ------- Design elements ------- 
// see design guide: https://stripe.com/docs/stripe-js/appearance-api

const appearance = {
    labels: 'floating',
    // If you are planning to extensively customize rules, use the "none"
    // theme. This theme provides a minimal number of rules by default to avoid
    // interfering with your custom rule definitions.
    theme: 'none',

    rules: {
      '.Tab': {
        border: '1px solid ##000',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02)',
      },

      '.Tab:hover': {
        color: 'var(--colorText)',
      },

      '.Tab--selected': {
        borderColor: '#A7C6C1',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02), 0 0 0 2px var(--colorPrimary)',
      },

      '.Input--invalid': {
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 2px var(--colorDanger)',
      },

      // See all supported class names and selector syntax at https://stripe.com/docs/stripe-js/appearance-api#detail-rules
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

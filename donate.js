window.onload = function(){
        		var stripe = Stripe('pk_test_Xt1nTsq4Bdmskd83Ya5njdvz007IaCQgPC');
                console.log('2');
           
        	
        

const appearance = {
  labels: 'floating',
  theme: 'flat',
  variables: {
    fontFamily: ' "Gill Sans", sans-serif',
    fontLineHeight: '1.5',
    borderRadius: '10px',
    colorBackground: '#F6F8FA',
    colorPrimaryText: '#262626'
  },
  rules: {
    '.Block': {
      backgroundColor: 'var(--colorBackground)',
      boxShadow: 'none',
      padding: '12px'
    },
    '.Input': {
      padding: '12px'
    },
    '.Input:disabled, .Input--invalid:disabled': {
      color: 'lightgray'
    },
    '.Tab': {
      padding: '10px 12px 8px 12px',
      border: 'none'
    },
    '.Tab:hover': {
      border: 'none',
      boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
    },
    '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
      border: 'none',
      backgroundColor: '#fff',
      boxShadow: '0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
    },
    '.Label': {
      fontWeight: '500'
    }
  }
};

        
        
        const appearance = {
    // If you are planning to extensively customize rules, use the "none"
    // theme. This theme provides a minimal number of rules by default to avoid
    // interfering with your custom rule definitions.
     labels: 'floating',
     theme: 'none',

    rules: {
      '.Tab': {
        border: '1px solid #E0E6EB',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02)',
      },

      '.Tab:hover': {
        color: 'var(--colorText)',
      },

      '.Tab--selected': {
        borderColor: '#E0E6EB',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02), 0 0 0 2px var(--colorPrimary)',
      },

      '.Input--invalid': {
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 2px var(--colorDanger)',
      },

      // See all supported class names and selector syntax at https://stripe.com/docs/stripe-js/appearance-api#variables
    }
  };
          
                var elements = stripe.elements({
                clientSecret: 'pi_3KvGkfKYRnOmsRcr14sCKDGb_secret_3t0G0i1ENsSqzMgZGFC8Zxs1I', appearance
                });
                   
                var paymentElement = elements.create("payment");
                console.log(paymentElement);
                paymentElement.mount("#payment-element");
        	    }

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

          
                var elements = stripe.elements({
                clientSecret: 'pi_3KvGkfKYRnOmsRcr14sCKDGb_secret_3t0G0i1ENsSqzMgZGFC8Zxs1I', appearance
                });
                   
                var paymentElement = elements.create("payment");
                console.log(paymentElement);
                paymentElement.mount("#payment-element");
        	    }

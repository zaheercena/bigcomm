<script
  src="https://code.jquery.com/jquery-3.6.0.js"
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  crossorigin="anonymous"></script>
<script>
//alert("zaheer");
    jQuery('<div class="qp8911_modal" id="qp8911_bootstrapModal" role="dialog"><div class="qp8911_modal-dialog qp8911_modal-dialog-centered" role="document" ><div class="qp8911_modal-content col-md-8 qp-custom-mage-design"><div class="modal-header"></div><div class="qp8911_modal-body"><div class="form-popup" id="myForm" style="border: 1px solid gainsboro;top: 0px;background: white;border-radius: 4px; display: none"><form action="" method="post" class="form-container" id="myformtobesubmit"><input type="hidden" name="order" value="lkld"></form></div><iframe id="qisttpayifram" width="100%" height="100%"  src="" frameborder="0" allowfullscreen style="background: #FFFFFF;" ></iframe></div></div></div></div>').insertAfter("#form-action-addToCart");
     function htmlToElement(html) {
      var template = document.createElement('template');
      html = html.trim(); // Never return a text node of whitespace as the result
      template.innerHTML = html;
      return template.content.firstChild;
  }
  for (const ele of document.querySelectorAll(".btn--add-to-cart,button.product__add-to-cart-button")){
  
     
          ele.style.margin = "10px"
                  let qisstpay_one_click_button_product = `<button type="button" id="1c_product_button"  class="oneclick-button ${ele.className.replace('add-to-cart','').replace('single_add_to_cart_button','')} one-click-button" href="javascript:void(0);" onclick="triggerIFrame()">1-Click Checkout</button>`;
                  let qisstpay_button_product = htmlToElement(qisstpay_one_click_button_product);
                  ele.parentNode.insertBefore(qisstpay_button_product, ele.nextSibling);
                  
            
  }
  //custom selector million standards
  var add_to_cart_terms = ['addtocart','addtobag','addtobasket']
  for (const elem of document.querySelectorAll("button,input,a")){
      if(elem.tagName.toLocaleLowerCase() == "input"){
             if(add_to_cart_terms.includes(elem.value.toLowerCase().replace(/\s/g, ''))){
         elem.style.margin = "10px"
                    let qisstpay_one_click_button_product = `<input id="1c_product_button" type="button"  value="1-Click Checkout" class="oneclick-button ${elem.className.replace('add-to-cart','').replace('single_add_to_cart_button','')} one-click-button" href="javascript:void(0);" onclick="triggerIFrame()" />`;
                    let qisstpay_button_product = htmlToElement(qisstpay_one_click_button_product);
                    elem.parentNode.insertBefore(qisstpay_button_product, elem.nextSibling);
            }
        }
        else if(elem.tagName.toLocaleLowerCase() == "button") {
             if(add_to_cart_terms.includes(elem.textContent.toLowerCase().replace(/\s/g, ''))){
          elem.style.margin = "10px"
                  let qisstpay_one_click_button_product = `<button type="button" id="1c_product_button"  class="oneclick-button ${elem.className.replace('add-to-cart','').replace('single_add_to_cart_button','')} one-click-button" href="javascript:void(0);" onclick="triggerIFrame()">1-Click Checkout</button>`;
                  let qisstpay_button_product = htmlToElement(qisstpay_one_click_button_product);
                  elem.parentNode.insertBefore(qisstpay_button_product, elem.nextSibling);
                  
            }
        }
        else if (elem.tagName.toLocaleLowerCase() == "a") {
             if(add_to_cart_terms.includes(elem.textContent.toLowerCase().replace(/\s/g, ''))){
          elem.style.margin = "10px"
                  let qisstpay_one_click_button_product = `<a id="1c_product_button"  class="oneclick-button ${elem.className.replace('add-to-cart','').replace('single_add_to_cart_button','')} one-click-button" href="javascript:void(0);" onclick="triggerIFrame()">1-Click Checkout</a>`;
                  let qisstpay_button_product = htmlToElement(qisstpay_one_click_button_product);
                  elem.parentNode.insertBefore(qisstpay_button_product, elem.nextSibling);
            }
        }
    }
    
    function triggerIFrame() {
      //alert("I am an alert box!");
      var productId = jQuery(".productView-info-value").text();
      var productImage = jQuery("#productImage").text();
      var productQuantity = jQuery(".add-to-cart-wrapper .form-input--incrementTotal").val();
      var productPrice = jQuery(".productView-price .price--withoutTax").text();
      var productTitle = jQuery(".productView-title").text();
      var productShipping = jQuery("#shippingmethodshtml").text();
      var baseurl = jQuery("#baseurl").text();
       console.log(productId);
      // console.log(productImage);
      // console.log(productQuantity);
       console.log(productPrice);
       console.log(productTitle);


      var i = 0;
      var visual = jQuery(".swatch-attribute.visual").length;
      var j = 0;
      var max = jQuery(".swatch-attribute").length;
      var keys = [];
      var indexing = [];
      while (i < max) {
          keys.push(jQuery(jQuery(".swatch-opt .swatch-attribute:nth-child("+i+")")).find(":selected").text());
          indexing.push(jQuery(".swatch-opt .swatch-attribute:nth-child("+i+") .swatch-attribute-label").text());
          // if(j<visual && jQuery(".swatch-attribute-options").find(".swatch-option.selected").attr("aria-label")){
          //   keys.push(jQuery(".swatch-attribute-options").find(".swatch-option.selected").attr("aria-label"));
          //     j++;
          // }
          i++;
      }
      while (j < visual) {
        if(j<visual && jQuery(".swatch-attribute-options").find(".swatch-option.selected").attr("aria-label")){
          keys.push(jQuery(".swatch-attribute-options").find(".swatch-option.selected").attr("aria-label"));
          indexing.push(jQuery(".swatch-opt .swatch-attribute:nth-child("+i+") .swatch-attribute-label").text());
            j++;
        }
      }
      var indexed = indexing.filter(function(v){return v!==''});
      var valued = keys.filter(function(v){return v!==''});

      var k = 0;
      var resultant = {};
      while (k < max) {
          resultant[indexed[k]] = valued[k];
          k++;
      }
      //console.log(resultant);
      var attris = '';
      for (var key in resultant) {
          var value = resultant[key];
          //console.log(key, value);
          attris = attris+'"'+key+'":"'+value+'",';
      }
      // console.log(indexing);
      //console.log(attris);

      var streamhit = 'products=[{"id":"'+productId+'","src":"'+productImage+'","quantity":"'+productQuantity+'","attributes":[{'+attris+'}],"price":'+productPrice+',"title":"'+productTitle+'"}]&price='+productPrice+'&currency=PKR&url=https://sandbox.wordpress.qisstpay.com/wp-json/qisstpay/teez/&shipping_total=0&tax=0&shipping_methods='+productShipping;
      streamhit = streamhit.replace(',}', '}');

      var streatfinal = btoa(unescape(encodeURIComponent(streamhit)));
      var baseuri = btoa(unescape(encodeURIComponent(baseurl)));
      var bata = 'https://sandbox.tezcheckout.qisstpay.com/?identity-token='+'aHR0cDovLzU0LjI1NS4yMy4xNy8='+'\&'+'queryUrl=';

      // var sourceString = bata+'cHJvZHVjdHM9W3siaWQiOiIxNTk0Iiwic3JjIjoiaHR0cHM6Ly9zYW5kYm94LndvcmRwcmVzcy5xaXNzdHBheS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMTEvNjY2NjY2NjY2NjY2LmpwZWciLCJxdWFudGl0eSI6IjEiLCJhdHRyaWJ1dGVzIjpbeyJhdHRyaWJ1dGVfcGFfdGVzdC1hdHQiOiJibHVlIiwidmFyaWF0aW9uX2lkIjoiMzkzNSJ9XSwicHJpY2UiOjE2MDAsInRpdGxlIjoiU2hpcnQifV0mcHJpY2U9MTYwMCZjdXJyZW5jeT1QS1ImdXJsPWh0dHBzOi8vc2FuZGJveC53b3JkcHJlc3MucWlzc3RwYXkuY29tL3dwLWpzb24vcWlzc3RwYXkvdGVlei8mc2hpcHBpbmdfdG90YWw9MjAwJnRheD0zNiZzaGlwcGluZ19tZXRob2RzPVt7InRpdGxlIjoiRmxhdCByYXRlIiwiY29zdCI6IjIwMCJ9LHsidGl0bGUiOiJMb2NhbCBwaWNrdXAiLCJjb3N0IjoiMzUwIn0seyJ0aXRsZSI6IkZyZWUgc2hpcHBpbmciLCJjb3N0IjowfV0=';

      //console.log(datastreaming);
      var datastreaming = bata+streatfinal;

      let unescapedurl=unescape(datastreaming);
      // console.log(streamhit);
      // console.log(streatfinal);
      // console.log(unescapedurl);
      //var newStream = datastreaming.replace(/&amp;/g, '&');

      jQuery("#qisttpayifram").attr('src', unescapedurl);
      // jQuery("#qisttpayifram").attr('src', function(index, text) {
      //   return text.replace('&amp;', '&');
      // });
      window.addEventListener('message', function(e) {
                      // Get the sent data
                      const data = e.data;

                      try {
                          if(data.qp_flag_teez == true){
                              window.location.href= data.link;
                              ///form Submit
                          } else if(data.qp_flag_teez == false) {
                              jQuery('.qp8911_modal').hide();
                              jQuery('body').css('position', 'initial');
                              jQuery('body').css('width', 'initial');
                              jQuery('.qisttpayifram').attr('src', null);
                          }
                      } catch(e){
                          return;
                      }
                  });
      jQuery('#qp8911_bootstrapModal').show();
      jQuery('#closed').click(function(){
          //location.reload();
          jQuery('#qp8911_bootstrapModal').hide();
      })
    }
    
    
</script>

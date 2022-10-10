 // CREATE/POST posts by user
    $('#create-form').on('submit', function(event) {
        event.preventDefault();
  
    
        var name=$('#name');
        var type=$('#type');
        var price=$('#price');
        var address=$('#address');
        var description=$('#description');
  
  
        $.ajax({
            url: '/api/tempproducts',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: name.val(),type:type.val(),price:price.val(),address:address.val(),description:description.val()}),
            success: function(response) {
                console.log(response);
                name.val('');
                type.val('');
                price.val('');
                address.val('');
                description.val('');
             
             
            }
        });
    });
  



// PRODUCT PREVIEW 
    $(function() {
         $('#productsview').on('click','#product_previewbtn',  function(e) {
             e.preventDefault();

              var id= $(this).val();


              $.ajax({
                url: '/api/productpreview/?id='+id,
         
                contentType: 'application/json',
                success: function(product) {
                    
                  
                    var prod_preview_container=$('#prod_preview_container');
                    prod_preview_container.html('');
              prod_preview_container.append('\
                 <div id="id01" class="modal">\
                     <div class="modal-content animate">\
                         <p class="close" title="Close Modal" id="oneviewclosed">×</p>\
                         <h1 hidden></h1>\
                         <img class="addpreview_img" src="../views/product1.jpg" alt="product" style="margin-left:100px">\
                         <h2>NAME :'+product.name.toUpperCase()+'</h2>\
                         <h1> TYPE :'+product.type.toUpperCase()+' </h1>\
                         <h1> PRICE : '+product.price+'</h1>\
                         <h1> DESCRIPTION : '+product.description.toUpperCase()+'</h1>\
                     </div>\
                 </div>\
            ');
  
             document.getElementById('id01').style.display='block';
                }
            })
         });
  
    });
  


//COLOSE ON VIEW 
    $(function() {
        $('#productsview').on('click','#oneviewclosed',  function() {
            document.getElementById('id01').style.display='none';
    
        });
  
    });


// call 



  

// GET ALL ADDS IN A PAGE (FILTER)

$(function() {
    $('.findtype').on('click', function() {

        

        $.ajax({
            url: '/api/products',
            contentType: 'application/json',
            success: function(products) {

                var productsview = $('#productsview');

                productsview.html('');

                products.forEach(function(products) {
                    var phoneno ="94"+products.phoneno;
                    var whatsappurl= "https://wa.me/"+phoneno;
                    productsview.append('\
                        <div class="card">\
                                <img class="medium" src="' + products.images + '" alt="product">\
                                <div class="card-body">\
                                    <h1 hidden>' + products._id + '</h1>\
                                    <h2 class="hh">' + products.name + '</h2>\
                                    <h1>' + products.type + '</h1>\
                                    <h1>' + products.price + '</h1>\
                                    <h1>' + products.phoneno + '</h1>\
                                    <div class="rating">\
                                        <span><i class="fa fa-star"></i></span>\
                                        <span><i class="fa fa-star"></i></span>\
                                        <span><i class="fa fa-star"></i></span>\
                                        <span> <i class="fa fa-star"></i></span>\
                                        <span><i class="fa fa-star"></i></span>\
                                    </div>\
                                    <div class="price">120$</div>\
                                    <button id="product_previewbtn"  style="width:auto;" value=' + products._id + '>view</button>\
                                    <button id="product_buy"  style="width:auto;" value=' + products._id + '><a href="'+whatsappurl+'" target="blank"></a>call</button>\
                                <div id="prod_preview_container"></div>\
                                </div>\
                        </div>\
                    ');
                });
            }
        }); 
    });
  });



// FILTER BY TYPES(WE USED INNER HTML IN NAV BAR FOR FILTER VALUE)

$(function() {
    $('.findbytype').on('click', function() {
        
       var findbytpe= $(this).html();
    $.ajax({
        url: '/api/filtertype/?type='+findbytpe,
 
        contentType: 'application/json',
        success: function(products) {
            var productsview = $('#productsview');

            productsview.html('');

            products.forEach(function(products) {
                productsview.append('\
                <div class="card">\
                <a href="product.html">\
                    <img class="medium" src="./images/product-1.jpg" alt="product">\
                </a>\
                <div class="card-body">\
                    <a href="product.html">\
                    <h1 hidden>' + products._id + '</h1>\
                        <h2>' + products.name + '</h2>\
                        <h1>' + products.type + '</h1>\
                    <h1>' + products.price + '</h1>\
                    </a>\
                    <div class="rating">\
                        <span><i class="fa fa-star"></i></span>\
                        <span><i class="fa fa-star"></i></span>\
                        <span><i class="fa fa-star"></i></span>\
                        <span> <i class="fa fa-star"></i></span>\
                        <span><i class="fa fa-star"></i></span>\
                    </div>\
                    <div class="price">120$</div>\
                    <button id="product_previewbtn"  style="width:auto;" value=' + products._id + '>view</button>\
                    <div id="prod_preview_container"></div>\
                </div>\
                ');
            });
        }
    });
});
});

function searchtxt() {

    $.ajax({
        url: '/api/products',
        contentType: 'application/json',
        success: function(products) {
 
    var data = "";
  var cvalue = $("#searchtxt").val().toLowerCase();
  console.log(cvalue)
  
  var productsview = $('#productsview');

  productsview.html('');
    for (var i = 0; i < products.length; i++) {
       var name = products[i]["name"].replace(/\s+/g, '');
       var type = products[i]["type"].replace(/\s+/g, '');
       var address = products[i]["address"].replace(/\s+/g, '');
       if (name.toLowerCase().search(cvalue)!==-1||type.toLowerCase().search(cvalue)!==-1||address.search(cvalue)!==-1) {
          data += '<div class="card">\
          <img style="width:200px; height:100px"class="medium" src="' +products[i]["images"] +  '" alt="product">\
          <div class="card-body">\
              <h1 hidden>' +products[i]["_id"] + '</h1>\
              <h2 class="hh">' +products[i]["name"] +  '</h2>\
              <h1>' +products[i]["type"] + '</h1>\
              <h1>' +products[i]["price"] + '</h1>\
              <div class="rating">\
                  <span><i class="fa fa-star"></i></span>\
                  <span><i class="fa fa-star"></i></span>\
                  <span><i class="fa fa-star"></i></span>\
                  <span> <i class="fa fa-star"></i></span>\
                  <span><i class="fa fa-star"></i></span>\
              </div>\
              <div class="price">120$</div>\
              <button id="product_previewbtn"  style="width:auto;" value=' +products[i]["_id"] +  '>view</button>\
              <button id="product_buy"  style="width:auto;" value=' +products[i]["_id"] + '>buy</button>\
          <div id="prod_preview_container"></div>\
  </div> '
       }
    };
 
  
    document.getElementById("productsview").innerHTML = data;
   }
    });
 
 };

 //clear txtbox  after search
function serchclr(){
    $("#searchtxt").val("");
    
  }



// // FILTER BY NAME IN TYPE (WE USED INNER HTML IN NAV BAR FOR FILTER VALUE)

// $(function() {
//     $('.findpet').on('click', function() {
        
//        var findbytpe= $('.findpet').html();

//        var name=$('').html();
//     $.ajax({
//         url: '/products/filterbyname/?type='+findbytpe+'?name='+name,
 
//         contentType: 'application/json',
//         success: function(products) {
//             var productsview = $('#productsview');

//             productsview.html('');

//             products.forEach(function(products) {
//                 productsview.append('\
//                 <div class="card">\
//                 <a href="product.html">\
//                     <img class="medium" src="./images/product-1.jpg" alt="product">\
//                 </a>\
//                 <div class="card-body">\
//                     <a href="product.html">\
//                     <h1 hidden>' + products._id + '</h1>\
//                         <h2>' + products.name + '</h2>\
//                         <h1>' + products.type + '</h1>\
//                     <h1>' + products.price + '</h1>\
//                     </a>\
//                     <div class="rating">\
//                         <span><i class="fa fa-star"></i></span>\
//                         <span><i class="fa fa-star"></i></span>\
//                         <span><i class="fa fa-star"></i></span>\
//                         <span> <i class="fa fa-star"></i></span>\
//                         <span><i class="fa fa-star"></i></span>\
//                     </div>\
//                     <div class="price">120$</div>\
//                     <button id="product_previewbtn"  style="width:auto;" value=' + products._id + '>view</button>\
//                     <div id="prod_preview_container"></div>\
//                 </div>\
//                 ');
//             });
//         }
//     });
// });
// });

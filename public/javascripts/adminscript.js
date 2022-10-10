




// FOR FIND ADMIN ALL TEMP ADDS IN TABLE VIEW
  $(function() {
    // GET/READ
    $('#findall').on('click', function() {

        $.ajax({
            url: '/api/tempproducts',
     
            contentType: 'application/json',
            success: function(products) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                products.forEach(function(products) {
                    tbodyEl.append('\
                        <tr>\
                            <td> <input type="text" class="id1" value="' + products._id + '" hidden></td>\
                            <td><input type="text" class="name1" value="' + products.name + '"></td>\
                            <td><input type="text" class="type1" value="' + products.type + '"></td>\
                            <td><input type="text" class="price1" value="' + products.price + '"></td>\
                            <td><input type="text" class="address1" value="' + products.address + '"></td>\
                            <td><input type="text" class="description1" value="' + products.description + '"></td>\
                            <td ><img src="'+products.images+'" style="width:100px;" class="addphotos" ></td>\
                            <td><input type="text" class="productownerid" value="' + products.userid + '"></td>\
                            <td><input type="text" class="phoneno" value="' + products.phoneno + '"></td>\
                            <td>\
                                <button class="update-button">UPDATE/PUT</button>\
                                <button class="delete-button">DELETE</button>\
                                <button class="add1-button">ADD</button>\
                                <button class="view-button">VIEW</button>\
                            </td>\
                        </tr>\
                    ');
                });
            }
        });
    });
  });




// FOR ADMIN UPDATE TEMP ADDS IN TEMP COLLECTION IN TABLE VIEW
  $('table').on('click', '.update-button', function() {
    var rowEl = $(this).closest('tr');
    var id = rowEl.find('.id1').val();
    var name1 = rowEl.find('.name1').val();
    var type1=rowEl.find('.type1').val();
    var address1=rowEl.find('.address1').val();
    var description1=rowEl.find('.description1').val();
    var price1=rowEl.find('.price1').val();

    $.ajax({
        url: '/api/tempproducts/?id='+ id,
              method: 'PUT',
              contentType: 'application/json',
              data: JSON.stringify({ name: name1,type:type1,address:address1,description:description1,price:price1}),
              success: function(response) {
                  console.log(response);
                
              }
          });
});





    // DELETE ADMIN TEMP ADDS IN TEMP COLLECTION IN TABLE VIEW(DELETE BUTTON IN TABLE)
    $('table').on('click', '.delete-button', function() {
        var rowEl = $(this).closest('tr');
    
        var id = rowEl.find('.id1').val();
        $.ajax({
            url: '/api/tempproducts/?id='+ id,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#findall').click();
            }
        });
    });










//ADD PERMANACE COLLECTION AND DELETE TEMP COLLECTION INTABLE(ADD BUTTON IN TABLE)

$('table').on('click', '.add1-button', function() {
    var rowEl = $(this).closest('tr');
    var id = rowEl.find('.id1').val();
    var name1 = rowEl.find('.name1').val();
    var type1=rowEl.find('.type1').val();
    var address1=rowEl.find('.address1').val();
    var description1=rowEl.find('.description1').val();
    var price1=rowEl.find('.price1').val();
    var addphotos=rowEl.find('.addphotos').attr('src');
    var productownerid=rowEl.find('.productownerid').val();
    var phoneno = rowEl.find('.phoneno').val();


  

    $.ajax({
      
        url: '/api/products/?id='+ id,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ name: name1,type:type1,address:address1,description:description1,price:price1,images:addphotos,productownerid:productownerid,phoneno:phoneno}),
        success: function(response) {
            console.log(response);
          
            $('#findall').click();
         
        }
       
         
    });

    
    $('#findall').click();
  
});








//VIEW ADMIN SINLE ADD IN FORM WHEN ADMIN CLICK BUTTON 

$('table').on('click', '.view-button', function() {
    var rowEl = $(this).closest('tr');
    var id = rowEl.find('.id1').val();
    var name1 = rowEl.find('.name1').val();
    var type1=rowEl.find('.type1').val();
    var address1=rowEl.find('.address1').val();
    var description1=rowEl.find('.description1').val();
    var price1=rowEl.find('.price1').val();
    var addphotos=rowEl.find('.addphotos').attr('src');
    var phoneno=rowEl.find('.phoneno').val();
    var userid=rowEl.find('.productownerid').val();
    // document.getElementById("ad-edittype").value = name1 
        
$('#ad-editid').val(id);
$('#ad-edittype').val(type1);
$('#ad-editname').val(name1);
$('#ad-editaddress').val(address1);
$('#ad-editdescription').val(description1);
$('#ad-edittypeprice').val(price1);
$('#adminviewphotos').attr('src',addphotos)
$('#ad-ownerpostid').val(userid);
$('#ad-editphone').val(phoneno);


    $('#findall').click();
  
});


// ADMIN DELETE SINGLE ADD VIA FORM

$('#admin-edit-form').on('click', '#tem-form-delete', function() {

    var id = $('#ad-editid').val();
    $.ajax({
        url: '/api/tempproducts/?id='+ id,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#ad-editid').val("");
$('#ad-edittype').val('');
$('#ad-editname').val('');
$('#ad-editaddress').val('');
$('#ad-editdescription').val('');
$('#ad-edittypeprice').val('');
$('#ad-ownerpostid').val('');
   $('#adminviewphotos').attr('src',"data:image/png;base64,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")
            $('#findall').click();
        }
    });



});


// ADMIN ADD DATA IN PERMANACE COLLLECTION AND DELETE IN TEM COLLECTION USING FORM

$('#admin-edit-form').on('submit', function(event) {
    event.preventDefault();

    var id = $('#ad-editid').val();
    var name1 =$('#ad-editname');
    var type1=$('#ad-edittype');
    var address1=$('#ad-editaddress');
    var description1=$('#ad-editdescription');
    var price1=$('#ad-edittypeprice');
    var adminviewphotos=$('#adminviewphotos').attr('src');
    var phoneno=$('#ad-editphone');
    var userid=$('#ad-ownerpostid');

    console.log(adminviewphotos)
    $.ajax({
      
        url: '/api/products/?id='+ id,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ name: name1.val(),type:type1.val(),address:address1.val(),description:description1.val(),price:price1.val(),images:adminviewphotos,productownerid:userid.val(),phoneno:phoneno.val()}),
        success: function(response) {
            console.log(response);
            $('#ad-editid').val('');
            $('#ad-editname').val('');
           $('#ad-edittype').val('');
           $('#ad-editdescription').val('');
           $('#ad-editaddress').val('');
           $('#ad-edittypeprice').val('');
           $('#ad-ownerpostid').val('');
           $('#ad-editphone').val('');
           $('#adminviewphotos').attr('src',"data:image/png;base64,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")
      
            $('#findall').click();
         
        }
       
         
    }); 
  
});




// ADMIN FIND NEXT IN FORM

$(function() {
    // GET/READ
    $('#admin-edit-form').on('click', '#tem-form-next', function() {
        $.ajax({
            url: '/api/adminfindoneproduct',
     
            contentType: 'application/json',
            success: function(product) {
                


                    
$('#ad-editid').val(product._id);
$('#ad-edittype').val(product.type);
$('#ad-editname').val(product.name);
$('#ad-editaddress').val(product.address);
$('#ad-editdescription').val(product.description);
$('#ad-edittypeprice').val(product.price);
$('#adminviewphotos').attr('src',product.images);
$('#ad-editphone').val(product.phoneno);
$('#ad-ownerpostid').val(product.userid);

$('#findall').click();
               
            }
        });
    });
  });
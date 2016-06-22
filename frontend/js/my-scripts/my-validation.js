  'use strict';

module.exports = function() {

var input;
var submit;

document.getElementById('myform').addEventListener('click', function(e){
  targetClick(e);
}, false);


function targetClick(e) {

  if(e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') {

    if(e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
      console.log(e.target.id);
      e.target.value = e.target.id;
      e.target.dataset.checked = 'true';
    }
    input = e.target;
  } else if(e.target.tagName === 'BUTTON') {
    e.preventDefault();
    submit = e.target;
    checkedInputs();
    console.log('try to form submit');
  }

  input.addEventListener('blur', function() {
    //console.log(input.id);
    validateFromId(input);
  }, false);

  function validateFromId(el) {

    if(el.id === 'userTel') {
    validateTel(el);
  } else if(el.id === 'userEmail') {
    validateEmail(el);
  } else if(el.id === 'person') {
    validatePerson(el);
      } else {
    validateFieldText(el);
      }
  }

  function validateFieldText(field) {

    var regExp = /^[A-ZА-ЯЁ\s]+$/i;

    if(field.value.length < 3 || field.value.search(regExp)){
      field.style = 'background-color: rgba(255, 0, 0, 0.3)';
      field.dataset.checked = 'false';
    } else {
      field.style = 'background-color: rgba(0, 255, 0, 0.3)';
      field.dataset.checked = 'true';
    }
  }

  function validatePerson(field) {

    var regExp = /^[0-9]+$/;

    if(!field.value || field.value.search(regExp)) {
       field.style = 'background-color: rgba(255, 0, 0, 0.3)';
       field.dataset.checked = 'false';
    } else {
       field.style = 'background-color: rgba(0, 255, 0, 0.3)';
       field.dataset.checked = 'true';
    }
  }

  function validateTel(field) {

    var regExp = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

    if(!field.value || field.value.search(regExp)) {
       field.style = 'background-color: rgba(255, 0, 0, 0.3)';
       field.dataset.checked = 'false';
    } else {
       field.style = 'background-color: rgba(0, 255, 0, 0.3)';
       field.dataset.checked = 'true';
    }
  }

  function validateEmail(field) {

    var regExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    if(!field.value || field.value.search(regExp)) {
       field.style = 'background-color: rgba(255, 0, 0, 0.3)';
       field.dataset.checked = 'false';
    } else {
       field.style = 'background-color: rgba(0, 255, 0, 0.3)';
       field.dataset.checked = 'true';
    }
  }

}

function checkedInputs() {

  var checked = [];
  var inputs = document.querySelectorAll('#myform input');

  for(var i = 0;i < inputs.length;i++) {
   checked.push(inputs[i].dataset.checked);
  }

  if(checked.every(compare)) {
    sendPostRequest();
    //return alert('form submit');
  } else {
    return alert('form dont submit');
  }

    function compare(el) {
           return el === 'true';
       }
  }

  function sendPostRequest(e) {
    var body = $('#myform').serialize();
    console.log(body);

  $.ajax({
    url: '/order',
    dataType: 'text',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded',
    data: body,
    success: function(data, textStatus, jQxhr) {
      var head = document.createElement('h3');
      head.innerHTML = data;
      $('#myform').html(head);
    },
    error: function(jQxr, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });
  }

};

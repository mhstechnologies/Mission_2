function getCounter () {
  let counter = localStorage.getItem('on_page_load');
 
  if (null === counter) {
    counter = 0;
  }
 
  counter++;
  localStorage.setItem("on_page_load", counter);
  document.getElementById('counter').innerHTML = counter;
}
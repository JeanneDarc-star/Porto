/* Page navigation (Home / Projects / About / Links) and ROM/Kernel tabs */
(function(){
var views=['home','projects','about','links'];
function show(v){
  if(views.indexOf(v)<0)v='home';
  views.forEach(function(id){document.getElementById(id).classList.toggle('on',id===v)});
  document.querySelectorAll('nav button').forEach(function(b){b.setAttribute('aria-selected',b.dataset.view===v)});
  window.scrollTo(0,0);
}
function tab(t){
  ['rom','kernel'].forEach(function(id){document.getElementById('p-'+id).classList.toggle('on',id===t)});
  document.querySelectorAll('.tabs button').forEach(function(b){b.setAttribute('aria-selected',b.dataset.tab===t)});
}
function go(v){if(location.hash.slice(1)===v)show(v);else location.hash=v}
document.querySelectorAll('nav button').forEach(function(b){b.addEventListener('click',function(){go(b.dataset.view)})});
document.querySelectorAll('[data-go]').forEach(function(b){b.addEventListener('click',function(){go(b.dataset.go)})});
document.querySelectorAll('.tabs button').forEach(function(b){b.addEventListener('click',function(){tab(b.dataset.tab)})});
window.addEventListener('hashchange',function(){show(location.hash.slice(1))});
tab('rom');show(location.hash.slice(1));
})();

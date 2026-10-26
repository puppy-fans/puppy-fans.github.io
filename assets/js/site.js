// Gallery lightbox
(function(){
  var lb = document.getElementById("lightbox");
  if(!lb || !lb.showModal) return;
  var img = document.getElementById("lb-img"), cap = document.getElementById("lb-cap");
  document.querySelectorAll(".ph button.open").forEach(function(b){
    b.addEventListener("click", function(){
      img.src = b.dataset.src;
      img.alt = b.dataset.caption || "Puppy Panic photo";
      cap.textContent = b.dataset.caption || "";
      lb.showModal();
    });
  });
  lb.querySelector(".close").addEventListener("click", function(){ lb.close(); });
  lb.addEventListener("click", function(e){ if(e.target === lb) lb.close(); });
})();

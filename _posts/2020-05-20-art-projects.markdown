---
layout: post
title:  "Art Projects"
date:   2020-05-20 6:00:00
description: Phasellus hendrerit. Pellent aliquet nibh nec urna. In nis aliquet vel, dapibus id,mattis.
thumbnail: brushes.jpg
categories: personal

# Information for the author block
author: Sara Lin
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut [enim ad minim][link1] veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<html>
<!-- Trigger the Modal -->
<div class="imageRow">
<img id="myImg" src="{{ site.baseurl }}/assets/img/brushes.jpg" alt="Wow this is a caption here!" style="width:100%;max-width:15em;height:10em">
<img id="myImg" src="{{ site.baseurl }}/assets/img/brushes.jpg" alt="Wow this is a caption here!" style="width:100%;max-width:15em;height:10em">
<img id="myImg" src="{{ site.baseurl }}/assets/img/brushes.jpg" alt="Wow this is a caption here!" style="width:100%;max-width:15em;height:10em">
<img id="myImg" src="{{ site.baseurl }}/assets/img/brushes.jpg" alt="Wow this is a caption here!" style="width:100%;max-width:15em;height:10em">
<img id="myImg" src="{{ site.baseurl }}/assets/img/brushes.jpg" alt="Wow this is a caption here!" style="width:100%;max-width:15em;height:10em">
<img id="myImg" src="{{ site.baseurl }}/assets/img/brushes.jpg" alt="Wow this is a caption here!" style="width:100%;max-width:15em;height:10em">
</div>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- The Close Button -->
  <span class="close">&times;</span>

  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img01">

  <!-- Modal Caption (Image Text) -->
  <div id="caption"></div>
</div>

<script> //Modal image popup
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
</script>

</html>


[link1]: example.net


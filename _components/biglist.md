---
layout: page
title: "BigList"
---

Use BigList to display a long list of items, such as Caseloads.

<!-- BigList Code -->

<button class="nhs-biglist-btn" onclick="biglist()"><i class="fas fa-sort-amount-down"></i> Open BigList</button>

<div id="nhs-biglist-content">
  <input id="nhs-biglist-search" type="text" placeholder="Search..." style="margin: 5px;" onkeyup="filterFunction()">
  <div id="nhs-biglist-filter">
    <a href="#">Apple</a>
    <a href="#">Orange</a>
    <a href="#">Banana</a>
  </div>
</div>

<!-- BigList Code -->

<div id="code">
<div>
<div>&lt;button&nbsp;class="nhs-biglist-btn"&nbsp;onclick="biglist()"&gt;&lt;i&nbsp;class="fas&nbsp;fa-sort-amount-down"&gt;&lt;/i&gt;&nbsp;Open&nbsp;BigList&lt;/button&gt;</div>
<br />
<div>&lt;div&nbsp;id="nhs-biglist-content"&gt;</div>
<div>&nbsp;&nbsp;&lt;input&nbsp;id="nhs-biglist-search"&nbsp;type="text"&nbsp;placeholder="Search..."&nbsp;style="margin:&nbsp;5px;"&nbsp;onkeyup="filterFunction()"&gt;</div>
<div>&nbsp;&nbsp;&lt;div&nbsp;id="nhs-biglist-filter"&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a&nbsp;href="#"&gt;Apple&lt;/a&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a&nbsp;href="#"&gt;Orange&lt;/a&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a&nbsp;href="#"&gt;Banana&lt;/a&gt;</div>
<div>&nbsp;&nbsp;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
</div>
</div>

<script>
window.onload = function() {
  document.getElementById('/components/biglist').className = 'nhs-fancy2';
};
</script>

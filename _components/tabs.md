---
layout: page
title: "Tabs"
---

<div class="nhs-container nhs-tabs">

<input type="radio" class="nhs-hide" name="tabs" id="tabone" checked="checked" />
  <label class="nhs-tab" for="tabone">First Tab</label>
    <div class="tab">
      <div class="nhs-container">
        <p>Content in the first tab.</p>
      </div>
    </div>

  <input type="radio" class="nhs-hide" name="tabs" id="tabtwo" />
    <label class="nhs-tab" for="tabtwo">Second Tab</label>
    <div class="tab">
      <div class="nhs-container">
        <p>Content in the second tab.</p>
      </div>
    </div>

</div>



<div id="code">
<div>
<div>&lt;div&nbsp;class="nhs-container&nbsp;nhs-tabs"&gt;</div>
<br />
<div>&lt;input&nbsp;type="radio"&nbsp;class="nhs-hide"&nbsp;name="tabs"&nbsp;id="tabone"&nbsp;checked="checked"&nbsp;/&gt;</div>
<div>&nbsp;&nbsp;&lt;label&nbsp;class="nhs-tab"&nbsp;for="tabone"&gt;First&nbsp;Tab&lt;/label&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;class="tab"&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;class="nhs-container"&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Content&nbsp;in&nbsp;the&nbsp;first&nbsp;tab.&lt;/p&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</div>
<br />
<div>&nbsp;&nbsp;&lt;input&nbsp;type="radio"&nbsp;class="nhs-hide"&nbsp;name="tabs"&nbsp;id="tabtwo"&nbsp;/&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;class="nhs-tab"&nbsp;for="tabtwo"&gt;Second&nbsp;Tab&lt;/label&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;class="tab"&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;class="nhs-container"&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Content&nbsp;in&nbsp;the&nbsp;second&nbsp;tab.&lt;/p&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</div>
<br />
<div>&lt;/div&gt;</div>
</div>

</div>

<script>
window.onload = function() {
  document.getElementById('/components/tabs').className = 'nhs-fancy2';
};
</script>

# Meteor package for jquery hoverIntent
jQuery hoverIntent from Brian Cherne, https://github.com/briancherne/jquery-hoverIntent.git packaged for Meteor

# To install
meteor add keryi:meteor-hoverintent

# To use
### demo.html
```
<template name="menu">
  <ul class="demo" id="demo">
    <li class="p1" style="height: 50px; background-color: #1dd2af;">&nbsp;</li>
    <li class="p2" style="height: 50px; background-color: #3498db;">&nbsp;</li>
    <li class="p3" style="height: 50px; background-color: #e67e22;">&nbsp;</li>
    <li class="p4" style="height: 50px; background-color: #9b59b6;">&nbsp;</li>
  </ul>
</template>
```

### demo.css
```
ul.demo {
  display: block;
  width: 100%;
  height: 75px;
  padding: 0;
  margin: 0;
  background: #9cc;
  list-style-type: none;
}

ul.demo li {
  display: block;
  width: 25%;
  height: 50px;
  padding: 0;
  margin: 0;
  float: left;
  position: relative;
  overflow: hidden;
  cursor: default;
  font-size: 0.9em;
  line-height: 1.1em;
}
```

### demo.js
```
function makeTall() {
  $(this).animate({"height":75}, 200);
}

function makeShort() {
  $(this).animate({"height":50}, 200);
}

Template.menu.rendered = function() {
  $("#demo li").hover(makeTall, makeShort);
}
```

# Examples
Please refer to the link by the original author for more examples, http://cherne.net/brian/resources/jquery.hoverIntent.html
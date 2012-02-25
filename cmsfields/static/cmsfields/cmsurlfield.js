(function($)
{
  $(document).ready(function(){
    var widgets = $("ul.cmsfield-url-type");
    widgets.find("input").change(onUrlTypeChange);

    // Apply by default
    widgets.each(function(){ updatePanels($(this)); });
  });


  function onUrlTypeChange(event)
  {
    var widget = $(this).parent().closest('.cmsfield-url-type');
    updatePanels(widget);
  }

  function updatePanels(widget)
  {
    var inputs = widget.find('input');
    inputs.each(function(){
      var slugvalue = this.value.replace(/[^a-z0-9-_]/, '');
      var pane = widget.siblings(".cmsfield-url-" + slugvalue);
      pane[ this.checked ? "show" : "hide" ]();
    });
  }

})(window.jQuery || window.django.jQuery);
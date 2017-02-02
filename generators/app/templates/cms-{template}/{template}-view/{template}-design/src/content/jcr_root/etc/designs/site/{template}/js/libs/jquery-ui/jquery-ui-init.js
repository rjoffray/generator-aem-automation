// Event Shims to support missing events from 3rd party custom form fields.
$().ready(function() {
    // Shim for jQuery UI Datepicker Select Event
    $.datepicker.setDefaults({
        onSelect: function() {
            $(this).trigger('keyup');
            $(this).blur();
        }
    });
});
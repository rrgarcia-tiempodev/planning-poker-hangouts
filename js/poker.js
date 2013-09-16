function putCard(value) {
    gapi.hangout.data.setValue(
        gapi.hangout.getLocalParticipantId(),
        value
    );
}

gapi.hangout.data.onStateChanged.add(function(Event) {
    _output = "";
    $.each(Event.state, function(key, value) {
        _output += "<p class='tableCard'>"
             + gapi.hangout.getParticipantById(key).person.displayName
             + ": "
             + (gapi.hangout.getEnabledParticipants().length == gapi.hangout.data.getKeys().length
             ? value : "<em>[placed]</em>")
             + "</p>";
    });
    $('#output').html(_output);
});

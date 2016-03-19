describe("module base function", function() {
    var res;
    var elem = $('#superMan');
    var hotKey = new SealHotKeys({
        el: "#superMan"
    });
    hotKey.add("ctrl + a", function(e){
        res = 'aha';
    });
    it("shortcut format", function() {
        expect(SealHotKeys.keyFormat("shift + ctrl + a")).toBe("control_shift_a");
    });
    it("add shortcut", function() {
        expect(hotKey._map.control_a).not.toBeUndefined();
    })
    it('event is triggered', function() {
        var e = $.Event("keydown", {keyCode: 65, which: 65, ctrlKey: true, target: $('#superMan')[0]});
        $(document).trigger(e);
        expect(res).toBe("aha");
    });

    it('remove shortcut', function() {
        hotKey.remove('ctrl + a');
        expect(hotKey._map.control_a).toBeUndefined();
    });
});

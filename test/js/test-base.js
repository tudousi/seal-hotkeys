describe("module base function", function() {
    var elem = $('.superMan');
    var hotKey = new SealHotKeys({
        //
    });
    hotKey.add("ctrl + a", function(e){
        //debugger;
    });
    hotKey.remove('ctrl + a');
    it("shortcut format", function() {
        expect(SealHotKeys.keyFormat("shift + ctrl + a")).toBe("control_shift_a");
    });
});

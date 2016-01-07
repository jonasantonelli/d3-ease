var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape("easeLinearIn(t) returns the expected results", function(test) {
  test.inDelta(ease.easeLinearIn(0.0), 0.0);
  test.inDelta(ease.easeLinearIn(0.1), 0.1);
  test.inDelta(ease.easeLinearIn(0.2), 0.2);
  test.inDelta(ease.easeLinearIn(0.3), 0.3);
  test.inDelta(ease.easeLinearIn(0.4), 0.4);
  test.inDelta(ease.easeLinearIn(0.5), 0.5);
  test.inDelta(ease.easeLinearIn(0.6), 0.6);
  test.inDelta(ease.easeLinearIn(0.7), 0.7);
  test.inDelta(ease.easeLinearIn(0.8), 0.8);
  test.inDelta(ease.easeLinearIn(0.9), 0.9);
  test.inDelta(ease.easeLinearIn(1.0), 1.0);
  test.end();
});

tape("easeLinearIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeLinearIn(".9"), ease.easeLinearIn(0.9));
  test.strictEqual(ease.easeLinearIn({valueOf: function() { return 0.9; }}), ease.easeLinearIn(0.9));
  test.end();
});

tape("easeLinearOut is an alias for linearIn", function(test) {
  test.equal(ease.easeLinearOut, ease.easeLinearIn);
  test.end();
});

tape("easeLinearInOut is an alias for linearInOutIn", function(test) {
  test.equal(ease.easeLinearInOut, ease.easeLinearIn);
  test.end();
});

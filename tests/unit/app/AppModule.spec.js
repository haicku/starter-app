describe('app', function () {

  beforeEach(module('app'));

  it('should load everything', inject(function () {
    expect(true).toBe(true);
  }));

});

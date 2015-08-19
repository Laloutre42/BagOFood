'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
<<<<<<< HEAD
    browser.get('/index.html');
=======
    browser.get('http://localhost:3000/index.html');
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  });

<<<<<<< HEAD
  it('should list more than 5 awesome things', function () {
=======
  it('list more than 5 awesome things', function () {
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d
    expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  });

});

// Generated by CoffeeScript 1.4.0
(function() {

  describe('PhoneCat app', function() {
    describe('Phone list view', function() {
      beforeEach(function() {
        return browser().navigateTo('/app/index.html');
      });
      it('should filter the phone list as user types into the search box', function() {
        expect(repeater('.phones li').count()).toBe(20);
        input('query').enter('nexus');
        expect(repeater('.phones li').count()).toBe(1);
        input('query').enter('motorola');
        return expect(repeater('.phones li').count()).toBe(8);
      });
      it('should be possible to control phone order via the drop down select box', function() {
        input('query').enter('tablet');
        expect(repeater('.phones li', 'Phone List').column('phone.name')).toEqual(['Motorola XOOM\u2122 with Wi-Fi', 'MOTOROLA XOOM\u2122']);
        select('orderProp').option('Alphabetical');
        return expect(repeater('.phones li', 'Phones List').column('phone.name')).toEqual(['MOTOROLA XOOM\u2122', 'Motorola XOOM\u2122 with Wi-Fi']);
      });
      it('should render phone specific links', function() {
        input('query').enter('nexus');
        element('.phones li a').click();
        return expect(browser().location().url()).toBe('/phones/nexus-s');
      });
      return it('should redirect index.html to index.html#/phones', function() {
        browser().navigateTo('/app/index.html');
        return expect(browser().location().url()).toBe('/phones');
      });
    });
    return describe('Phone detail view', function() {
      beforeEach(function() {
        return browser().navigateTo('/app/index.html#/phones/nexus-s');
      });
      it('should display nexus-s page', function() {
        return expect(binding('phone.name')).toBe('Nexus S');
      });
      it('should display the first phone image as the main phone image', function() {
        return expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
      });
      return it('should swap main image if a thumbnail image is clicked on', function() {
        element('.phone-thumbs li:nth-child(3) img').click();
        expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.2.jpg');
        element('.phone-thumbs li:nth-child(1) img').click();
        return expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
      });
    });
  });

}).call(this);

var mocha = require('mocha');
var expect = require('chai').expect;
var mathObj = require('./mathlogic.js');
var fs = require('fs');
var asyncFile = require('./file.js');

describe('this is our outer describe block', function(){
  describe('basic example', function(){

    it('should multiply two positive numbers together', function(){
      expect(mathObj.multiply(8,4)).to.equal(32);
    });

    it('should add together then multply by 5', function(){
      expect(mathObj.addAndMultiply(8,2)).to.equal(50);
    });

    it('should subtract 10 from any number', function(){
      expect(mathObj.subtractTen(20)).to.equal(10);
    });
  })

  describe('this is asynch functions', function(){

    var fileData;

    before(function(done){
      asyncFile.readFile(function(data){
        fileData = data;
        done();
      })
    });

    it('should say something cool', function(){
      expect(fileData).to.equal('Whats happening!\n');
    })

  })
});

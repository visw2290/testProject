describe("Opening a web application",function(){

    it("Open google.com",function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://www.google.com");
    })
});
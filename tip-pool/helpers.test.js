describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
        submitPaymentInfo();
    });
    
    it('should sum total tip amounts on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(5);
        
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(25);
    });

    it('should sum total bill amounts on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(50);
        
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(150);
    });

    it('should sum total tip percent on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(10);
        
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(30);
    });

    it('should calculate the tip percent of a single tip on calculateTipPercent()', function () {
        expect(calculateTipPercent(50, 5)).toEqual(10);
        expect(calculateTipPercent(100, 20)).toEqual(20);
    });

    it('should generate new td and append it to tr on appendTd()', function () {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');
        
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it('should generate new td and append it to tr on appendDeleteBtn()', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);
        
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });
    
    afterEach(function() {
        // tear-down logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
    });
});
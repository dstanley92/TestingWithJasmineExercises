describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = '50';
        tipAmtInput.value = '5';
    });

    it('should add a payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('50');
        expect(allPayments['payment1'].tipAmt).toEqual('5');
        expect(allPayments['payment1'].tipPercent).toEqual(10);
    });

    it('should not add a payment to allPayments with empty input on submitPaymentInfo()', function () {
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);

        billAmtInput.value = '50';
        tipAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should update #paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        appendPaymentTable(curPayment);
        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerText).toEqual('$50');
        expect(curTdList[1].innerText).toEqual('$5');
        expect(curTdList[2].innerText).toEqual('10%');
        expect(curTdList[3].innerText).toEqual('X');
    });

    it('should return object with proper bill amt, tip amt, and tip percent on CreateCurPayment()', function () {
        let expectedPayment = {billAmt: '50', tipAmt: '5', tipPercent: 10};
        expect(createCurPayment()).toEqual(expectedPayment);
    });

    it('should return undefined with either input empty on CreateCurPayment()', function () {
        billAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);

        billAmtInput.value = '50';
        tipAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);
    });

    afterEach(function() {
        // tear-down logic
        allPayments = {};
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });
});
describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server to allServers on submitServerInfo() if Server Name is empty', function () {
    serverNameInput.value = ''
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should add a new row to #serverTable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let currentTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentTdList.length).toEqual(3);
    expect(currentTdList[0].innerText).toEqual('Alice');
    expect(currentTdList[1].innerText).toEqual('$0.00');
    expect(currentTdList[2].innerText).toEqual('X');
  });
  
  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});

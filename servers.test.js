  describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Sally';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Sally');
  });

  it('should not add a new server on submitServerInfo() with empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update #servertable on updateServerTable()', function () {
    
    
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(2);
    expect(curTdList[0].innerText).toEqual('Sally');

    //to test other values change in helpers function sumPaymentTotal(type) and let amount be whatever value wanted to be tested
      expect(curTdList[1].innerText).toEqual('$0.00');
    // expect(curTdList[2].innerText).toEqual('X');
  });


  afterEach(function() {
    // teardown logic kind of resets or clears everything after 
        serverId = 0;
      serverTbody.innerHTML = '';
      allServers = {};
     });
  });


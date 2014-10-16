$(function(){
    chrome.tabs.getSelected(null, function(tab){
        // $('#qrcode').html(tab.url+ '?v=' + new Date().getTime());
        $('#qrcode').qrcode(tab.url+ '?v=' + new Date().getTime());
        $.post('http://dwz.cn/create.php', {
            url: tab.url
        }, function(data){
            $('#shortUrl').html(JSON.parse(data)['tinyurl']);
        });
    });
});
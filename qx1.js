Notify_Demo('================11');
function Change_Request()
{
    Notify_Demo('================22');
    var RequestHeaders = $request.headers;
    delete RequestHeaders.Connection;
    RequestHeaders['Proxy-Connection'] = 'Keep-Alive';
    RequestHeaders['X-T5-Auth'] = '88888888';
    $done({RequestHeaders});//修改完成之后需要调用$done
}

function Notify_Demo(ct)
{
    var Title,SubTitle,Content;
    TItle = "qx1";
    SubTitle  = "qx1";
    Content = ct;
    $notification.post(Title,SubTitle,Content);
}

Change_Request();

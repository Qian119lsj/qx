function Change_Request()
{
    var RequestHeaders = $request.headers;
    delete RequestHeaders.Connection;
    RequestHeaders['Proxy-Connection'] = 'Keep-Alive';
    RequestHeaders['X-T5-Auth'] = '88888888';
    $done({headers:RequestHeaders});//修改完成之后需要调用$done
}

//获取请求URL和请求头信息
function Get_RequestInfo()
{
    var RequestURL,RequestHeaders;
    RequestURL = $request.url;
    RequestHeaders = $request.headers;
    console.log(RequestURL);
    console.log(RequestHeaders);
}

function Notify_Demo(ct)
{
    var Title,SubTitle,Content;
    TItle = "qx1";
    SubTitle  = "qx";
    Content = ct;
    $notification.post(Title,SubTitle,Content);
}
Get_RequestInfo();
Change_Request();
Get_RequestInfo();

//修改请求头信息
function Change_Request()
{
    var RequestHeaders = $request.headers;
    delete RequestHeaders.Connection;
    RequestHeaders['Proxy-Connection'] = 'Keep-Alive';
    RequestHeaders['X-T5-Auth'] = '88888888';
    $done({RequestHeaders});//修改完成之后需要调用$done
}

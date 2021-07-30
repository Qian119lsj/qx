console.log('================11');
function Change_Request()
{
    console.log('================22');
    var RequestHeaders = $request.headers;
    delete RequestHeaders.Connection;
    RequestHeaders['Proxy-Connection'] = 'Keep-Alive';
    RequestHeaders['X-T5-Auth'] = '88888888';
    $done({RequestHeaders});//修改完成之后需要调用$done
}

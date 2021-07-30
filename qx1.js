function Change_Request()
{
    var RequestHeaders = $request.headers;
    delete RequestHeaders.Connection;
    RequestHeaders['Proxy-Connection'] = 'Keep-Alive';
    RequestHeaders['X-T5-Auth'] = '88888888';
    console.log($request.headers);
//     $notification.post("p","t1",JSON.stringify($request.headers['X-T5-Auth']))
    $done({headers:RequestHeaders});//修改完成之后需要调用$done
    console.log($request.headers);
//     $notification.post("p","t2",JSON.stringify($request.headers['X-T5-Auth']))
}
Change_Request();

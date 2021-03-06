/**
 * @fileoverview Example of HTTP rewrite of request header.
 *
 * @supported Quantumult X (v1.0.5-build188)
 *
 * [rewrite_local]
 * ^http://example\.com/resource9/ url script-request-header sample-rewrite-request-header.js
 */

// $request.scheme, $request.method, $request.url, $request.path, $request.headers

var modifiedHeaders = $request.headers;
// $notify('title', 'subtitle', 'massage', 'buzhid');
console.log(modifiedHeaders['Host']);
delete modifiedHeaders.Connection;
modifiedHeaders['Proxy-Connection'] = 'Keep-Alive';
modifiedHeaders['X-T5-Auth'] = '88888888';
// var modifiedPath = '/api2/abc?k=v';

$done({headers : modifiedHeaders});
// $done({path : modifiedPath});
// $done({}); // Not changed.

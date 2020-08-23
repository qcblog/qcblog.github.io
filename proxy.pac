function FindProxyForURL(url, host) {
  if (url.startsWith("http:")){
    return "PROXY 192.168.0.102:6666";
  }
  if(dnsDomainIs(host, ".google.com")){
    return "PROXY 192.168.0.102:6666";
  }
}
//https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file

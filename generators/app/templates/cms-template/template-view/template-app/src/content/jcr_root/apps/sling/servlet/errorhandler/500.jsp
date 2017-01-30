<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isErrorPage="true"
%><% response.setStatus(500); %><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="robots" content="noindex, nofollow">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Page Unavailable</title>
<style>
body {
	background-color: #EEE;
	font-family: "proxima-nova",sans-serif;
	color: #666;
}
#theme-logo {
    background-image: url(/etc/designs/site/_core/images/alg-logo.png);
    background-repeat: no-repeat;
    width: 270px;
    height: 53px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
}
#theme-logo.tiLogo {
	background-image: url(/etc/designs/site/uap/images/travel_impressions_logo3.png);
    background-repeat: no-repeat;
    width: 122px;
    height: 60px;
}
#theme-logo.avLogo {
	background-image: url(/etc/designs/site/uap/images/apple_logo3.png);
    background-repeat: no-repeat;
    width: 242px;
    height: 28px;
}
h4 {
	font-weight: normal;
	margin: 0;
	font-size: 16px;
	line-height: 1.4;
}
h2 {
	line-height: 1.2;
	font-size: 20px;
	margin: 0 0 10px 0;
	font-weight: bold;
}
.message {
	background-color: #FFF;
	width: 322px;
	height: auto;
	padding: 20px;
	margin: 0 auto;
}
</style>
</head>
<body>
<div class="row">
	<div style="text-align: center; margin-top: 120px;">
		<div id="theme-logo"></div>
		<div class="message">
			<h2>500 Internal Server Error</h2>
			<h4>Service is temporarily unavailable. Our team is working to resolve the issue.</h4>
		</div>	
	</div>
</div>
<script>
	if(window.location.host.indexOf("applevac") !== -1) {
		document.getElementById("theme-logo").classList.add("avLogo");
	} else if(window.location.host.indexOf("travimp") !== -1) {
		document.getElementById("theme-logo").classList.add("tiLogo");
	}
</script>
</body>
</html>
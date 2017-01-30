<%--
  Copyright 1997-2008 Day Management AG
  Barfuesserplatz 6, 4001 Basel, Switzerland
  All Rights Reserved.

  This software is the confidential and proprietary information of
  Day Management AG, ("Confidential Information"). You shall not
  disclose such Confidential Information and shall use it only in
  accordance with the terms of the license agreement you entered into
  with Day.

  ==============================================================================

  Generic 404 error handler

  Important note:
  Since Sling uses the user from the request (depending on the authentication
  handler but typically HTTP basic auth) to login to the repository and JCR/CRX
  will simply say "resource not found" if the user does not have a right to
  access a certain node, everything ends up in this 404 handler, both access
  denied ("401", eg. for non-logged in, anonymous users) and really-not-existing
  scenarios ("404", eg. logged in, but does not exist in repository).

--%><%
%><%@ page session="false" %><%
%><%@ page import="
    java.net.URLEncoder,
    org.apache.sling.api.scripting.SlingBindings,
    org.apache.sling.engine.auth.Authenticator,
    org.apache.sling.engine.auth.NoAuthenticationHandlerException,
    com.day.cq.wcm.api.WCMMode" %><%!

    private boolean isAnonymousUser(HttpServletRequest request) {
        return request.getAuthType() == null
            || request.getRemoteUser() == null
            || "anonymous".equals(request.getRemoteUser());
    }

    private boolean isBrowserRequest(HttpServletRequest request) {
        // check if user agent contains "Mozilla" or "Opera"
        final String userAgent = request.getHeader("User-Agent");
        return userAgent != null
            && (userAgent.indexOf("Mozilla") > -1
                || userAgent.indexOf("Opera") > -1);
    }

%><%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"
%><%@taglib uri="/META-INF/tags/app.tld" prefix="app"
%><%
    // decide whether to redirect to the (wcm) login page, or to send a plain 404
    /* Commenting out default behavior of redirecting to a Login page.*/
    if (isAnonymousUser(request)
            && isBrowserRequest(request) && WCMMode.fromRequest(request) == WCMMode.EDIT) {

        SlingBindings bnd = (SlingBindings) request.getAttribute("org.apache.sling.api.scripting.SlingBindings");
        Authenticator auth = bnd.getSling().getService(Authenticator.class);
        if (auth != null) {
            try {
            	bnd.getLog().warn("attempting to login");
                auth.login(request, response);

                // login has been requested, nothing more to do
                return;
            } catch (NoAuthenticationHandlerException nahe) {
            	bnd.getLog().warn("Cannot login: No Authentication Handler is willing to authenticate");
            }
        } else {
        	bnd.getLog().warn("Cannot login: Missing Authenticator service");
        }

    }

    // get here if authentication should not take place or if
    // no Authenticator service is available or if no
    // AuthenticationHandler is willing to authenticate
    // So we fall back to plain old 404/NOT FOUND

    // Custom Error Handling Code
    // final String errorCode = PageErrorCode.E404.getPageErrorCode();
    // final String responseStr = UtilsHTTP.tryRedirectForPageErrorCode(request, errorCode);
    response.setStatus(404);
%><app:pageStatus statusCode="<%=response.SC_NOT_FOUND %>">
<!DOCTYPE html>
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
			<h2>404 Not Found</h2>
			<h4>This page doesn't seem to exist.</h4>
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
</app:pageStatus>
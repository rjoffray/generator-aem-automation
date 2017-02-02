//package com.alg.cms.template.common.configuration;
//
//import org.apache.felix.scr.annotations.Component;
//import org.apache.felix.scr.annotations.Properties;
//import org.apache.felix.scr.annotations.Property;
//import org.apache.felix.scr.annotations.Service;
//
//import com.alg.cms.core.common.configuration.SiteConfiguration;
//import com.alg.cms.core.common.configuration.SiteConfigurationAbstract;
//import com.alg.cms.core.common.constants.enums.SiteCode;
//
//@Component(
//		label = "site-config-template",
//		name = "com.alg.cms.template.common.configuration.SiteConfigurationImpl",
//		immediate = true,
//		metatype = true,
//		description = "Site Configuration Options")
//@Service(SiteConfigurationImpl.class)
//@Properties({
//		@Property(
//				label = SiteConfiguration.SITE_DOMAIN,
//				name = SiteConfiguration.SITE_DOMAIN,
//				value = "www.applevacations.com",
//				description = "The site domain to use without www protocol."),
//		@Property(
//				label = SiteConfiguration.ASSET_DOMAIN,
//				name = SiteConfiguration.ASSET_DOMAIN,
//				value = "www.applevacations.com",
//				description = "The asset domain to use without www protocol."),
//		@Property(
//				label = SiteConfiguration.CONTENT_SITE_DOMAIN,
//				name = SiteConfiguration.CONTENT_SITE_DOMAIN,
//				value = "www.book.applevacations.com/showHotel.do?",
//				description = "The content domain to use."),
//		@Property(
//				label = SiteConfiguration.INTERNAL_DAY_DISPATCH_DOMAIN,
//				name = SiteConfiguration.INTERNAL_DAY_DISPATCH_DOMAIN,
//				value = "",
//				description = "The internal day dispatcher domain to use"),
//		@Property(label = SiteConfiguration.SERVICE_DOMAIN, name = SiteConfiguration.SERVICE_DOMAIN, value = "", description = ""),
//		@Property(label = SiteConfiguration.SERVICE_TRIP_DOMAIN, name = SiteConfiguration.SERVICE_TRIP_DOMAIN, value = "", description = ""),
//		@Property(label = SiteConfiguration.SERVICE_GEO_DOMAIN, name = SiteConfiguration.SERVICE_GEO_DOMAIN, value = "", description = ""),
//		@Property(label = SiteConfiguration.SERVICE_USER_DOMAIN, name = SiteConfiguration.SERVICE_USER_DOMAIN, value = "", description = ""),
//		@Property(label = SiteConfiguration.SERVICE_HOTEL_DOMAIN, name = SiteConfiguration.SERVICE_HOTEL_DOMAIN, value = "", description = ""),
//		@Property(label = SiteConfiguration.SERVICE_FLIGHT_DOMAIN, name = SiteConfiguration.SERVICE_FLIGHT_DOMAIN, value = "", description = ""),
//		@Property(label = SiteConfiguration.SERVICE_BOOKING_DOMAIN, name = SiteConfiguration.SERVICE_BOOKING_DOMAIN, value = "", description = ""),
//		@Property(label = SiteConfiguration.SERVICE_ACTIVITY_DOMAIN, name = SiteConfiguration.SERVICE_ACTIVITY_DOMAIN, value = "", description = ""),
//		@Property(label = SiteConfiguration.SERVICE_GROUND_DOMAIN, name = SiteConfiguration.SERVICE_GROUND_DOMAIN, value = "", description = ""),
//		@Property(label = SiteConfiguration.SERVICE_INSURANCE_DOMAIN, name = SiteConfiguration.SERVICE_INSURANCE_DOMAIN, value = "", description = ""),
//		@Property(label = SiteConfiguration.SERVICE_PRODUCT_DOMAIN, name = SiteConfiguration.SERVICE_PRODUCT_DOMAIN, value = "", description = ""),
//		@Property(label = SiteConfiguration.SERVICE_JETPAY_DOMAIN, name = SiteConfiguration.SERVICE_JETPAY_DOMAIN, value = "", description = "") })
//public class SiteConfigurationImpl extends SiteConfigurationAbstract {
//
//	public SiteConfigurationImpl() {
//		super(SiteCode.MICRO);
//	}
//
//}

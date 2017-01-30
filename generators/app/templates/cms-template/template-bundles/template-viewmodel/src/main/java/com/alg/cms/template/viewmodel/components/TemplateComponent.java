//package com.alg.cms.template.viewmodel.components;
//
//import org.apache.felix.scr.annotations.Component;
//import org.apache.felix.scr.annotations.Service;
//import org.apache.sling.api.resource.ValueMap;
//
//import com.alg.cms.core.common.page.CmsHelper;
//import com.alg.cms.core.common.page.PageHelper;
//import com.alg.cms.core.viewmodel.components.common.AbstractComponentModel;
//import com.alg.cms.core.viewmodel.components.common.ComponentModel;
//import com.alg.cms.core.viewmodel.components.common.ComponentView;
//
///**
// * TemplateComponent component.
// *
// * @author tmao
// *
// */
//@Component(immediate = true, metatype = true)
//@Service(value = { TemplateComponent.class, ComponentModel.class })
//public class TemplateComponent extends AbstractComponentModel {
//
//	@Override
//	protected ComponentView buildView(CmsHelper componentHelper, PageHelper pageHelper) {
//		ComponentView view = new ComponentView(componentHelper);
//		ValueMap properties = componentHelper.getProperties();
//
//		view.addView("title", properties.get("title", "Template Component Title"));
//
//		return view;
//	}
//}
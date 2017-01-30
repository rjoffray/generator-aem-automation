package com.alg.cms.template.viewmodel.componets;

import static org.easymock.EasyMock.expect;
import static org.easymock.EasyMock.verify;
import static org.junit.Assert.assertEquals;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.jcr.RepositoryException;

import org.easymock.EasyMock;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.alg.cms.core.viewmodel.components.AbstractComponentTest;
import com.alg.cms.template.viewmodel.components.TemplateComponent;

public class TemplateComponentTest extends AbstractComponentTest {
	private final String componentId = "spacer_component";

	@Before
	public void setUp() throws Exception {
		setupCommon(componentId);
		component = new TemplateComponent();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	/*
	 *
	 */
	public void testRenderComponentOption() throws IOException, RepositoryException {
		// Tell EasyMock about all required variables and properties for the setup

		expect(componentProperties.get(EasyMock.eq("title"), EasyMock.eq("Template Component Title"))).andReturn("Template Component Title");

		// Setup mock
		replayCommon();

		// Perform jUnit tests
		HashMap<String, Object> modelObject = component.retrieveViewModelMap(componentHelperMock, pageHelper);
		Map<String, Object> map = modelObject;

		for (Map.Entry<String, Object> entry : map.entrySet()) {
			String key = entry.getKey();
			Object value = entry.getValue();
			if (key.equals("title"))
				assertEquals("Template Component Title", value.toString());
		}

		// Ensure all expected methods calls to mock objects were called
		verify(responseMock, componentViewMock, componentProperties, mockNode);
	}

}

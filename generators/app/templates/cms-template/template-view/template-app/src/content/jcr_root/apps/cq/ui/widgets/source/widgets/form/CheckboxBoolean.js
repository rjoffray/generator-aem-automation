// Modified version of the Checkbox that only allows for true and false to be stored as data.

CQ.Ext.form.Checkbox.CheckboxBoolean = CQ.Ext.extend(CQ.Ext.form.Checkbox, {
	constructor: function(config) {
		CQ.Ext.form.Checkbox.CheckboxBoolean.superclass.constructor.call(this,config);
	},
    /**
     * Sets the checked state of the checkbox, fires the 'check' event, and calls a
     * <code>{@link #handler}</code> (if configured).
     * @param {Boolean/String} checked The following values will check the checkbox:
     * <code>true, 'true', '1', or 'on'</code>. Any other value will uncheck the checkbox.
     * @return {CQ.Ext.form.Field} this
     */
    setValue : function(v) {
        var checked = this.checked;
        this.checked = (v === true || v === 'true' || v == '1' || String(v).toLowerCase() == 'on');
        if(this.rendered) {
            this.el.dom.checked = this.checked;
            this.el.dom.defaultChecked = this.checked;
        }
        if(checked != this.checked){
            this.fireEvent('check', this, this.checked);
            if(this.handler){
                this.handler.call(this.scope || this, this, this.checked);
            }
        }
        if (this.checked) {
        	this.hiddenDataStoreField.setValue('true');
        } else {
        	this.hiddenDataStoreField.setValue('false');
        }
        return this;
    }
});

CQ.Ext.form.CheckboxBoolean = CQ.Ext.extend(CQ.Ext.form.TextField, {
	constructor: function(checkboxConfig) {
		// checkboxConfig will be passed on to the checkbox that is being rendered.
	    // user defined items from the nodes will primarily effect only the Checkbox, not the textfield.

		// force text field config.  We don't want the user modifying this.
		var textFieldConfig = {
			fieldDescription: checkboxConfig.fieldDescription,
			fieldLabel: checkboxConfig.fieldLabel,
			name: checkboxConfig.name,
			//TODO DYU: need to double check if this will work across the board
            itemId: (checkboxConfig.itemId ? checkboxConfig.itemId : checkboxConfig.name),
			xtype: 'textfield',
			hidden: false,
			fieldClass:'x-form-field x-hide-display'
		}
		CQ.Ext.form.CheckboxBoolean.superclass.constructor.call(this,textFieldConfig);

		// update the name to null so the checkbox doesn't actually ever save a value.
		checkboxConfig.name = null;
		var checkboxBoolean = new CQ.Ext.form.Checkbox.CheckboxBoolean(checkboxConfig);
		checkboxBoolean.hiddenDataStoreField = this;
		this.checkboxBoolean = checkboxBoolean;
	},
	hidden: false,
	stateful: true,
    processPath: function(path) {
        this.path = path;
    },
    processRecord: function(record, path) {
        if (this.fireEvent('beforeloadcontent', this, record, path) !== false) {
            var v = record.get(this.getName());
            if (v == undefined && this.defaultValue != null) {
                if (this.isApplyDefault(record, path)) {
                   this.setValue(this.defaultValue);
                }
            }
            else {
                this.setValue(v);
            }
            this.fireEvent('loadcontent', this, record, path);
        }

        // Properly set the checkbox
        var existingValue = this.getValue();
        if (existingValue != null && existingValue != '') {
        	if (existingValue == 'true') {
        		this.checkboxBoolean.setValue(true);
        	} else {
        		this.checkboxBoolean.setValue(false);
        	}
		}
    },
	afterRender: function() {
		CQ.Ext.form.CheckboxBoolean.superclass.afterRender.call(this);
		this.checkboxBoolean.render(this.container.dom);
	}
});

CQ.Ext.reg("checkboxBoolean", CQ.Ext.form.CheckboxBoolean);


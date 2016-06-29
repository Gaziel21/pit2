/**
  * Ext.ux.form.field.IconCombo Extension Class for Ext 4.1.x Library
  *
  * @author  Holger Schäfer
  * @class Ext.ux.IconCombo
  * @extends Ext.form.field.ComboBox
  * 
  * depends on IconLoader
  * Forum: http://www.sencha.com/forum/showthread.php?234135-Ext.ux.IconLoader
  * 
  * Usage:
  * {
  *     xtype: 'iconcombo',
  *     valueField: 'field1',
  *     displayField: 'field2',
  *     iconClsField: 'field3',
  *     queryMode: 'local',
  *     store: [['de', 'Deutsch', 'flags-de'], ['en','Englisch','flags-gb']]
  * }
  */

Ext.define('Ext.ux.form.field.IconCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.iconcombo',    
    
    // sof IconLoader (comment this if not using IconLoader and load icons inside css) 
//    uses: [ 'Ext.ux.IconLoader' ],
//    requireIcons: ['flags/de', 'flags/gb'],
    // eof IconLoader
    
    
    initComponent: function() {    
        var me = this;
//        console.log(me);
//        
//        add container at the end of default template
//        var iconFieldSubTpl = Ext.clone(me.fieldSubTpl);
        var iconFieldSubTpl = [
        '<div class="{hiddenDataCls}" role="presentation"></div>',
        '<input id="{id}" type="{type}" {inputAttrTpl} class="{fieldCls} {typeCls} {editableCls}" autocomplete="off"',
            '<tpl if="value"> value="{[Ext.util.Format.htmlEncode(values.value)]}"</tpl>',
            '<tpl if="name"> name="{name}"</tpl>',
            '<tpl if="placeholder"> placeholder="{placeholder}"</tpl>',
            '<tpl if="size"> size="{size}"</tpl>',
            '<tpl if="maxLength !== undefined"> maxlength="{maxLength}"</tpl>',
            '<tpl if="readOnly"> readonly="readonly"</tpl>',
            '<tpl if="disabled"> disabled="disabled"</tpl>',
            '<tpl if="tabIdx"> tabIndex="{tabIdx}"</tpl>',
            '<tpl if="fieldStyle"> style="{fieldStyle}"</tpl>',
            '/>',
        {
            compiled: true,
            disableFormats: true
        }
    ];

        try{ 
        iconFieldSubTpl.push(
            '<div class="ux-icon-combo-icon"></div>'
        );
        }catch(e){ 
        }
        Ext.apply(me, {
          scope: me,
          tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                 '<div class="x-boundlist-item ux-icon-combo-item {' + me.iconClsField + '}">',
                 '{' + me.displayField + '}',
                 '      .',
                 '</div>',
            '</tpl>',
             { compiled: true, disableFormats: true }
          ),
          // add wrapping DIV container around TDs because position:relative is not defined on TD 
          beforeSubTpl: '<div class="ux-icon-combo-wrap">',
          fieldSubTpl: iconFieldSubTpl,          
          afterSubTpl: '</div>',
          renderSelectors: {
              iconClsEl: '.ux-icon-combo-icon'
          }
        });        
        
        me.callParent(arguments);    
  },
    
  setIconCls: function() {
      if (this.rendered) {        
          var rec = this.store.findRecord(this.valueField, this.getValue());
          if (rec) {
              var newIconCls = rec.get(this.iconClsField);
              this.iconClsEl.replaceCls(this.oldIconCls, newIconCls);
              this.oldIconCls = newIconCls;
          }
      } else {
          this.on('render', this.setIconCls, this, {
              single: true
          });
      }
  },
  
  setValue: function(value) {
      this.callParent(arguments);
      this.setIconCls();
  }     
});
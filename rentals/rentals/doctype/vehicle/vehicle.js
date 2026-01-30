// Copyright (c) 2026, asdf and contributors
// For license information, please see license.txt

frappe.ui.form.on("Vehicle", {
	refresh(frm) {

	},
  get_summary(frm){
    frm.get_field("summary").$wrapper.append("<h5>here is you summary</h5>")
  }
});

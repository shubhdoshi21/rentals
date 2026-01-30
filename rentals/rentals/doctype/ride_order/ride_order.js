// Copyright (c) 2026, asdf and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
	onload(frm) {
		console.log("running onload.");
	},
	setup(frm) {
		console.log("running setup..");
	},

	refresh(frm) {
		console.log("running refresh...");
		if (frm.doc.status === "New") {
			frm.add_custom_button("Accept", () => {
				// frappe.show_alert("It works !@#!$#!")
				// status -> accepted
				frm.set_value("status", "Accepted");
				// save form
				frm.save();
			});
			frm.add_custom_button("Reject", () => {
				// frappe.show_alert("It works !@#!$#!")
				// status -> accepted
				frm.set_value("status", "Rejected");
				// save form
				frm.save();
			});
			frm.add_custom_button(
				"Accept",
				() => {
					// frappe.show_alert("It works !@#!$#!")
					// status -> accepted
					frm.set_value("status", "Accepted");
					// save form
					frm.save();
				},
				"Actions",
			);
			frm.add_custom_button(
				"Reject",
				() => {
					// frappe.show_alert("It works !@#!$#!")
					// status -> accepted
					frm.set_value("status", "Rejected");
					// save form
					frm.save();
				},
				"Actions",
			);
		}
	},
	status(frm) {
		console.log("status changed");
	},
});

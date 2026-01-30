// Copyright (c) 2026, asdf and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {},
	rate(frm) {
		// recalc total
		frm.trigger("update_total_amount");
		// this will call the function with frm object
	},
	update_total_amount(frm) {
		let total_distance = 0;
		for (let item of frm.doc.ride_items) {
			total_distance += item.distance;
		}
		const total = total_distance * frm.doc.rate;
		frm.set_value("total", total);
	},
});

frappe.ui.form.on("Ride Booking Item", {
	refresh(frm) {
		// your code here
	},
	distance(frm, cdt, cdn) {
		frm.trigger("update_total_amount");
		// this will call the function with frm object
	},
	ride_items_remove(frm) {
		frm.trigger("update_total_amount");
	},
});

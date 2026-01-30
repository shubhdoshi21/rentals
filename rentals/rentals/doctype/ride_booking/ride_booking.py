# Copyright (c) 2026, asdf and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import frappe
from frappe import _

class RideBooking(Document):
	def validate(self):
		if not self.rate:
			msg = _("Rate per unit distance is not provided!")
			title = _("Missing rate")
			# frappe.throw(msg,title)
			self.rate = frappe.db.get_single_value("Rental Settings","standard_rate")
		total_distance = 0
		for item in self.ride_items:
			total_distance += item.distance
		self.total = total_distance * self.rate

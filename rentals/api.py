import frappe

@frappe.whitelist(allow_guest=True)
def get_emoji():
  return "💰"

def throw_emoji(doc,event):
  frappe.throw("💰💰")

def sent_payment_reminders():
  print("executed")

def huge_background_job():
  print("executed")
# run in bench console : frappe.enqueue("rentals.api.huge_background_job") and check rq jobs from UI

# frappe.enqueue("rentals.api.huge_background_job","short")

# get req at http://mysite.local:8001/api/v2/method/rentals.api.get_emoji

# need to return query which will be added in "AND" condition and filter accordingly before rendering the list view
def get_permission_query_conditions_for_vehicle(user):
  # we can do user level permissions here if the role permission, user permission doesnt satisfy our use case
  return "TRUE"
  # u will see only name 2 vehicle in ride order list or list view of vehicle.
  # return "name = 2"
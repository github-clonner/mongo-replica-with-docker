admin = db.getSiblingDB("admin")

admin.grantRolesToUser( "eldorplus", [ "root" , { role: "root", db: "admin" } ] )

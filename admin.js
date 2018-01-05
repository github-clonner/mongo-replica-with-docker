admin = db.getSiblingDB("admin")
admin.createUser(
  {
    user: "eldorplus",
    pwd: "eldorplusPassword2017",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

db.getSiblingDB("admin").auth("eldorplus", "eldorplusPassword2017" )

db.getSiblingDB("admin").createUser(
  {
    "user" : "replicaAdmin",
    "pwd" : "replicaAdminPassword2017",
    roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
  }
)

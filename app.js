const http = require('http')
const fs = require('fs')
const port = 3000
const Sequelize = require("sequelize-cockroachdb");


const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('src/index.html',function(error, data) {
        if(error){
            res.writeHead(404)
            res.write("Error, UwU, File not found")
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if(error) {
        console.log('somewing went wong, uwu', error)
    } else {
        console.log("Poggers, the server is working and listening on PORT: " + port)
    }
})


// Connect to CockroachDB through Sequelize.
var sequelize = new Sequelize({
  dialect: "postgres",
  username: "",
  password: "",
  host: "free-tier5.gcp-europe-west1.cockroachlabs.cloud",
  port: 26257,
  database: "new-bull-301.defaultdb",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      // For secure connection:
      /*ca: fs.readFileSync('certs/ca.crt')
                .toString()*/
    },
  },
  logging: false,
});

// Define the Account model for the "accounts" table.
const Patients = sequelize.define("patients", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  creatinine: {
    type: Sequelize.FLOAT,
  },
  lvye1: {
    type: Sequelize.FLOAT,
  },
  reg1b: {
    type: Sequelize.FLOAT,
  },
  tff1: {
    type: Sequelize.FLOAT,
  },
  diagnosis: {
    type: Sequelize.STRING,
  },
});

Patients.sync({
  force: true,
})
  .then(function () {
    // Insert two rows into the "patients" table.
    return Patients.create(
      {
        id: 1,
        creatinine: 1.8322,
        lvye1: 0.893219,
        reg1b: 52.94883,
        tff1: 654.282174,
        diagnosis: "Control",
      });
  })
  .then(function () {
    // Retrieve accounts.
    return Patients.findAll();
  })
  .then(function (patients) {
    // Print out the balances.
    patients.forEach(function (patient) {
      console.log(patients.id + " " + patients.diagnosis);
    });
    // process.exit(0);
  })
  .catch(function (err) {
    console.error("error: " + err.message);
    process.exit(1);
  });

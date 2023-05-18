const express = require("express");
const apiRoutes = require("./routes");
const typeRentApi = require("./routes/typeRent");
const typeSaleApi = require("./routes/typeSale");
const apartmentPlacesApi = require("./routes/apartmentPlaces");
const nodemailer = require("nodemailer");
require("dotenv").config();

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const transport = nodemailer.createTransport({
  service: "gmail", // your email service provider
  auth: {
    user: "khaledluda25@gmail.com", /* info@housepointegypt.com    */
    pass: "ouqtnqratztnhlvt", /* generated password */
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/api", apiRoutes);
app.use("/api/rent", typeRentApi);
app.use("/api/sale", typeSaleApi);
app.use("/api/Property", apartmentPlacesApi);

app.post("/api/send-email", (req, res) => {
  const { name, selectedValue, mobile, email, message, Url } = req.body;

  console.log(req.body);
  const mailOptions = {
    from: email,
    to: "khaledluda25@gmail.com" /* info@housepointegypt.com    */,
    subject: message,
    html: `
    <!DOCTYPE html>
    <html>
      <head>
        <title>New Contact Form Submission</title>
        <style>
          /* Add some basic styling to the table */
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th,
          td {
            padding: 10px;
            border: 1px solid #ccc;
          }
          /* Add some hover effect to the table rows */
          tr:hover {
            background-color: #f5f5f5;
          }
        </style>
      </head>
      <body>
        <h1>Hello i found this property interesting</h1>
        <table>
          <tr>
            <th>Name:</th>
            <td>${name}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>${email}</td>
          </tr>
          <tr>
            <th>Message:</th>
            <td>${message}</td>
          </tr>
          <tr>
            <th>Property:</th>
            <td>${Url}</td>
          </tr>
          <tr>
            <th>Country Code:</th>
            <td>${selectedValue}</td>
          </tr>
          <tr>
            <th>Mobile:</th>
            <td>${mobile}</td>
          </tr>
        </table>
      </body>
    </html>
    
    `,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
    console.log("Email sent: " + info.response);
    return res.json({ message: "Email sent successfully" });
  });
});

app.post("/api/contactUs", (req, res) => {
  const { name, phone, subject, email, message } = req.body;

  console.log(req.body);
  const mailOptions = {
    from: email,
    to: "khaledluda25@gmail.com" /* info@housepointegypt.com    */,
    subject: message,
    html: `
    <!DOCTYPE html>
    <html>
      <head>
        <title>New Contact Form Submission</title>
        <style>
          /* Add some basic styling to the table */
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th,
          td {
            padding: 10px;
            border: 1px solid #ccc;
          }
          /* Add some hover effect to the table rows */
          tr:hover {
            background-color: #f5f5f5;
          }
        </style>
      </head>
      <body>
        <h1>New Contact Form Submission</h1>
        <p>Name: ${name}</p>
        <p>Mobile: ${phone}</p>
        <p>Email: ${email}</p>
        <br />
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p>
        <br />
      </body>
    </html>
    `,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
    console.log("Email sent: " + info.response);
    return res.json({ message: "Email sent successfully" });
  });
});

app.listen(process.env.PORT || "5000", () => {
  console.log(`server is runnity on port ${process.env.PORT || "5000"} `);
});
